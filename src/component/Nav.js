import React, { Component } from 'react'
import logo from '../images/logo in navbar.png'
import user from '../images/nav/user.png'
import noti from '../images/nav/bell.png'
import chat from '../images/nav/chat.png'
import { withRouter, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      dropdownOpen: false,
    }

    this.toggle = this.toggle.bind(this)
    this.dropdowntoggle = this.dropdowntoggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  dropdowntoggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
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
          <NavLink>
            <Link to="/working-list">จ้างงาน</Link>
          </NavLink>
          <NavLink>
            <Link to="/aboutus">เกี่ยวกับเรา</Link>
          </NavLink>
          <NavLink>
            <Link to="/howto">วิธีการใช้งาน</Link>
          </NavLink>
          <NavLink className="nav-link-img">
            <Link to="/test">
              <img src={chat} alt="noti" height="25px" />
            </Link>
          </NavLink>
          <NavLink className="nav-link-img">
            <img src={noti} alt="noti" height="25px" className="mt-1" />
          </NavLink>
          <Dropdown
            className="ml-2"
            isOpen={this.state.dropdownOpen}
            toggle={this.dropdowntoggle}
          >
            <DropdownToggle className="user-dropdown">
              <img src={user} alt="user" height="30px" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile">โปรไฟล์ของฉัน</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/registerfreelance">สมัครเป็นฟรีแลนซ์</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/uploadwork">ลงผลงาน</Link>
              </DropdownItem>
              <DropdownItem>ข้อความ</DropdownItem>
              <DropdownItem>
                <a href="" onClick={this.Logout}>
                  ออกจากระบบ
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      )
    } else {
      return (
        <Nav className="allnav-item ml-auto" navbar>
          <NavLink>
            <Link to="/working-list">จ้างงาน</Link>
          </NavLink>
          <NavLink>
            <Link to="/uploadwork">ลงผลงาน</Link>
          </NavLink>
          <NavLink>
            <Link to="/aboutus">เกี่ยวกับเรา</Link>
          </NavLink>
          <NavLink>
            <Link to="/howto">วิธีการใช้งาน</Link>
          </NavLink>
          <NavLink>
            <Link to="/login">เข้าสู่ระบบ</Link>
          </NavLink>
          <NavLink id="btn-nav">
            <Link to="/register">สมัครสมาชิก</Link>
          </NavLink>
        </Nav>
      )
    }
  }
  Logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('access-token')
    window.location.href = 'http://localhost:3000/'
  }
}
export default withRouter(Header)
