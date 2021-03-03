import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import ImageUploader from 'react-images-upload'
import userpic from '../images/user.svg'

let initState = {
  username: '',
  name: '',
  surname: '',
  tel: '',
  email: '',
  birthday: '',
  address: '',
  province: null,
  amphure: null,
  district: null,
=======
import { Row, Col } from 'reactstrap';
import axios from "axios"
import ImageUploader from 'react-images-upload';
import userpic from "../images/user.svg"
import StarRatings from 'react-star-ratings'

let initState = {
    username: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
    birthday: "",
    address: "",
    province: null,
    amphure: null,
    district: null
>>>>>>> 80fa6ec5bd18baaaea067bc48a39ab054918eb69
}

export default function Editprofile() {
  const [user, setUser] = useState(initState)
  const [error, setError] = useState()
  const [provinces, setProvinces] = useState([])
  const [amphures, setAmphures] = useState([])
  const [pictures, setPictures] = useState([])

<<<<<<< HEAD
  const onDrop = (picture) => {
    setPictures([...pictures, picture])
  }
=======
    const [user, setUser] = useState(initState)
    const [error, setError] = useState()
    const [provinces, setProvinces] = useState([])
    const [amphures, setAmphures] = useState([])
    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
      setPictures([...pictures, picture]);
    };
 
    useEffect(() => { // จะทำ f(x) อย่างแรก
        inProfile();
        fetchProvinces();
    }, [])

    const inProfile = async (e) => {
        const fetch = await axios.get('http://localhost:4000/profile', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("access-token") //the token is a variable which holds the token
            }
        })
        let data = await fetch.data
        data = data[0]
        console.log(data)
      
        setUser(data)
    }
>>>>>>> 80fa6ec5bd18baaaea067bc48a39ab054918eb69

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
      username: data.username,
      name: data.name,
      surname: data.surname,
      tel: data.phone,
      email: data.email,
      birthday: data.birthday,
      address: data.address,
      province: data.province_id,
      amphures: data.amphure_id,
      district: data.district_id,
    }
    setUser(insertUser)
  }

<<<<<<< HEAD
  const fetchProvinces = async () => {
    const fetch = await axios.get(
      'http://localhost:4000/address?type=provinces'
    )
    const data = await fetch.data
    setProvinces(data)
  }
=======
    const handleInputChange = (e) =>{
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
    }
>>>>>>> 80fa6ec5bd18baaaea067bc48a39ab054918eb69

  useEffect(() => {
    fetchProvinces()
  }, [])

<<<<<<< HEAD
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
=======
    const handleAmpuresChange = async (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
        console.log(user)
    }
>>>>>>> 80fa6ec5bd18baaaea067bc48a39ab054918eb69

  const handleAmpuresChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setUser({ ...user, [id]: value })
  }

<<<<<<< HEAD
  return (
    <div className="editprofile mt-5">
      <div className="container">
        <h1 className="text-center">จัดการโปรไฟล์</h1>
        <Row className="pt-5">
          <Col lg="4" md="4" sm="12" xs="12" className="text-center formleft">
            <h3>Profile</h3>
            <img src={userpic} alt="user" height="70px" width="100%" />
            <h4 className="mt-3">{user.username}</h4>
            <h5>Member</h5>
            <div className="text-center mt-3">
              <h4>Rating 4.5/5</h4>
=======
    return (
        <div className="editprofile mt-5">
            <div className="container">
                <h1 className="text-center">จัดการโปรไฟล์</h1>
                <Row className="pt-5">
                    <Col lg="4" md="4" sm="12" xs="12" className="text-center formleft">
                        <h3>Profile</h3>
                        <img src={userpic} alt="user" height="70px" width="100%" />
                        <h4 className="mt-3">{user.username}</h4>
                        <h5>Member</h5>
                        <hr color ="#00296b"></hr>
                        <div className="text-center ">
                            <h2>เรทติ้ง</h2>
                        <div className="">
             <div className ="">
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
                            <h3 className = "editwork-bold">แก้ไขโปรไฟล์</h3>
                            <hr color = "#00296b"></hr>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label class="form-label">ชื่อจริง</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder={user.name} onChange = {handleInputChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label">นามสกุล</label>
                                    <input type="text" id="surname" name="surname" className="form-control" placeholder={user.surname} onChange = {handleInputChange} />
                                </div>
                            </div>
                            {console.log(user)}
                            <div className="form-group">
                                <label class="form-label">อีเมล</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder={user.email} onChange = {handleInputChange}/>
                            </div>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label class="form-label">เบอร์โทร</label>
                                    <input type="tel" id="tel" name="tel" className="form-control" placeholder={user.phone} onChange = {handleInputChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label">วันเดือนปีเกิด</label>
                                    <input type="date" id="birthday" name="birthday" className="form-control" placeholder={user.birthday} onChange = {handleInputChange} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputaddress" class="form-label">จังหวัด</label>
                                    <select class="form-control" onChange={handleProvinceChange} id="province">
                                        <option value="">asd</option>
                                        {provinces.length > 1 ? provinces.map((province, index) => {
                                            return <option key={index} value={`${province.id}&${province.name_th}`}>{province.name_th}</option>
                                        }) : null}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputaddress" class="form-label">เขต/อำเภอ</label>
                                    <select class="form-control" onChange={handleAmpuresChange} id="amphure">
                                        <option value="">กรุณาใส่เขตหรืออำเภอ</option>
                                        {amphures.length > 1 ? amphures.map((amphure, index) => {
                                            return <option key={index} value={`${amphure.id}&${amphure.name_th}`}>{amphure.name_th}</option>
                                        }) : null}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputaddress" class="form-label">แขวง/ตำบล</label>
                                    <select id = "district" class="form-control" onChange = {handleInputChange}>
                                        <option value="1">เขต</option>
                                        <option value="2">test</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputaddress" class="form-label">ที่อยู่</label>
                                <textarea name="address" id="address" className="form-control" placeholder={user.address} rows="2" onChange = {handleInputChange} />
                            </div>
                            <div className="btn-editprofile mt-3 text-right">
                                <button type="button" className="btn">แก้ไขโปรไฟล์</button>
                            </div>
                            <h3 className="mt-4 editwork-bold">แก้ไขรหัสผ่าน</h3>
                            <hr color ="#00296b"></hr>
                            <div className="col-8">
                                <div className="form-group">
                                    <label class="form-label">รหัสผ่านปัจจุบัน</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="รหัสผ่านปัจจุบัน" />
                                </div>
                                <div className="form-group">
                                    <label class="form-label">รหัสผ่านใหม่</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="รหัสผ่านใหม่" />
                                </div>
                                <div className="form-group">
                                    <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
                                    <input type="password" id="confirmPassword" name="password" className="form-control" placeholder="ยืนยันรหัสผ่านใหม่" />
                                </div>
                                
                            </div>
                            <div className="btn-editprofile mt-3 text-right">
                                    <button type="button" className="btn">เปลี่ยนรหัสผ่าน</button>
                                </div>
                        </div>
                    </Col>
                </Row>
>>>>>>> 80fa6ec5bd18baaaea067bc48a39ab054918eb69
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
              <h3>แก้ไขโปรไฟล์</h3>
              <div class="form-row">
                <div className="form-group col-md-6">
                  <label class="form-label">ชื่อจริง</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  {console.log(user)}
                </div>
                <div className="form-group col-md-6">
                  <label class="form-label">นามสกุล</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="form-control"
                    placeholder={user.surname}
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
                />
              </div>
              <div class="form-row">
                <div className="form-group col-md-6">
                  <label class="form-label">เบอร์โทร</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="form-control"
                    placeholder={user.tel}
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
                    <option value="">asd</option>
                    {provinces.length > 1
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
                    {amphures.length > 1
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
                  <select class="form-control">
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
                />
              </div>
              <div className="btn-editprofile mt-3 text-right">
                <button type="button" onClick={() => console.log(user)}>
                  แก้ไขโปรไฟล์
                </button>
              </div>
              <h3 className="mt-5">แก้ไขรหัสผ่าน</h3>
              <div className="col-8">
                <div className="form-group">
                  <label class="form-label">รหัสผ่านปัจจุบัน</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="รหัสผ่าน"
                  />
                </div>
                <div className="form-group">
                  <label class="form-label">รหัสผ่านปัจจุบัน</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="รหัสผ่าน"
                  />
                </div>
                <div className="form-group">
                  <label class="form-label">รหัสผ่านปัจจุบัน</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="password"
                    className="form-control"
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                </div>
                <div className="btn-editprofile mt-3 text-left">
                  <button type="button" className="btn">
                    เปลี่ยนรหัสผ่าน
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
