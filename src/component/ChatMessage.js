import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import pic from '../images/home/7.jpg'
import chat from '../pages/Chat'
import Messages from '../component/messages/Messages'
import Message from '../component/messages/Message/Message'
import ScrollToBottom from 'react-scroll-to-bottom'
import io from 'socket.io-client'
import axios from 'axios'
let socket
let ENDPOINT = 'localhost:4000'
export default function ChatMessage(props) {
  const [input, setInput] = useState('')
  const [nametoID, setnametoID] = useState()
  const [surnametoID, setSurnametoID] = useState()
  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
  }, [])
  useEffect(() => {
    getnametoID()
  })
  const getnametoID = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/profile/get?userid=${props.userID}`
    )
    let data = await fetch.data
    setnametoID(data[0].name)
    setSurnametoID(data[0].surname)
  }
  const handleMessageChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setInput(value)
  }
  const sendmessage = (e) => {
    const id = e.target.id
    const mymsg = { text: input, user: props.myID, firstname: props.firstname }
    props.setMessage((oldmsg) => [...oldmsg, mymsg])
    input !== '' &&
      socket.emit(
        'send-message',
        { message: input, toID: id },
        ({ input }) => {}
      )
  }
  return (
    <div className="chat-message">
      <div className="chat-header">
        <h2 className="font-weight-bold ml-3">
          {nametoID} {surnametoID}
        </h2>
      </div>
      <div className="message-area">
        {props.message.length > 0 &&
          props.firstname !== '' &&
          props.myID !== undefined && (
            <ScrollToBottom className="messages">
              {props.message.map((message, i) => {
                return (
                  <div key={i}>
                    <Message
                      message={message}
                      name={props.myID}
                      myname={props.firstname}
                      firstname2={message.firstname}
                    />
                  </div>
                )
              })}
            </ScrollToBottom>
          )}
      </div>
      <div className="chat-input">
        <Row className="">
          <Col lg={10} md={10} sm={10} xs={10} className="mt-2 mb-1">
            <input
              class="form-control"
              rows="1"
              onChange={handleMessageChange}
              onKeyPress={handleMessageChange}
              id="message"
            ></input>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="mt-2 mb-1 text-center">
            <button type="button" onClick={sendmessage} id={props.userID}>
              ส่ง
            </button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
