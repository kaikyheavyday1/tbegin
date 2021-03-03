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

export default function Cardworking(props) {
  console.log(props)
  return (
    <div className="cardhiring mt-3 mb-3 justify-content-center">
      <div className="d-flex mb-2">
        <Card className="card">
          <div className="d-flex profile">
            <img className="avatar mt-3 ml-3" src={images9} alt="avatar" />
            <div className="ml-3 mt-3">
              <strong>{props.data.username}</strong>
              <p>{props.data.subwork_name}</p>
            </div>
          </div>
          <CardBody>
            <CardImg className="workpic" src={props.data.pic1}></CardImg>
            <CardText className="text-left mt-3">
              <h2>{props.data.name}</h2>
              {props.data.description}
            </CardText>
            <CardText className="text-left mt-5">
              ราคา {props.data.price} ฿
            </CardText>
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
