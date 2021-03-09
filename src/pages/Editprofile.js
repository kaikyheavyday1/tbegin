import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import ImageUploader from 'react-images-upload'
import userpic from '../images/user.svg'
import StarRatings from 'react-star-ratings'
import swal from 'sweetalert'
import firebase from 'firebase'
let initState = {
  username: '',
  name: '',
  surname: '',
  phone: '',
  email: '',
  birthday: '',
  address: '',
  province: null,
  amphure: null,
  district: null,
  profile_pic: null,
}

let initPassword = {
  password: '',
  newpassword: '',
  repeatpassword: '',
}

export default function Editprofile() {
  const [user, setUser] = useState(initState)
  const [password, setPassword] = useState(initPassword)
  const [error, setError] = useState()
  const [provinces, setProvinces] = useState([])
  const [amphures, setAmphures] = useState([])
  const [pictures, setPictures] = useState(null)

  const onDrop = async (pictures) => {
    // console.log(pictures)
    const URL = await uploadImageToFirebase(pictures, 'profile')
    console.log(URL)
    setUser({ ...user, profile_pic: URL })
    // setPictures(pictures)
  }

  useEffect(() => {
    // จะทำ f(x) อย่างแรก
    inProfile()
    fetchProvinces()
  }, [])

  const Validate = () => {
    if (password.password === '' || password.password === null) {
      alert('โปรดป้อนรหัสผ่านปัจจุบัน')
      setError('โปรดป้อนรหัสผ่านปัจจุบัน')
      return false
    } else if (password.newpassword === '' || password.newpassword === null) {
      alert('โปรดป้อนรหัสผ่านใหม่')
      setError('โปรดป้อนรหัสผ่านใหม่')
      return false
    } else if (
      password.repeatpassword === '' ||
      password.repeatpassword === null
    ) {
      alert('โปรดยืนยันรหัสผ่าน')
      setError('โปรดยืนยันรหัสผ่าน')
      return false
    } else if (password.newpassword !== password.repeatpassword) {
      swal({
        title: 'Sorry!',
        text: 'รหัสผ่านไม่ตรงกัน',
        icon: 'warning',
        button: 'OK',
      })
      setError('รหัสผ่านไม่ตรงกัน')
      return false
    }
    return true
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
    setUser(data)
  }
  var firebaseConfig = {
    apiKey: 'AIzaSyB7Sf2IziovxdmlTMUKpE8RVfkP_RuVxqU',
    authDomain: 'tbegin-f9c33.firebaseapp.com',
    projectId: 'tbegin-f9c33',
    storageBucket: 'tbegin-f9c33.appspot.com',
    messagingSenderId: '187729112224',
    appId: '1:187729112224:web:3c3d84074c3624183aadc5',
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app() // if already initialized, use that one
  }
  const uploadImageToFirebase = (file, state = 'freelance') => {
    return new Promise((resolve, reject) => {
      const storageRef = firebase
        .storage()
        .ref(`${user.email}/${state}/profile/${file[0].name}`)
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
  const fetchProvinces = async () => {
    const fetch = await axios.get(
      'http://localhost:4000/address?type=provinces'
    )
    const data = await fetch.data
    setProvinces(data)
  }

  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setUser({ ...user, [id]: value })
  }

  const handleInputChangePassword = (e) => {
    const id = e.target.id
    const value = e.target.value
    setPassword({ ...password, [id]: value })
    console.log(password)
  }

  const handleProvinceChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setUser({ ...user, [id]: value })
    let codeProvince = value.split('&')[0]
    const fetchAmphure = await axios.get(
      `http://localhost:4000/address?type=amphures&code=${codeProvince}`
    )
    const data = await fetchAmphure.data
    setAmphures(data)
  }

  const handleAmpuresChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setUser({ ...user, [id]: value })
    console.log(user)
  }

  const handleButtonEditprofileSubmit = async (e) => {
    const fetch = await axios.post(
      `http://localhost:4000/auth/editprofile`,
      user,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    const data = await fetch.data
    swal('Good job!', 'บันทึกข้อมูลเรียบร้อย', 'success')
    console.log(data)
  }

  const handleButtonChangePasswordSubmit = async (e) => {
    const validate = Validate()
    const fetch = await axios.post(
      `http://localhost:4000/auth/changepassword`,
      password,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    const data = await fetch.data
    console.log(data)
    if (data.status === true) {
      swal('Good job!', 'เปลี่ยนรหัสผ่านเรียบร้อย', 'success')
    } else {
      swal({
        title: 'Sorry!',
        text: data.msg,
        icon: 'warning',
        button: 'OK',
      })
    }

    console.log(data)
  }

  return (
    <div className="editprofile mt-5">
      <div className="container">
        <h1 className="text-center editwork-bold">จัดการโปรไฟล์</h1>
        <Row className="pt-5">
          <Col lg="4" md="4" sm="12" xs="12" className="text-center formleft">
            <h3>Profile</h3>
            {user !== null && (
              <img
                className = "profileavatar"
                src={user.profile_pic}
                alt="user"
                height="80px"
                width="80px"
              />
            )}
            <h4 className="mt-3">{user.username}</h4>
            <h5>Member</h5>
            <hr color="#00296b"></hr>
            <div className="text-center ">
              <h2>เรทติ้ง</h2>
              <div className="">
                <div className="">
                  <StarRatings
                    rating={2.5}
                    starDimension="25px"
                    starSpacing="2px"
                    starRatedColor="#FFBF00"
                  />
                </div>
              </div>
            </div>
            <div className="upload-profile-pic mt-5">
              <h4>อัพโหลดรูปโปรไฟล์ของคุณ</h4>
              <ImageUploader
                singleImage={true}
                onChange={onDrop}
                withPreview={true}
              />
            </div>
          </Col>
          <Col lg="8" md="8" sm="12" xs="12" className="formright mb-5">
            <div className="col-10 mx-auto">
              <h3 className="editwork-bold">แก้ไขโปรไฟล์</h3>
              <hr color="#00296b"></hr>
              <div class="form-row">
                <div className="form-group col-md-6">
                  <label class="form-label">ชื่อจริง</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder={user.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label class="form-label">นามสกุล</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="form-control"
                    placeholder={user.surname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label class="form-label">อีเมล</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div class="form-row">
                <div className="form-group col-md-6">
                  <label class="form-label">เบอร์โทร</label>
                  <input
                    type="tel"
                    id="phone"
                    name="tel"
                    className="form-control"
                    placeholder={user.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label class="form-label">วันเดือนปีเกิด</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="form-control"
                    placeholder={user.birthday}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="form-row">
                <div className="form-group col-md-4">
                  <label for="inputaddress" class="form-label">
                    จังหวัด
                  </label>
                  <select
                    class="form-control"
                    onChange={handleProvinceChange}
                    id="province"
                  >
                    <option value="">กรุณาใส่จังหวัด</option>
                    {provinces.length > 0
                      ? provinces.map((province, index) => {
                          return (
                            <option
                              key={index}
                              value={`${province.id}&${province.name_th}`}
                            >
                              {province.name_th}
                            </option>
                          )
                        })
                      : null}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputaddress" class="form-label">
                    เขต/อำเภอ
                  </label>
                  <select
                    class="form-control"
                    onChange={handleAmpuresChange}
                    id="amphure"
                  >
                    <option value="">กรุณาใส่เขตหรืออำเภอ</option>
                    {amphures.length > 0
                      ? amphures.map((amphure, index) => {
                          return (
                            <option
                              key={index}
                              value={`${amphure.id}&${amphure.name_th}`}
                            >
                              {amphure.name_th}
                            </option>
                          )
                        })
                      : null}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputaddress" class="form-label">
                    แขวง/ตำบล
                  </label>
                  <select
                    id="district"
                    class="form-control"
                    onChange={handleInputChange}
                  >
                    <option value="">เขต</option>
                    <option value="1">test</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputaddress" class="form-label">
                  ที่อยู่
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="form-control"
                  placeholder={user.address}
                  rows="2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="btn-editprofile mt-3 text-right">
                <button
                  type="button"
                  className="btn"
                  onClick={handleButtonEditprofileSubmit}
                >
                  แก้ไขโปรไฟล์
                </button>
              </div>
              <h3 className="mt-4 editwork-bold">แก้ไขรหัสผ่าน</h3>
              <hr color="#00296b"></hr>
              <div className="col-8">
                <div className="form-group">
                  <label class="form-label">รหัสผ่านปัจจุบัน</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="รหัสผ่านปัจจุบัน"
                    onChange={handleInputChangePassword}
                  />
                </div>
                <div className="form-group">
                  <label class="form-label">รหัสผ่านใหม่</label>
                  <input
                    type="password"
                    id="newpassword"
                    name="newpassword"
                    className="form-control"
                    placeholder="รหัสผ่านใหม่"
                    onChange={handleInputChangePassword}
                  />
                </div>
                <div className="form-group">
                  <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
                  <input
                    type="password"
                    id="repeatpassword"
                    name="repeatpassword"
                    className="form-control"
                    placeholder="ยืนยันรหัสผ่านใหม่"
                    onChange={handleInputChangePassword}
                  />
                </div>
              </div>
              <h5 className="errorchangepass">{error}</h5>
              <div className="btn-editprofile mt-3 text-right">
                <button
                  type="button"
                  className="btn"
                  onClick={handleButtonChangePasswordSubmit}
                >
                  เปลี่ยนรหัสผ่าน
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
