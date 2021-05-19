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
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Notification(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [a, setA] = useState([])
  const [status, setStatus] = useState()
  const [toID, setToID] = useState()

  useEffect(() => {
    getallNoti()
  }, [])

  const getallNoti = async () => {
    const fetch = await axios.get('http://localhost:4000/notification/getall', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    setA(data)
  }

  useEffect(() => {
    if (props.data) {
      getallNoti()
      setStatus(props.status_data)
    }
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
        {a.length > 0 &&
          a.map((data, index) => {
            return (
              <DropdownItem>
                <Link to={`/Chat/${data.from_id}`}>{data.message}</Link>
              </DropdownItem>
            )
          })}
      </DropdownMenu>
    </Dropdown>
  )
}
