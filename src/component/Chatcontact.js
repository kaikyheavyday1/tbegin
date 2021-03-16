import React from 'react'
import pic from '../images/home/7.jpg'
import { Row, Col } from 'reactstrap'
export default function Chatcontact() {
  return (
    <div className="chat-contact w-100">
      <div className="chat-header">
        <h2 className="pl-3">กล่องข้อความ</h2>
      </div>
      <div className="contact-list">
        <div className="d-flex justify-content-between contact pl-3 pt-2">
          <div className="d-flex">
            <img src={pic} width="50px" height="50px" />
            <div className="ml-3 mt-n2">
              <h3 className="font-weight-bold">Kaiky</h3>
              <p>สวัสดี</p>
            </div>
          </div>
          <div>
            <p>13.00 น.</p>
          </div>
        </div>
        <div className="d-flex justify-content-between contact pl-3 pt-2">
          <div className="d-flex">
            <img src={pic} width="50px" height="50px" />
            <div className="ml-3 mt-n2">
              <h3 className="font-weight-bold">Kaiky</h3>
              <p>สวัสดี</p>
            </div>
          </div>
          <div>
            <p>13.00 น.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
