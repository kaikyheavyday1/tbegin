import React from 'react'
import { Row, Col } from 'reactstrap'
import pic from '../images/home/7.jpg'
import chat from '../pages/Chat'

export default function ChatMessage(props) {
  return (
    <div className="chat-message">
      <div className="chat-header">
        <h2 className="font-weight-bold ml-3">kaiky</h2>
      </div>
      <div className="msg">
        <div className="from mr-2 text-right">
          <small>03:20</small>
          <div className="msg-from">
            <div className="msg-wrap">
              <p>asdasdasdasdsadsad</p>
            </div>
          </div>
        </div>
        <div className="from mr-2 text-right">
          <small>03:20</small>
          <div className="msg-from">
            <div className="msg-wrap">
              <p>asdasdasdasdsadsad</p>
            </div>
          </div>
        </div>
        <div className="to ml-2 text-left">
          <div className="d-flex">
            <img src={pic} height="35px" width="35px" className="mt-2" />
            <div className="ml-2">
              <small>03:20</small>
              <div className="msg-to">
                <div className="msg-wrap">
                  <p>asdasdasdasdsadsad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <Row className="">
          <Col lg={10} md={10} sm={10} xs={10} className="mt-2 mb-1">
            <textarea
              class="form-control"
              rows="1"
              onChange={props.sendinputfn}
              id="message"
            ></textarea>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="mt-2 mb-1 text-center">
            <button type="button" onClick={props.sendfn} id={props.userID}>
              ส่ง
            </button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
