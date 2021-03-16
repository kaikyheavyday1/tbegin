import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import userpic from '../images/user.svg'
import dc1 from '../images/registerfreelance/dc_1.svg'
import dc2 from '../images/registerfreelance/dc_2.svg'
import cp from '../images/registerfreelance/computer-picture.svg'
import { Link } from 'react-router-dom'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import firebase from 'firebase'
import swal from 'sweetalert'
let initState = {
  username: '',
  name: '',
  surname: '',
  tel: '',
  email: '',
  birthday: '',
  address: '',
}
let freelanceState = {
  status: null,
  edu_id: null,
  card_id: null,
  card_nametitle: null,
  card_name: null,
  card_surname: null,
  card_gender: null,
  card_address: null,
  card_img1: null,
  card_img2: null,
  bank_name: null,
  bank_number: null,
  bank_pic: null,
}
export default function Registerfreelance() {
  const [user, setUser] = useState(initState)
  const [freelance, setFreelance] = useState(freelanceState)
  const [education, setEducation] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    //componentwillmount
    inProfile()
  }, [])
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
        .ref(`${user.email}/freelance/profile/${file[0].name}`)
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
  const inProfile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    data = data[0]
    console.log(data)
    const insertUser = {
      username: data.username,
      name: data.name,
      surname: data.surname,
      tel: data.phone,
      email: data.email,
      birthday: data.birthday,
      address: data.address,
    }
    setUser(insertUser)
  }
  const Validate = () => {
    if (freelance.status === '' || freelance.status === null) {
      setError('คุณยังไม่ได้กรอกบอกความเป็นตัวคุณ')
      return false
    } else if (freelance.edu_id === '' || freelance.edu_id === null) {
      setError('คุณยังไม่ได้เลือกสถานศึกษาชองคุณ')
      return false
    } else if (freelance.card_id === '' || freelance.card_id === null) {
      setError('คุณยังไม่ได้รหัสบัตรประชาชนชองคุณ')
      return false
    } else if (
      freelance.card_nametitle === '' ||
      freelance.card_nametitle === null
    ) {
      setError('คุณยังไม่ได้คำนำหน้าบัตรประชาชนชองคุณ')
      return false
    } else if (freelance.card_name === '' || freelance.card_name === null) {
      setError('คุณยังไม่ได้กรอกชื่อบัตรประชาชนชองคุณ')
      return false
    } else if (
      freelance.card_surname === '' ||
      freelance.card_surname === null
    ) {
      setError('คุณยังไม่ได้กรอกนามสกุลบัตรประชาชนชองคุณ')
      return false
    } else if (freelance.card_gender === '' || freelance.card_gender === null) {
      setError('คุณยังไม่ได้กรอกเพศในส่วนบัตรประชาชนชองคุณ')
      return false
    } else if (
      freelance.card_address === '' ||
      freelance.card_address === null
    ) {
      setError('คุณยังไม่ได้กรอกที่อยู่บัตรประชาชนชองคุณ')
      return false
    } else if (freelance.bank_type === '' || freelance.bank_type === null) {
      setError('คุณยังไม่ได้เลือกบัญชีธนาคารของคุณ')
      return false
    } else if (freelance.bank_id === '' || freelance.bank_id === null) {
      setError('คุณยังไม่ได้กรอกเลขบัญชีธนาคารของคุณ')
      return false
    }
    return true
  }
  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setFreelance({ ...freelance, [id]: value })
  }

  const handleEducationTypeChange = async (e) => {
    const value = e.target.value

    const fetch = await axios.get(
      'http://localhost:4000/education/type?type=' + value
    )
    const data = await fetch.data
    setEducation(data)
  }

  const handleEducationChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setFreelance({ ...freelance, [id]: value })
    console.log(value)
  }

  const [pictures, setPictures] = useState(null)
  const [pictures2, setPictures2] = useState(null)
  const [pictures3, setPictures3] = useState(null)
  const onDrop1 = (picture) => {
    setPictures(picture)
  }
  const onDrop2 = (picture) => {
    setPictures2(picture)
  }
  const onDrop3 = (picture) => {
    setPictures3(picture)
  }

  const handleButtonSubmit = async (e) => {
    const validate = Validate()
    if (!validate) return 0
    const URL1 = await uploadImageToFirebase(pictures, 1)
    const URL2 = await uploadImageToFirebase(pictures2, 2)
    const URL3 = await uploadImageToFirebase(pictures3, 3)
    console.log(URL1, URL2, URL3)
    setFreelance({
      ...freelance,
      card_img1: URL1,
      card_img2: URL2,
      bank_pic: URL3,
    })
    const fetch = await axios.post(
      'http://localhost:4000/freelance/regisfreelance',
      freelance,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    const data = await fetch.data
    console.log(data)
    if (data.status) {
      swal('Good job!', 'You clicked the button!', 'success')
    } else {
    }
  }

  return (
    <div className="registerfreelance mt-4 mb-4">
      <div className="container">
        <div className="in-registerfreelance pb-4">
          <div className="text-center mb-3">
            <h2>สมัครเป็น Freelance</h2>
          </div>
          <div className="mt-2 text-center">
            <h2>ข้อมูลเบื้องต้นสำหรับฟรีแลนซ์</h2>
          </div>
          <div className="col-10 mt-3 mx-auto">
            <div className="mt-3">
              <h3>บอกความเป็นตัวคุณสั้นๆ</h3>
              <textarea
                name="text"
                className="form-control"
                placeholder=""
                onChange={handleInputChange}
                id="status"
              />
            </div>
            <div className="mt-3">
              <h3>เลือกประเภทสถานศึกษาของคุณ</h3>
              <select
                class="form-control"
                id="edu_type"
                onChange={handleEducationTypeChange}
              >
                <option value="">เลือกประเภทสถานศึกษาของคุณ</option>
                <option value="1">โรงเรียน</option>
                <option value="2">มหาวิทยาลัย</option>
              </select>
            </div>
            <div className="mt-3">
              <h3>ชื่อสถานศึกษา</h3>
              <select
                class="form-control"
                onChange={handleEducationChange}
                id="edu_id"
              >
                <option value="">สถานศึกษา</option>
                {education.length > 0
                  ? education.map((education, index) => {
                      return (
                        <option key={index} value={`${education.id}`}>
                          {education.name}
                        </option>
                      )
                    })
                  : null}
              </select>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h2>บัตรประชาชน</h2>
            <h3>ใช้เป็นหลักฐานในการจ้างงาน</h3>
          </div>
          <div className="col-10 mt-3 mx-auto">
            <div className="">
              <h3>เลขบัตรประชาชน (13 หลัก)</h3>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกเลขบัตรประชาชน"
                onChange={handleInputChange}
                id="card_id"
              />
            </div>
            <div className="mt-3">
              <h3>คำนำหน้าชื่อ</h3>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกคำนำหน้าชื่อ"
                onChange={handleInputChange}
                id="card_nametitle"
              />
            </div>
            <div className="mt-3">
              <h3>ชื่อจริงตามบัตรประชาชน (ภาษาไทย)</h3>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกชื่อจริงตามบัตรประชาชน"
                onChange={handleInputChange}
                id="card_name"
              />
            </div>
            <div className="mt-3">
              <h3>นามสกุลจริงตามบัตรประชาชน (ภาษาไทย)</h3>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกนามสกุลจริงตามบัตรประชาชน"
                onChange={handleInputChange}
                id="card_surname"
              />
            </div>
            <div className="mt-3">
              <h3>เพศ (ตามบัตรประชาชน)</h3>
              <select
                class="form-control"
                id="card_gender"
                onChange={handleInputChange}
              >
                <option value="">เพศ</option>
                <option value="1">ชาย</option>
                <option value="2">หญิง</option>
              </select>
              <div className="mt-3">
                <h3>ที่อยู่ตามบัตรประชาชน (ภาษาไทย)</h3>
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="ที่อยู่"
                  onChange={handleInputChange}
                  id="card_address"
                />
              </div>
              <div className="mt-3">
                <h3>สำเนาบัตรประชาชน</h3>
              </div>
              <div className="mt-2 id-card text-center col-8 mx-auto">
                <div className="mt-3 text-left">
                  <h3>ภาพตัวอย่างที่ถูกต้อง</h3>
                  <p>
                    ต้องเป็นบัตรประชาชนของตัวเองเท่านั้นและเห็นลายละเอียดชัดเจน
                  </p>
                </div>
                <h3 className="mt-5">ดูตัวอย่างทั้งสองรูป</h3>
                <img src={dc1} className="col-6" alt="" width="10%" />
                <img src={dc2} className="col-6" alt="" width="10%" />
              </div>
              <div className="mt-5">
                <h3>อัพโหลดรูปภาพสำเนาบัตรประชาชน</h3>
                <Row>
                  <Col lg="6">
                    <p>กรุณาอัพโหลดรูปบัตรประชาชนของคุณ</p>
                    <ImageUploader
                      singleImage={true}
                      onChange={onDrop1}
                      withPreview={true}
                    />
                  </Col>
                  <Col lg="6">
                    <p>กรุณาอัพโหลดรูปบัตรประชาชนคู่กับรูปของคุณ</p>
                    <ImageUploader
                      singleImage={true}
                      onChange={onDrop2}
                      withPreview={true}
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h2>บัญชีและการเงิน</h2>
              <h3>ใช้เป็นหลักฐานในการรับเงิน</h3>
            </div>
            <div className="mt-3 mx-auto">
              <h3>บัญชีธนาคาร</h3>
              <select
                class="form-control"
                id="bank_name"
                onChange={handleInputChange}
              >
                <option value="">บัญชีธนาคาร</option>
                <option value="1">กสิกร</option>
                <option value="2">ทหารไทย</option>
              </select>
              <div className="mt-3">
                <h3>เลขบัญชี</h3>
                <input
                  type="text"
                  className="form-control"
                  placeholder="กรุณากรอกเลขบัญชี"
                  onChange={handleInputChange}
                  id="bank_number"
                />
              </div>
              <div className="mt-3">
                <h3>รูปสมุดบัญชี</h3>
                <div className="">
                  <p>กรุณาอัพโหลดรูปสมุดบัญชีของคุณ</p>
                  <ImageUploader
                    singleImage={true}
                    onChange={onDrop3}
                    withPreview={true}
                  />
                </div>
              </div>
              <span style={{ color: "red" }}>{error ? error : ""}</span>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleButtonSubmit}
                  className="col-3 regisfl2 mt-3 "
                >
                  บันทึก
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
