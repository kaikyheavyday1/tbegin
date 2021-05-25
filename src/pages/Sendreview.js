import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'
import { useLocation } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Sendreview() {
  let query = useQuery()
  const from_id = query.get('from_id')
  const to_id = query.get('to_id')
  const work_id = query.get('work_id')
  const trans_id = query.get('trans_id')
  const [sendrating, setsendRating] = useState()
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
    setsendRating(dataUser)
  }
  const ratingChanged = (newRating) => {
    setsendRating({ ...sendrating, rating: newRating })
  }
  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setsendRating({ ...sendrating, [id]: value })
  }
  const handleButtonSubmit = async () => {
    swal(
      'ส่งความคิดเห็นและเรทติ้งเรียบร้อยสิ้นสุดการดำเนินงาน!',
      'You clicked the button!',
      'success'
    )
    const fetch = await axios.post(
      'http://localhost:4000/work_transaction/changetosuccess',
      sendrating
    )
    const data = await fetch.data
  }
  return (
    <div className="container">
      <Row className="sendreview">
        <Col lg="12" className="mt-5">
          <h1>กรุณาแสดงความคิดเห็น</h1>
          <input
            className="form-control mt-3"
            type="text"
            placeholder="คำแนะนำแสดงความคิดเห็นเกี่ยวกับการทำงานและผลงาน"
            onChange={handleInputChange}
            id="comment"
          ></input>
          <div className="d-flex">
            <h2 className="mt-3">กรุณาให้เรทติ้งงาน : </h2>
            <ReactStars
              classNames="mt-3 ml-2"
              count={5}
              onChange={ratingChanged}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <Link to="/">
            <button
              type="button"
              className="col-3 regisfl2 mt-5"
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
