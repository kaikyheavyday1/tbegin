import React, { useState, useEffect } from 'react'
import ImageUploader from 'react-images-upload'
import firebase from 'firebase'
import { Row, Col } from 'reactstrap'
import logo from '../images/logo.png'
import bank from '../images/payment/bank.png'
import promptpaybank from '../images/payment/promptpaybank.png'
export default function Payment() {
  let initState = {
    profile_pic: null,
  }
  const [user, setUser] = useState(initState)
  const onDrop = async (pictures) => {}

  return (
    <div className="container pb-3">
      <div className="logopayment">
        <img src={logo} alt="logopayment" width="20%" />
      </div>
      <Row className="paymentpage pb-5">
        <h1 className="paymenttext text-center pt-3">ชำระค่าบริการ</h1>
        <Col lg="6 mt-3" md="12" sm="12" xs="12">
          <div className="">
            <img src={bank} alt="bank" width="100%" />
          </div>
        </Col>
        <Col lg="3 mt-3" md="12" sm="12" xs="12">
          <img src={promptpaybank} alt="promptpaybank" width="100%" />
        </Col>
        <Col lg="3 mt-3" md="12" sm="12" xs="12">
          <h3 className="paymenttext2">วิธีการชำระเงิน</h3>
          <h4 className="paymenttext">1. ตรวจสอบยอดที่ต้องชำระ</h4>
          <h4 className="paymenttext">2. โอนเงินตามช่องทางที่ท่านสะดวก</h4>
          <h4 className="textpayment">
            3. หากท่านชำระเงินเรียบร้อยแล้วอัพโหลดสลิปเพื่อยืนยันการชำระเงิน
          </h4>
          <div className="uplodepayment">
            <ImageUploader
              singleImage={true}
              onChange={onDrop}
              withPreview={true}
            />
            <div className="textuplodepayment">
              <h3>อัพโหลดใบเสร็จ</h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
