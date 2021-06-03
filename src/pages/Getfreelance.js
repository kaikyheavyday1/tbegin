import React, { useState, useEffect } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Table,
} from 'reactstrap'
import promptpaybank from '../images/payment/promptpaybank.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Getfreelance() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const [freelance, setFreelance] = useState([])
  const getAllfreelance = async () => {
    const fetch = await axios.get(`http://localhost:4000/admin/get-freelance`)
    const data = await fetch.data
    setFreelance(data)
  }
  useEffect(() => {
    getAllfreelance()
  }, [])
  return (
    <div className="container">
      <h1>Admin</h1>
      <h1>Getfreelance</h1>
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
            <th>FreelanceID</th>
            <th>Card_id</th>
            <th>Card_img</th>
            <th>Bank_name</th>
            <th>Bank_id</th>
            <th>Bank_pic</th>
            <th>edit</th>
          </tr>
        </thead>
        {freelance.length > 0 &&
          freelance.map((freelance, index) => {
            return (
              <tbody>
                <tr>
                  <td>{freelance.id}</td>
                  <td>{freelance.card_id}</td>
                  <td>
                    <img src={freelance.card_img1} alt="" width="25%" />
                    <img src={freelance.card_img2} alt="" width="25%" />
                  </td>
                  <td>{freelance.bank_name}</td>
                  <td>{freelance.bank_number}</td>
                  <td>
                    <img src={freelance.bank_pic} alt="" width="100%" />
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
