import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import io from 'socket.io-client'
import axios from 'axios'
import Chatcontact from '../component/Chatcontact'
import ChatMessage from '../component/ChatMessage'
import ChatTransaction from '../component/ChatTransaction'

let socket
let ENDPOINT = 'localhost:4000'
export default function Chat() {
  const [room, setRoom] = useState('')
  useEffect(() => {
    console.log('chat')
    socket = io(ENDPOINT)
    socket.emit('test')
  }, [ENDPOINT])
  useEffect(() => {
    profile()
    socket.on('receive', (messeage) => {
      console.log(messeage)
    })
  }, [])
  const profile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    data = data[0]
    console.log(data.id)
  }
  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12} className="left-chat">
          <Chatcontact />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="middle-chat">
          <ChatMessage />
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="right-chat">
          <ChatTransaction />
        </Col>
      </Row>
    </div>
  )
}
