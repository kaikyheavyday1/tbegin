import React, { useState, useEffect } from 'react'
import noti from '../images/nav/bell.png'
import noti2 from '../images/nav/bell2.png'
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
export default function Notification(props) {
  console.log(props)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [text, setText] = useState([])
  const [status, setStatus] = useState()
  useEffect(() => {
    setText(props.data)
    setStatus(props.status_data, 'hello')
  }, [props])
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <Dropdown className="notification" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="noti-dropdown">
        <NavLink className="nav-link-img2">
          <img src={noti} alt="noti" height="25px" className="mt-1" />
          <span className="badge2">3</span>
        </NavLink>
      </DropdownToggle>
      <DropdownMenu className="notimenu">
        <DropdownItem>{text}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
