import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import io from 'socket.io-client'
import axios from 'axios'
import Chatcontact from '../component/Chatcontact'
import ChatMessage from '../component/ChatMessage'
import ChatTransaction from '../component/ChatTransaction'
import Swal from 'sweetalert2'

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
    checkstatus()
  }, [userID])
  const checkstatus = async () => {
    console.log(userID)
    if (userID !== undefined) {
      try {
        const fetch = await axios.get(
          `http://localhost:4000/work_transaction/checkhiring?from_id=${userID}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
            },
          }
        )
        let data = await fetch.data
        console.log(data)
        console.log(data[0].status)
        if (data[0].status === 1) {
          console.log('hello status 1 na')
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
          })

          swalWithBootstrapButtons
            .fire({
              title: `${data[0].user_name}  ${data[0].user_surname} ได้จ้างงาน ${data[0].work_name} ของคุณ`,
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                const fetch = await axios.get(
                  `http://localhost:4000/work_transaction/changetopayment?from_id=${userID}&&workid=${data[0].work_id}`,
                  {
                    headers: {
                      Authorization:
                        'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
                    },
                  }
                )
                swalWithBootstrapButtons.fire(
                  'คุณได้ตอบรับงานแล้ว',
                  'เริ่มทำงานได้',
                  'success'
                )
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                const fetch = await axios.get(
                  `http://localhost:4000/work_transaction/cancelwork?from_id=${userID}&&workid=${data[0].work_id}`,
                  {
                    headers: {
                      Authorization:
                        'Bearer ' + localStorage.getItem('access-token'),
                    },
                  }
                )
                const data2 = await fetch.data
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Your imaginary file is safe :)',
                  'error'
                )
              }
            })
        } else if (data[0].status === 2) {
          console.log('i love to be')
          const fetch = await axios.get(
            `http://localhost:4000/work_transaction/verifypayment?from_id=${userID}&&workid=${data[0].work_id}`,
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access-token'),
              },
            }
          )
          const datastatus2 = await fetch.data
          console.log(datastatus2)
        } else if (data[0].status === 3) {
          console.log('333333333')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
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
