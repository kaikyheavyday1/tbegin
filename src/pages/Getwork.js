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
export default function Getwork() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const [work, setWork] = useState([])
  const getAllwork = async () => {
    const fetch = await axios.get(`http://localhost:4000/admin/get-work`)
    const data = await fetch.data
    setWork(data)
  }
  useEffect(() => {
    getAllwork()
  }, [])
  return (
    <div className="container">
      <h1>Admin</h1>
      <h1>Getwork</h1>
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
            <th>Work_Id</th>
            <th>Work_name</th>
            <th>Work_pic</th>
            <th>Price</th>
            <th>Work_time</th>
            <th>Userid</th>
            <th>edit</th>
          </tr>
        </thead>
        {work.length > 0 &&
          work.map((work, index) => {
            return (
              <tbody>
                <tr>
                  <td>{work.id}</td>
                  <td>{work.name}</td>
                  <td>
                    <img src={work.pic1} alt="" width="30%" />
                  </td>
                  <td>{work.price} บาท</td>
                  <td>{work.work_time}</td>
                  <td>{work.user_id}</td>
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
