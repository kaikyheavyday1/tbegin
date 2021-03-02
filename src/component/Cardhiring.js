import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from 'reactstrap'
import Cardworking from '../component/Cardworking'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

export default function Cardhiring() {
  return (
    <Container>
      <Row className="cardhiring">
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
        <Col md={6} lg={4} xs={12}>
          <Cardworking />
        </Col>
      </Row>
    </Container>
  )
}
