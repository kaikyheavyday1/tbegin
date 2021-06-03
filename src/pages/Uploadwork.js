import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import firebase from 'firebase'

let workstate = {
  work_type: null,
  name: null,
  description: null,
  pic1: null,
  pic2: null,
  pic3: null,
  pic4: null,
  pic5: null,
  pic6: null,
  main_description: null,
  price: null,
  work_time: null,
  mainwork_type: null,
}

export default function Uploadwork() {
  const [work, setWork] = useState(workstate)
  const [mainwork, setMainwork] = useState([])
  const [subwork, setSubwork] = useState([])
  const [pictures, setPictures] = useState([])
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

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
  useEffect(async () => {
    const data = await getMainwork()
    setMainwork(data)
    getUserProfile()
  }, [])

  const getUserProfile = async () => {
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
    if (work.work_type === '' || work.work_type === null) {
      setError('คุณยังไม่ได้เลือกประเภทงาน')
      return false
    } else if (work.name === '' || work.name === null) {
      setError('คุณยังไม่ได้ตั้งชื่อผลงาน')
      return false
    } else if (work.description === '' || work.description === null) {
      setError('คุณยังไม่ได้กรอกรายละเอียดผลงาน')
      return false
    } else if (work.main_description === '' || work.main_description === null) {
      setError('คุณยังไม่ได้กรอกสิ่งที่ลูกค้าจะได้รับ')
      return false
    } else if (work.price === '' || work.price === null) {
      setError('คุณยังไม่ได้กำหนดราคางานของคุณ')
      return false
    } else if (work.work_time === '' || work.work_time === null) {
      setError('คุณยังไม่ได้กำหนดเวลาทำงานของคุณ')
      return false
    } else if (work.mainwork_type === '' || work.mainwork_type === null) {
      setError('คุณยังไม่ได้เลือกหมวดหมู่งานของคุณ')
      return false
    }
    return true
  }

  const getMainwork = async () => {
    const fetch = await axios.get(
      'http://localhost:4000/worktype/all-mainwork',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    let data = await fetch.data
    return data
  }
  const handleMainworktypeChange = async (e) => {
    const id = e.target.id
    const value = e.target.value
    setWork({ ...work, [id]: value })
    const fetchSubtype = await axios.get(
      `http://localhost:4000/worktype/getwork?type=${value}`
    )
    let data = await fetchSubtype.data
    setSubwork(data)
  }

  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setWork({ ...work, [id]: value })
  }

  const handleButtonSubmit = async (e) => {
    const validate = Validate()
    if (!validate) return 0
    const lastPicArray = pictures[pictures.length - 1]
    if (lastPicArray.length !== 6) {
      alert('รูปต้องมี 6 รูปครับ')
      return
    }
    let tempURL = []
    for (let index = 0; index < lastPicArray.length; index++) {
      const picture = lastPicArray[index]
      const url = await uploadPicture(picture)
      tempURL.push(url)
    }
    if (tempURL.length > 0) {
      for (let index = 0; index < tempURL.length; index++) {
        const url = tempURL[index]
        const keyPic = `pic${parseInt(index) + 1}`
        work[keyPic] = url
      }
    }
    console.log(work)
    const upload = await axios.post(
      'http://localhost:4000/work/addwork',
      work,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
        },
      }
    )
    const data = await upload.data
    console.log(data)
  }
  const onDrop = (picture) => {
    setPictures([...pictures, picture])
  }

  const uploadPicture = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = firebase
        .storage()
        .ref(`${user.email}/freelance/work/${file.name}`)
      var metadata = { contentType: 'image/jpeg' }
      const task = storageRef.put(file, metadata)
      task.on(
        `state_changed`,
        (snapshort) => {
          let percentage =
            (snapshort.bytesTransferred / snapshort.totalBytes) * 100
          //   console.log(percentage)
        },
        (error) => {
          reject(error)
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            resolve(downloadUrl)
          })
        }
      )
    })
  }
  return (
    <div className="uploadwork">
      <div className="container pb-5">
        <div className="in-uploadwork col-10 pb-3 mx-auto">
          <h1 className="text-center mt-5 editwork-bold">ลงผลงาน</h1>
          <div>
            <h2 className="editwork-bold">เลือกหมวดหมู่งาน</h2>
            <hr color="#00296b"></hr>
            <Row>
              <Col lg="6">
                <div className="form-group">
                  <label for="inputwork" class="form-label">
                    หมวดหมู่งานหลัก
                  </label>
                  <select
                    class="form-control"
                    onChange={handleMainworktypeChange}
                    id="mainwork_type"
                  >
                    <option value="">หมวดหมู่งานหลัก</option>
                    {mainwork.length > 0 &&
                      mainwork.map((value, index) => {
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        )
                      })}
                  </select>
                </div>
              </Col>
              <Col lg="6">
                <div className="form-group">
                  <label for="inputwork" class="form-label">
                    ประเภทงาน
                  </label>
                  <select
                    class="form-control"
                    id="work_type"
                    onChange={handleInputChange}
                  >
                    <option value="">ประเภทงาน</option>
                    {subwork.length > 0 &&
                      subwork.map((value, index) => {
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        )
                      })}
                  </select>
                </div>
              </Col>
            </Row>
            <h2 className="editwork-bold">รายละเอียดของงาน</h2>
            <hr color="#00296b"></hr>
            <div className="form-group">
              <label for="inputwork" class="form-label">
                ชื่องาน
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="เขียนประเภทของงานที่รับทำ ซึ่งเขียนให้กระชับ อ่านเข้าใจง่าย ช่วยให้ผู้ว่าจ้างตัดสินใจเบื้องต้นได้"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="inputdescription" class="form-label">
                อธิบายเพิ่มเติมเกี่ยวกับงาน
              </label>
              <textarea
                id="description"
                name="address"
                className="form-control"
                rows="2"
                placeholder="อธิบายเกี่ยวกับงานเพิ่มเติม ใส่รายละเอียดให้ได้มากที่สุด"
                onChange={handleInputChange}
              />
            </div>
            <h2 className="editwork-bold">รูปผลงานของคุณ</h2>
            <hr color="#00296b"></hr>
            <div className="form-group">
              <p>อัพโหลดรูปภาพของคุณ (จำกัดสูงสุดไม่เกิน 6 รูป)</p>
              <ImageUploader
                singleImage={false}
                onChange={onDrop}
                withPreview={true}
              />
            </div>
            <h2 className="mt-5 editwork-bold">กำหนดราคาและเวลาส่งงาน</h2>
            <hr color="#00296b"></hr>
            <div className="form-group">
              <label for="inputmain-des" class="form-label">
                สิ่งที่ลูกค้าจะได้รับจากงานของคุณ
              </label>
              <textarea
                id="main_description"
                name="main_description"
                className="form-control"
                rows="2"
                placeholder="ระยะเวลาการทำงานของคุณ คุณภาพระดับงานของคุณ ลูกค้าสามารถแก้งานของคุณได้กี่ครั้ง"
                onChange={handleInputChange}
              />
            </div>
            <Row>
              <Col lg="6">
                <div className="form-group">
                  <label for="inputwork" class="form-label">
                    ราคางานของคุณ
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="form-group">
                  <label for="inputwork" class="form-label">
                    ใช้เวลาทำ
                  </label>
                  <input
                    type="text"
                    id="work_time"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <span style={{ color: 'red' }}>{error ? error : ''}</span>
          <div className="btn-aboutus mt-3 text-center">
            <button
              type="button"
              onClick={handleButtonSubmit}
              className="btn-lg"
            >
              อัพโหลดผลงาน
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
