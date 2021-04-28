import React, { useState, useEffect } from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import axios from 'axios'
import swal from 'sweetalert'
import io from 'socket.io-client'

let socket
let ENDPOINT = 'localhost:4000'

export default function ChatTransaction(props) {
  const toID = props.toID
  const myID = props.myID
  const [workname, setWorkname] = useState([])
  const [workingname, setWorkingname] = useState([])

  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'),
      },
    })
  }, [])

  useEffect(() => {
    getworkname()
  }, [toID])

  const getworkname = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?otheruserid=${toID}`
    )
    let data = await fetch.data
    setWorkname(data)
  }
  const handleWorknameChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setWorkingname({ ...workingname, [id]: value })
    console.log(workingname)
  }
  const handleButtonSubmit = async (e) => {
    const fetch = await axios.post(
      'http://localhost:4000/chatmsg/transaction',
      { toID: toID, myID: myID, workingname: workingname }
    )
    const data = await fetch.data
    socket.emit('send-noti', { toID: toID, workname: workingname })
    if (data.status === true) {
      swal('Good job!', 'You clicked the button!', 'success')
    }
  }
  return (
    <div className="chat-transaction">
      <div className="chat-header">
        <h2 className="ml-2">สถานะดำเนินงาน</h2>
      </div>
      <div className="">
        <Timeline className="ml-n5 mb-n2">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>ส่งรายละเอียดงาน</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>ยืนยันการจ้างงาน</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>ชำระค่าบริการ</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>กำลังดำเนินการทำงาน</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>รีวิวงานที่ได้รับ</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>เสร็จสิ้นการจ้างงาน</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="col-11">
        <h4 className="font-weight-bold">สอบถามรายละเอียดงาน</h4>
        <p>
          สอบถามรายละเอียดของงานกับทางฟรีแลนซ์
          สามารถแจ้งความต้องการของงานที่คุณต้องการและคุยรายละเอียดทั้งราคาและเวลาการดำเนินงานให้ครบถ้วนเพื่อที่จะดำเนินการจ้างงาน
        </p>
        <div className="text-center">
          <div className="form-group">
            <select
              className="form-control"
              id="workname"
              onChange={handleWorknameChange}
            >
              <option value="">เลือกงานที่คุณจ้าง</option>
              {workname.length > 0
                ? workname.map((workname, index) => {
                    return (
                      <option key={index} value={`${workname.workid}`}>
                        {workname.name}
                      </option>
                    )
                  })
                : null}
            </select>
          </div>
          <button
            type="button"
            onClick={handleButtonSubmit}
            className="text-center"
          >
            จ้างงาน
          </button>
        </div>
      </div>
    </div>
  )
}
