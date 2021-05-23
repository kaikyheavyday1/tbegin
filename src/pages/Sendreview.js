import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'
import { useLocation } from 'react-router-dom'

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
    const fetch = await axios.post(
      'http://localhost:4000/work_transaction/changetosuccess',
      sendrating
    )
    const data = await fetch.data
  }
  return (
    <div className="container">
      <input
        className="form-control"
        type="text"
        placeholder="แสดงความคิดเห็นเกี่ยวกับงาน"
        onChange={handleInputChange}
        id="comment"
      ></input>
      <span>
        กรุณาให้เรทติ้ง :{' '}
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </span>
      <button
        type="button"
        className="col-3 regisfl2 mt-3"
        onClick={handleButtonSubmit}
      >
        ส่งงานของคุณ
      </button>
    </div>
  )
}
