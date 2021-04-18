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

let socket
let ENDPOINT = 'localhost:4000'

function App() {
  const [userid, setUserid] = useState()
  useEffect(() => {
    profile()
    console.log(userid)
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
    socket.emit('create-waiting-room', { userid })
  }, [])
  useEffect(() => {
    socket.on('receive', (testmsg) => {
      console.log(testmsg)
    })
  })
  const profile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
    let data = await fetch.data
    data = data[0]
    setUserid(data.id)
  }
  return (
    <div className="App">
      <Header />
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
        <Route path="/Chat" component={Chat} />
        <Route path="/Question" component={Question} />
        <Route path="/Anotherprofile/:userid" component={Anotherprofile} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
