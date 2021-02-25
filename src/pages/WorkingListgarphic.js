import React from 'react'
import { Row, Col } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { useLocation } from 'react-router-dom'

export default function WorkingListgarphic() {
  return (
    <Row>
      <Col className="" md={2}>
        <Sidebar />
      </Col>
      <Col className="" md={10}>
        <h1>ออกแบบกราฟฟิค</h1>
      </Col>
    </Row>
  )
}
