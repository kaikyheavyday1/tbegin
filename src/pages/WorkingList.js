import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { useLocation } from 'react-router-dom'

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
      <Col md={12} className="allpagesidebar">
        <Row>
          <Sidebar />
          <Col md={10}>
            <h1>{type}</h1>
            <h1>{subtype}</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
