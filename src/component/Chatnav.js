import React from 'react'
import chat from '../images/nav/chat.png'
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
import { withRouter, Link } from 'react-router-dom'
export default function Chatnav() {
  return (
    <NavLink className="nav-link-img1">
      <Link to="/chat">
        <img src={chat} alt="noti" height="25px" className="" />
        <span className="badge1">1</span>
      </Link>
    </NavLink>
  )
}
