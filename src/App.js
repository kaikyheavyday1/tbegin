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
import Sidebar from './component/Sidebar'
import WorkingList from './pages/WorkingList'
import WorkingListgarphic from './pages/WorkingListgarphic'
import Footer from './component/Footer'
import Hiring from './pages/Hiring'
import Test from './pages/Test'
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
      <Route path="/working-list-graphic" component={WorkingListgarphic} />
      <Route path="/hiring" component={Hiring} />
      <Route path="/Sidebar" component={Sidebar} />
      <Route path="/test" component={Test} />

      <Footer />
    </div>
  )
}

export default App
