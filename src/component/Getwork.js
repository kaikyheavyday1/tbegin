import React, { useState, useEffect } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Table,
} from 'reactstrap'
import axios from 'axios'
import promptpaybank from '../images/payment/promptpaybank.png'
export default function Getwork() {
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
  )
}
