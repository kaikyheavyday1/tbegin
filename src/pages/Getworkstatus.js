import React, { useState, useEffect } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Table,
} from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import promptpaybank from '../images/payment/promptpaybank.png'

export default function Getworkstatus() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const [workstatus, setWorkstatus] = useState([])
  const getstatus = async () => {
    const fetch = await axios.get(`http://localhost:4000/admin/get-work-status`)
    const data = await fetch.data
    setWorkstatus(data)
    console.log(data)
  }
  useEffect(() => {
    getstatus()
  }, [])
  return (
    <div className="container">
      <h1>Admin</h1>
      <h1>Getworkstatus</h1>
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
            <th>Work_id</th>
            <th>Work_name</th>
            <th>From_id</th>
            <th>To_id</th>
            <th>Status</th>
            <th>Trans_id</th>
            <th>payment</th>
            <th>edit</th>
          </tr>
        </thead>
        {workstatus.length > 0 &&
          workstatus.map((workstatus, index) => {
            return (
              <tbody>
                <tr>
                  <td>{workstatus.work_id}</td>
                  <td>{workstatus.work_name}</td>
                  <td>{workstatus.from_id}</td>
                  <td>{workstatus.to_id}</td>
                  <td>{workstatus.status}</td>
                  <td>{workstatus.transaction_id}</td>
                  <td>
                    <img src={workstatus.payment_img} alt="" width="30%" />
                  </td>
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
