import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'

export default function ChatTransaction() {
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
          <button type="button" className="text-center">
            จ้างงาน
          </button>
        </div>
      </div>
    </div>
  )
}
