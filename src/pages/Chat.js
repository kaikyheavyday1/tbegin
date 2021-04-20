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

  const [message, setMessage] = useState('')
  const [room, setRoom] = useState('')
  const [userID, setUserID] = useState()
  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
  }, [])
  useEffect(() => {
    const { userID } = props.match.params
    userID !== undefined && setUserID(userID)
  }, [userID])
  const handleMessageChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setMessage({ ...message, [id]: value })
  }
  useEffect(() => {
    getsendMsg()
  }, [userID])
  const sendmessage = (e) => {
    const id = e.target.id
    console.log(id)
    message !== '' &&
      socket.emit(
        'send-message',
        { message: message, toID: id },
        ({ message }) => {
          console.log(message)
        }
      )
    getsendMsg()
  }
  const getsendMsg = async () => {
    if (userID !== undefined) {
      const fetch = await axios.get(
        `http://localhost:4000/chatmsg/getmsg?toID=${userID}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
          },
        }
      )
      let data = await fetch.data
      console.log(data)
    }
  }
  useEffect(() => {
    socket.on('receive', ({ event }) => {
      if (event.event === 'receive') {
      }
    })
  })

  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12} className="left-chat">
          <Chatcontact />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="middle-chat">
          <ChatMessage
            sendfn={sendmessage}
            sendinputfn={handleMessageChange}
            userID={userID}
          />
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="right-chat">
          <ChatTransaction />
        </Col>
      </Row>
    </div>
  )
}
