import React, { useState, useEffect } from 'react'
import ImageUploader from 'react-images-upload'
import { useLocation } from 'react-router-dom'
import firebase from 'firebase'
import { Row, Col } from 'reactstrap'
import logo from '../images/logo.png'
import bank from '../images/payment/bank.png'
import promptpaybank from '../images/payment/promptpaybank.png'
import axios from 'axios'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
export default function Payment() {
  var firebaseConfig = {
    apiKey: 'AIzaSyB7Sf2IziovxdmlTMUKpE8RVfkP_RuVxqU',
    authDomain: 'tbegin-f9c33.firebaseapp.com',
    projectId: 'tbegin-f9c33',
    storageBucket: 'tbegin-f9c33.appspot.com',
    messagingSenderId: '187729112224',
    appId: '1:187729112224:web:3c3d84074c3624183aadc5',
  }
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app() // if already initialized, use that one
  }
  const uploadImageToFirebase = (file, state) => {
    return new Promise((resolve, reject) => {
      const storageRef = firebase
        .storage()
        .ref(`${user.email}/user/payment/${file[0].name}`)
      var metadata = { contentType: 'image/jpeg' }
      const task = storageRef.put(file[0], metadata)
      let url
      task.on(
        `state_changed`,
        (snapshort) => {
          let percentage =
            (snapshort.bytesTransferred / snapshort.totalBytes) * 100
          console.log(percentage)
        },
        (error) => {
          console.log(error)
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            resolve(downloadUrl)
          })
        }
      )
    })
  }
  const [pictures, setPictures] = useState(null)
  const onDrop = async (picture) => {
    setPictures(picture)
  }
  let query = useQuery()
  const [user, setUser] = useState()

  const from_id = query.get('from_id')
  const to_id = query.get('to_id')
  const work_id = query.get('work_id')
  const trans_id = query.get('trans_id')
  let paymentState = {
    work_id: work_id,
    from_id: from_id,
    to_id: to_id,
    img: null,
    trans_id: trans_id,
  }
  const [payment, setPayment] = useState(paymentState)

  useEffect(() => {
    getProfile(payment)
    console.log()
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
    }
    setUser(dataUser)
  }
  const handleButtonSubmit = async (e) => {
    const URL = await uploadImageToFirebase(pictures)
    const temp = {
      from_id: payment.from_id,
      img: URL,
      to_id: payment.to_id,
      trans_id: payment.trans_id,
      work_id: payment.work_id,
      firstname: user.firstname,
    }
    const fetch = await axios.post(
      'http://localhost:4000/work_transaction/payment',
      temp
    )
    const data = await fetch.data
  }

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
            <button
              type="button"
              onClick={handleButtonSubmit}
              className="textuplodepayment"
            >
              อัพโหลดใบเสร็จ
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
