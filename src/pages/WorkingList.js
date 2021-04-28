import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
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
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)
  const [workname, setWorkname] = useState([])

  useEffect(() => {
    const maintype = query.get('maintype')
    if (maintype === null) {
      getallwork()
    }
  }, [])
  useEffect(() => {
    const maintype = query.get('maintype')
    const subtype = query.get('subtype')
    if (maintype !== null) {
      getworkByMainType(maintype)
    } else if (subtype !== null) {
      const work = getworkBySubType(subtype)
    } else {
      getallwork()
    }
  }, [query.get('maintype'), query.get('subtype')])
  const getworkBySubType = async (subtype) => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?subtype=${subtype}`
    )
    const data = await fetch.data
    setWorks(data)
  }
  const getworkByMainType = async (maintype) => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?maintype=${maintype}`
    )
    const data = await fetch.data
    console.log(data)
    setWorks(data.getworkmaintype)
    setWorkname(data.getnamemaintype[0].name)
  }
  const getallwork = async () => {
    setLoading(true)
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
                <h1 className="maintype mt-5">{workname}</h1>
                {works.length > 0 &&
                  works.map((work, index) => {
                    return (
                      <Col md={6} lg={4} xs={12}>
                        <Cardworking data={work} />
                      </Col>
                    )
                  })}
              </Row>
              <div className="navi mt-5">
                <div>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                      <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#" />
                    </PaginationItem>
                  </Pagination>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
