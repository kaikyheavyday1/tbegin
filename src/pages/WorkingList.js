import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { useLocation } from 'react-router-dom'
import Cardhiring from '../component/Cardhiring'
import Sidebar2 from '../component/Sidebar2'
import axios from 'axios'
import Cardworking from '../component/Cardworking'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function WorkingList() {
  let query = useQuery()
  let type = query.get('type')
  let subtype = query.get('subtype')
  console.log(type, subtype)
  const [works, setWorks] = useState([])
  useEffect(() => {
    getwork()
  }, [])
  const getwork = async () => {
    const fetch = await axios.get('http://localhost:4000/work/getallwork')
    const data = await fetch.data
    console.log(data)
    setWorks(data)
  }
  return (
    <Row>
      <Col lg={12} className="allpagesidebar">
        <Row>
          <Col className="ml-0" lg={2} md={3} xs={12}>
            <Sidebar />
            <Sidebar2 />
          </Col>
          <Col lg={10} md={9} xs={12}>
            <Container>
              <Row>
                {works.length > 0 &&
                  works.map((work, index) => {
                    return (
                      <Col md={6} lg={4} xs={12}>
                        <Cardworking data={work} />
                      </Col>
                    )
                  })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
