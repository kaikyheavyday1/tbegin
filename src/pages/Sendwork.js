import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Sendwork() {
  let query = useQuery()
  const from_id = query.get('from_id')
  const to_id = query.get('to_id')
  const work_id = query.get('work_id')
  const trans_id = query.get('trans_id')
  const [working, setWorking] = useState()
  useEffect(() => {
    getProfile()
  }, [])
  const getProfile = async () => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    const dataUser = {
      email: data[0].email,
      firstname: data[0].name,
      from_id: from_id,
      to_id: to_id,
      work_id: work_id,
      trans_id: trans_id,
    }
    setWorking(dataUser)
  }
  const handleButtonSubmit = async (e) => {
    console.log(working)
    swal('ส่งงานเสร็จสิ้น!', 'You clicked the button!', 'success')
    const fetch = await axios.post(
      'http://localhost:4000/work_transaction/changetoreview',
      working
    )
    const data = await fetch.data
  }
  return (
    <div className="container">
      <Row className="sendwork">
        <Col lg="12" className="mt-5">
          <h1 className="mt-5">กรุณาใส่ลิงค์ส่งงานของคุณ</h1>
          <input
            className="form-control mt-3"
            type="text"
            placeholder="คำแนะนำควรใส่เป็นลิงค์ GoogleDrive"
          ></input>
          <Link to={`/Chat/${from_id}`}>
            <button
              type="button"
              className="col-3 regisfl2 mt-3"
              onClick={handleButtonSubmit}
            >
              ส่งงานของคุณ
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
