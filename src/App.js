import './App.css'
import Header from './component/Nav'
import { Route, Router, Switch } from 'react-router-dom'

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

import Footer from './component/Footer'
import Test from './pages/Test'
import Cardworking from './component/Cardworking'
import Cardhiring from './component/Cardhiring'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/uploadwork" component={Uploadwork} />
      <Route path="/howto" component={Howto} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/profile" component={Profile} />
      <Route path="/Registerfreelance" component={Registerfreelance} />
      <Route path="/editprofile" component={Editprofile} />
      <Route path="/working" component={Working} />
      <Route path="/working-list" component={WorkingList} />
      <Route path="/test" component={Test} />
      <Route path="/Cardworking" component={Cardworking} />
      <Route path="/Cardhiring" component={Cardhiring} />
      <Route path="/editwork" component={Editwork} />
      <Footer />
    </div>
  )
}

export default App
