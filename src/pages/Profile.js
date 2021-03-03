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

let initState = {
  name: '',
  surname: '',
  tel: '',
  email: '',
}

export default function Profile() {
  const [user, setUser] = useState(initState)
  const [userWork, setUserWork] = useState([])
  useEffect(() => {
    inProfile()
    getWorks()
  }, [])
  const getWorks = async () => {
    const fetch = await axios.get('http://localhost:4000/work/getuserid', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    const data = await fetch.data
    console.log(data)
    setUserWork(data)
  }

  const inProfile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    data = data[0]
    const insertUser = {
      name: data.name,
      surname: data.surname,
      tel: data.phone,
      email: data.email,
    }
    setUser(insertUser)
  }

  return (
    <div className="profile mb-5">
      <div className="container">
        <Row className="mt-5">
          <Col lg="4" md="12" sm="12" xs="12" className="profile-info">
            <div>
              <Row className="mt-5">
                <Col lg="4">
                  <img src={userpic} alt="user" height="70px" width="100%" />
                </Col>
                <Col lg="8">
                  <div className="pt-3">
                    <h4>
                      {user.name} {user.surname}
                    </h4>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <div className="d-flex justify-content-around mt-3">
                <Link to="/editprofile">
                  <button type="button" className="btn-profile">
                    ตั้งค่าโปรไฟล์
                  </button>
                </Link>
                <button type="button" className="btn-profile">
                  ส่งข่้อความ
                </button>
              </div>
              <div className="mt-3">
                <p>ป๋าใจดีสปอร์ต กทม</p>
              </div>
              <div className="mt-3">
                <h5>สมัครสมาชิกเมื่อ 18/02/2564</h5>
              </div>
              <div className="mt-3">
                <h5>เรทติ้ง 4.5/5</h5>
              </div>
              <div className="mt-3">
                <h3>Contact</h3>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={phone} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>{user.tel}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={letter} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>{user.email}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={graduate} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>โรงเรียนบางปะกอกวิทยาคม</h5>
                  </div>
                </div>
              </div>
              <div>
                <h3>ความถนัด</h3>
                <div className="d-flex justify-content-around mt-3">
                  <div className="profess">
                    <h5>สอนพิเศษ</h5>
                  </div>
                  <div className="profess">
                    <h5>การคลาด</h5>
                  </div>
                  <div className="profess">
                    <h5>ถ่ายภาพ</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8" md="12" sm="12" xs="12" className="mt-5">
            <div className="col-10 mx-auto">
              <h1 className="text-center">โปรไฟล์ของคุณ</h1>
              <h4 className="text-center mt-3">ผลงาน</h4>
              <div className="allwork">
                <Row className="testing">
                  {userWork.length > 0 &&
                    userWork.map((work, index) => {
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
