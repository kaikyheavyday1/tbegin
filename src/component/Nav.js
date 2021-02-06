import React, { Component } from 'react'
import logo from "../images/logo in navbar.png"
import { withRouter, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
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
  render() {
    return (
      <div>
        <Navbar className="nav-bg" expand="md">
          <div className="container">
            <NavbarBrand href="/" className="logo-brand">
              <img src={logo} alt="logo-first" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {this.renderNavlink()}
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }

  renderNavlink = () => {
    if (localStorage.getItem('access-token')) {
      return (
        <Nav className="allnav-item ml-auto" navbar>
          <NavLink><Link to="/hiring">จ้างงาน</Link></NavLink>
          <NavLink><Link to="/uploadwork">ลงผลงาน</Link></NavLink>
          <NavLink><Link to="/howto">วิธีการใช้งาน</Link></NavLink>
          <NavLink><a href ='' onClick = {this.Logout}>ออกจากระบบ</a></NavLink>
        </Nav>
      )
    } else {
      return (
        <Nav className="allnav-item ml-auto" navbar>
          <NavLink><Link to="/hiring">จ้างงาน</Link></NavLink>
          <NavLink><Link to="/uploadwork">ลงผลงาน</Link></NavLink>
          <NavLink><Link to="/howto">วิธีการใช้งาน</Link></NavLink>
          <NavLink><Link to="/login">เข้าสู่ระบบ</Link></NavLink>
          <NavLink id="btn-nav"><Link to="/register">สมัครเป็นฟรีแลนซ์</Link></NavLink>
        </Nav>
      )
    }
  }
  Logout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('access-token')
    window.location.href = "http://localhost:3000/"
  }

}
export default withRouter(Header)
