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

export default function Profile() {
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
                    <h3 className="editwork-bold">asdsadsd</h3>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <div className="d-flex justify-content-around mt-3">
                <button type="button" className="btn">
                  ส่งข่้อความ
                </button>
              </div>
              <div className="mt-3">
                <h5>สมัครสมาชิกเมื่อ</h5>
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
                    <h5>sdsad</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={letter} alt="user" height="20px" />
                  </div>
                  <div className="ml-2">
                    <h5>sdasd</h5>
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
                  <Col lg="6" md="6" sm="12" xs="12" className="mt-3">
                    <Card className="cardprofilework">
                      <h1 className="ml-3 mt-3">sad</h1>

                      <CardBody>
                        <CardImg className="imgwork"></CardImg>
                        <CardSubtitle className="carddescription mt-3">
                          sdasds
                        </CardSubtitle>
                        <div className="d-flex mt-5">
                          <h3>Freelance:</h3>
                        </div>
                        <div className="d-flex">
                          <h3>ราคา ฿</h3>
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
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
