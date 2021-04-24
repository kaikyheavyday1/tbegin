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
  const [message, setMessage] = useState([])
  const [room, setRoom] = useState('')
  const [userID, setUserID] = useState()
  const [myID, setMyID] = useState()
  const [firstname, setFirstname] = useState('')
  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
    socket.emit('create-waiting-room')
  }, [])

  useEffect(() => {
    const { userID } = props.match.params
    userID !== undefined && setUserID(userID)
  }, [props.match.params])

  useEffect(() => {
    userID !== undefined && getsendMsg()
  }, [userID])
  useEffect(() => {
    myProfile()
  }, [])
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
      setMessage(data)
    }
  }
  const myProfile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    data = data[0]
    setMyID(data.id)
    setFirstname(data.name)
  }
  useEffect(() => {
    if (localStorage.getItem('access-token') !== null) {
      socket.on('receive', (msg) => {
        console.log(msg)
        setMessage((oldmsg) => [...oldmsg, msg])
      })
    }
  }, [])
  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12} className="left-chat">
          <Chatcontact myID={myID} />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="middle-chat">
          <ChatMessage
            userID={userID}
            myID={myID}
            firstname={firstname}
            message={message}
            setMessage={setMessage}
          />
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="right-chat">
          <ChatTransaction toID={userID} myID={myID} />
        </Col>
      </Row>
    </div>
  )
}
