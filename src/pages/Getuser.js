import React, { useState, useEffect } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Table,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
export default function Getuser() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const [user, setUser] = useState([])
  const getAlluser = async () => {
    const fetch = await axios.get(`http://localhost:4000/admin/get-user`)
    const data = await fetch.data
    setUser(data)
  }
  useEffect(() => {
    getAlluser()
  }, [])
  return (
    <div className="container">
      <h1>Admin</h1>
      <h1>Getuser</h1>
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
      <Table bordered>
        <thead>
          <tr>
            <th>UserID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>email</th>
            <th>Gender</th>
            <th>Tel</th>
            <th>Birthday</th>
            <th>Createdate</th>
            <th>Role</th>
            <th>edit</th>
          </tr>
        </thead>
        {user.length > 0 &&
          user.map((user, index) => {
            return (
              <tbody>
                <tr>
                  <td>{user.user_id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthday}</td>
                  <td>{user.create_date}</td>
                  <td>{user.role}</td>
                  <td>
                    <button type="button" className="">
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })}
      </Table>
    </div>
  )
}
