import './App.css'
import Header from './component/Nav'
import { Route, Router, Switch } from 'react-router-dom'
import react, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

import Uploadwork from './pages/Uploadwork'
import Howto from './pages/Howto.js'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './component/Home'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import Registerfreelance from './pages/Registerfreelance'
import Working from './pages/Working'
import Editprofile from './pages/Editprofile'
import WorkingList from './pages/WorkingList'
import Editwork from './pages/Editwork'
import Loading from './component/Loading'
import Footer from './component/Footer'
import Test from './pages/Test'
import Cardworking from './component/Cardworking'
import Cardhiring from './component/Cardhiring'
import Error from './component/Error'
import Chat from './pages/Chat'
import Question from './pages/Question'
import Anotherprofile from './pages/Anotherprofile'
import Payment from './pages/Payment'
let socket
let ENDPOINT = 'localhost:4000'

function App() {
  const [userid, setUserid] = useState()
  const [toID, setToID] = useState()
  const [notitext, setNotitext] = useState([])
  const [transaction, setTransaction] = useState()
  useEffect(() => {
    if (localStorage.getItem('access-token') !== null) {
      socket = io(ENDPOINT, {
        extraHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        },
      })
      socket.emit('create-waiting-room')
      socket.emit('create-noti-room')
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('access-token') !== null) {
      socket.on('receive', (testmsg) => {
        console.log(testmsg)
        setNotitext(testmsg.text)
        setTransaction(testmsg.status)
        setToID(testmsg.user)
      })
    }
  }, [toID])

  return (
    <div className="App">
      {toID !== undefined && console.log('love')}
      <Header data={notitext} status_data={transaction} toID={toID} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/uploadwork" component={Uploadwork} />
        <Route path="/howto" component={Howto} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/profile" component={Profile} />
        <Route path="/Registerfreelance" component={Registerfreelance} />
        <Route path="/editprofile" component={Editprofile} />
        <Route path="/working/:workid" component={Working} />
        <Route path="/working-list" component={WorkingList} />
        <Route path="/test" component={Test} />
        <Route path="/Cardworking" component={Cardworking} />
        <Route path="/Cardhiring" component={Cardhiring} />
        <Route path="/editwork" component={Editwork} />
        <Route path="/Loading" component={Loading} />
        <Route path="/Chat/:userID" component={Chat} />
        <Route path="/Question" component={Question} />
        <Route path="/Anotherprofile/:userid" component={Anotherprofile} />
        <Route path="/Payment" component={Payment} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
