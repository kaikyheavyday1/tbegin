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
import images9 from '../images/home/9.jpg'
import images10 from '../images/home/10.png'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import axios from 'axios'

export default function Cardworking() {
  return (
    <div className="cardhiring mt-3 mb-3 justify-content-center">
      <div className="d-flex mb-2">
        <Card className="card">
          <div className="d-flex profile">
            <img className="avatar mt-3 ml-3" src={images9} alt="avatar" />
            <div className="ml-3 mt-3">
              <strong>kaiky</strong>
              <p>web developer</p>
            </div>
          </div>
          <CardBody>
            <CardImg className="workpic" src={images10} alt="img10"></CardImg>
            <CardText className="text-left mt-3">
              สุดยอดนักออกแบบเว็บไซต์
            </CardText>
            <CardText className="text-left mt-5">เริ่มต้น ฿1,500</CardText>
            <div className="col-8 star">
              <StarRatings
                rating={2.5}
                starDimension="25px"
                starSpacing="2px"
                starRatedColor="#FFBF00"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
