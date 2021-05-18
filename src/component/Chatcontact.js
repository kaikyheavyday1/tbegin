import React, { useEffect, useState } from 'react'
import pic from '../images/home/7.jpg'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Chatcontact(props) {
  const myID = props.myID
  const [history, setHistory] = useState([])
  useEffect(() => {
    gethistory()
  }, [myID])
  const gethistory = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/chatmsg/history?userid=${myID}`
    )
    let data = await fetch.data
    setHistory(data)
  }
  return (
    <div className="chat-contact w-100">
      <div className="chat-header">
        <h2 className="pl-3">กล่องข้อความ</h2>
      </div>
      <div className="contact-list">
        {history.length > 0 &&
          history.map((history, index) => {
            return (
              <div className="contact pl-3 pt-2" key={index}>
                <div className="d-flex">
                  <img src={history.profile_pic} width="50px" height="50px" />
                  <div className="ml-3 mt-n2">
                    <h3 className="font-weight-bold">
                      <Link to={`/Chat/${history.to_id}`}>
                        {history.name} {history.surname}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
