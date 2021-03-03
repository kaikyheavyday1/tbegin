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
  useEffect(() => {
    inProfile()
  }, [])

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
                    <h3 className = "editwork-bold">
                      {user.name} {user.surname}
                    </h3>
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
              <div className="star d-flex">
                <h3 className = "mr-2">เรทติ้ง : </h3>
             <div className ="mt-1">
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
                
              </div>
              
            </div>
          </Col>
          <Col lg="8" md="12" sm="12" xs="12" className="mt-5">
            <div className="col-10 mx-auto">
              <h1 className="text-center">โปรไฟล์ของคุณ</h1>
              <h4 className="text-center mt-3">ผลงาน</h4>
              <div className="allwork">
                <Row className="testing">
                  <Col lg="6" md="6" sm="12" xs="12" className="mt-3">
                    <Card>
                      <CardImg top src={web2} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h3">ออกแบบเว็บไซต์ tbegin</CardTitle>
                        <CardSubtitle
                          tag="h5"
                          className="text-right mb-2 text-muted"
                        >
                          Freelance : kaikyheavyday
                        </CardSubtitle>
                        <CardText className="text-left ">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                        <div className="like-price text-right">
                          <div>
                            <CardText>
                              <h5>1000 ฿</h5>
                            </CardText>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12" className="mt-3">
                    <Card>
                      <CardImg top width="80%" src={web} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h3">ออกแบบเว็บไซต์ tbegin</CardTitle>
                        <CardSubtitle
                          tag="h5"
                          className="text-right mb-2 text-muted"
                        >
                          ฺFreelance : kaikyheavyday
                        </CardSubtitle>
                        <CardText className="text-left">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                        <div className="like-price text-right">
                          <div>
                            <CardText>
                              <h5>1000 ฿</h5>
                            </CardText>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12" className="mt-3">
                    <Card>
                      <CardImg top width="80%" src={web} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h3">ออกแบบเว็บไซต์ tbegin</CardTitle>
                        <CardSubtitle
                          tag="h5"
                          className="text-right mb-2 text-muted"
                        >
                          ฺFreelance : kaikyheavyday
                        </CardSubtitle>
                        <CardText className="text-left">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                        <div className="like-price text-right">
                          <div>
                            <CardText>
                              <h5>1000 ฿</h5>
                            </CardText>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" sm="12" xs="12" className="mt-3">
                    <Card>
                      <CardImg
                        top
                        width="80%"
                        src={web2}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h3">ออกแบบเว็บไซต์ tbegin</CardTitle>
                        <CardSubtitle
                          tag="h5"
                          className="text-right mb-2 text-muted"
                        >
                          Freelance : kaikyheavyday
                        </CardSubtitle>
                        <CardText className="text-left">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                        <div className="like-price text-right">
                          <div>
                            <CardText>
                              <h5>1000 ฿</h5>
                            </CardText>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
