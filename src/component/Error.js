import React from 'react'
import { Row, Col } from 'reactstrap'

export default function Error() {
  return (
    <div className="container">
      <Row>
        <Col>
          <div className="error text-center">
            <h1>404 Error page</h1>
            <p>Sorry, This page doens't exist</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
