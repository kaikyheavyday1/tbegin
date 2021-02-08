import './App.css';
import Header from './component/Nav'
import { Route} from 'react-router-dom'

import Hiring from './pages/Hiring'
import Uploadwork from './pages/Uploadwork'
import Howto from './pages/Howto.js'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './component/Home'
import Profile from './pages/Profile'

import Aboutus from './pages/Aboutus'

function App() {
  return (

    <div className="App">
        <Header />
        <Route exact path = "/" component ={Home}/>
        <Route path = "/hiring" component ={Hiring}/>
        <Route path = "/uploadwork" component ={Uploadwork}/>
        <Route path = "/howto" component ={Howto}/>
        <Route path = "/login" component ={Login}/>
        <Route path = "/register" component ={Register}/>
<<<<<<< HEAD
        <Route path = "/profile" component ={Profile}/>
        <Route path = "/Aboutus" component ={Aboutus}/>
=======
        <Route path = "/aboutus" component ={Aboutus}/>
>>>>>>> 989e423c00fea17a94e3cff7ef2338930797d04b
    </div>
  );
}

export default App;
