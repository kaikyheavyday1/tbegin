import React, { Component } from 'react'
import logo from '../images/logo in navbar.png'
import user from '../images/nav/user.png'
import noti from '../images/nav/bell.png'
import chat from '../images/nav/chat.png'
import search from '../images/nav/loupe.svg'
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
import SearchField from 'react-search-field'
import axios from 'axios'
import Notification from '../component/Notification'
import Chatnav from './Chatnav'
import Search from './Search'

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
            <Search></Search>
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
          <Chatnav></Chatnav>
          <Notification
            data={this.props.data}
            status_data={this.props.status_data}
          ></Notification>
          <Dropdown
            className="ml-2"
            isOpen={this.state.dropdownOpen}
            toggle={this.dropdowntoggle}
          >
            <DropdownToggle className="user-dropdown">
              <img src={user} alt="user" alt="user" height="30px" />
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
