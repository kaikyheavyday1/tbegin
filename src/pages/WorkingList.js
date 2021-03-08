import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Sidebar from '../component/Sidebar'
import { useLocation } from 'react-router-dom'
import Cardhiring from '../component/Cardhiring'
import Sidebar2 from '../component/Sidebar2'
import axios from 'axios'
import Cardworking from '../component/Cardworking'
import Loading from '../component/Loading'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function WorkingList() {
  let query = useQuery()
  let type = query.get('type')
  let subtype = query.get('subtype')

  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getwork()
  }, [])

  const getwork = async () => {
    console.log('hello')
    const fetch = await axios.get(
      'http://localhost:4000/work/get-work?allwork=true',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    const data = await fetch.data
    console.log(data)
    setWorks(data)
    setLoading(false)
  }
  return (
    <Row>
      <Col lg={12} className="allpagesidebar">
        {loading ? <Loading /> : null}
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
