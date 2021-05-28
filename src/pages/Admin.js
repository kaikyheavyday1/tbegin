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
import Getuser from '../component/Getuser'
import Getfreelance from '../component/Getfreelance'
import Getwork from '../component/Getwork'
import Getworkstatus from '../component/Getworkstatus'

export default function Admin() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <div className="container">
      <h1>Admin</h1>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Get User</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Get Freelance</DropdownItem>
          <DropdownItem>Get Work</DropdownItem>
          <DropdownItem>Get Work Status</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div>
        <Getworkstatus></Getworkstatus>
      </div>
    </div>
  )
}
