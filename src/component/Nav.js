import React, { Component } from 'react'
import logo from "../images/Ver2.png"
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component{
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render(){
      return(
        <div>
          <Navbar className = "nav-bg" expand="md">
            <div className = "container">
            <NavbarBrand href="/" className="logo-brand">
              <img src = {logo} alt = "logo-first"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="allnav-item ml-auto" navbar>
                <NavLink><Link to = "/hiring">จ้างงาน</Link></NavLink>
                <NavLink><Link to = "/uploadwork">ลงผลงาน</Link></NavLink>
                <NavLink><Link to = "/howto">วิธีการใช้งาน</Link></NavLink>
                <NavLink><Link to = "/login">เข้าสู่ระบบ</Link></NavLink>
                <NavLink id = "btn-nav"><Link to = "/register">สมัครเป็นฟรีแลนซ์</Link></NavLink>
            </Nav>
            </Collapse>
            </div>
          </Navbar>
        </div>
      )
    }
}
export default Header
