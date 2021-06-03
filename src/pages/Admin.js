import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Table,
} from 'reactstrap'

export default function Admin() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <div className="container">
      <h1>Admin</h1>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>เลือก</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="Getuser">Get User</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="Getfreelance">Get Freelance</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="Getwork">Get Work</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="Getworkstatus">Get Work Status</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div className="adminpage"></div>
    </div>
  )
}
