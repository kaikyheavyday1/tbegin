import './App.css';
import Header from './component/Nav'
import { Route} from 'react-router-dom'

import Hiring from './pages/Hiring'
import Uploadwork from './pages/Uploadwork'
import Howto from './pages/Howto.js'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './component/Home'
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
        <Route path = "/Aboutus" component ={Aboutus}/>
    </div>
  );
}

export default App;
