import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { useLocation } from 'react-router-dom'
import Cardhiring from '../component/Cardhiring'
import Sidebar2 from '../component/Sidebar2'
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function WorkingList() {
  let query = useQuery()
  let type = query.get('type')
  let subtype = query.get('subtype')
  console.log(type, subtype)

  return (
    <Row>
      <Col lg={12} className="allpagesidebar">
        <Row>
          <Col className="ml-0" lg={2} md={3} xs={12}>
            <Sidebar />
            <Sidebar2 />
          </Col>
          <Col lg={10} md={9} xs={12}>
            <Cardhiring />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
