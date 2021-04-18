import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import io from 'socket.io-client'
import axios from 'axios'
import Chatcontact from '../component/Chatcontact'
import ChatMessage from '../component/ChatMessage'
import ChatTransaction from '../component/ChatTransaction'

let socket
let ENDPOINT = 'localhost:4000'
export default function Chat(props) {
  // const [room, setRoom] = useState('')
  // useEffect(() => {
  //   console.log('chat')
  //   socket = io(ENDPOINT)
  //   socket.emit('test')
  // }, [ENDPOINT])

  const [message, setMessage] = useState('ilove')
  const [room, setRoom] = useState('')
  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
  }, [])
  const sendmessage = (e) => {
    const id = e.target.id
    console.log(id)
    socket.emit('send-message', { message: message, toID: id })
  }
  useEffect(() => {
    socket.on('receive', (message) => {
      console.log(message)
    })
  })

  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12} className="left-chat">
          <Chatcontact />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="middle-chat">
          <ChatMessage sendfn={sendmessage} />
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="right-chat">
          <ChatTransaction />
        </Col>
      </Row>
    </div>
  )
}
