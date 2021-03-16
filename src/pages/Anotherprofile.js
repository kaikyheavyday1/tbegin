import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import userpic from '../images/user.svg'
import graduate from '../images/profile/graduation-hat.svg'
import letter from '../images/profile/envelope.svg'
import phone from '../images/profile/phone-call.svg'
import web from '../images/profile/web.jpeg'
import web2 from '../images/profile/web2.png'
import like from '../images/profile/heart.svg'
import StarRatings from 'react-star-ratings'
import Loading from '../component/Loading'

export default function Anotherprofile(props) {
  const [user, setUser] = useState(null)
  const [userwork, setUserwork] = useState([])
  const userid = props.match.params.userid
  const getUser = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/profile/get?userid=${userid}`
    )
    let data = await fetch.data[0]
    setUser(data)
  }
  const getWorkbyuser = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?otheruserid=${userid}`
    )
    let data = await fetch.data
    setUserwork(data)
  }
  useEffect(() => {
    getUser()
    getWorkbyuser()
  }, [])
  return (
    <div className="profile mb-5">
      <div className="container">
        <Row className="mt-5">
          <Col lg="4" md="12" sm="12" xs="12" className="profile-info">
            <div className="d-flex justify-content-start mt-3">
              <div>
                <img
                  className="profileavatar"
                  src={user !== null && user.profile_pic}
                  alt="user"
                  height="80px"
                  width="80px"
                />
              </div>
              <div className="pt-4 ml-3">
                {user !== null && (
                  <h3 className="editwork-bold">
                    {user.name} {user.surname}
                  </h3>
                )}
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-around mt-3">
                <button type="button" className="btn">
                  ส่งข่้อความ
                </button>
              </div>
              <div className="mt-3">
                {user !== null && (
                  <h5>
                    สมัครสมาชิกเมื่อ {user.create_date.toString().split('T')[0]}
                  </h5>
                )}
              </div>
              <div className="star d-flex">
                <h3 className="mr-2">เรทติ้ง : </h3>
                <div className="mt-1">
                  <StarRatings
                    rating={2.5}
                    starDimension="25px"
                    starSpacing="2px"
                    starRatedColor="#FFBF00"
                  />
                </div>
              </div>
              <div className="mt-3">
                <h3>Contact</h3>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={phone} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>{user !== null && user.phone}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={letter} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>{user !== null && user.email}</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8" md="12" sm="12" xs="12" className="mt-5">
            <div className="col-10 mx-auto">
              <h1 className="text-center">ผลงาน</h1>
              <div className="allwork">
                <Row className="testing">
                  {userwork.length > 0 &&
                    userwork.map((work, index) => {
                      console.log(work)
                      return (
                        <Col
                          lg="6"
                          md="6"
                          sm="12"
                          xs="12"
                          className="mt-3"
                          key={index}
                        >
                          <Card className="cardprofilework">
                            <h1 className="ml-3 mt-3">{work.name}</h1>

                            <CardBody>
                              <CardImg
                                className="imgwork"
                                src={work.pic1}
                              ></CardImg>
                              <CardSubtitle className="carddescription mt-3">
                                {work.main_description}
                              </CardSubtitle>
                              <div className="d-flex mt-5">
                                <h3>Freelance: {work.username}</h3>
                              </div>
                              <div className="d-flex">
                                <h3>ราคา {work.price} ฿</h3>
                              </div>
                              <StarRatings
                                className="star"
                                rating={2.5}
                                starDimension="25px"
                                starSpacing="2px"
                                starRatedColor="#FFBF00"
                              />
                            </CardBody>
                          </Card>
                        </Col>
                      )
                    })}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
