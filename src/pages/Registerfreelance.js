import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import userpic from '../images/user.svg'
import dc1 from '../images/registerfreelance/dc_1.svg'
import dc2 from '../images/registerfreelance/dc_2.svg'
import cp from '../images/registerfreelance/computer-picture.svg'
import { Link } from 'react-router-dom'
import ImageUploader from 'react-images-upload';
import axios from "axios"

let initState = {
    username: "",
    name: "",
    surname: "",
    tel: "",
    email: "",
    birthday: "",
    address: "",
    education: null
}

export default function Registerfreelance() {
    const [user, setUser] = useState(initState)
    const [education, setEducation] = useState([])
    useEffect(() => {
        inProfile();
        fetchEducation();
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

    const fetchEducation = async () => {
        const fetch = await axios.get("http://localhost:4000/education")
        const data = await fetch.data
        setEducation(data)
        console.log(data)
    }
    const handleEducationChange = async (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
    }


    const [pictures, setPictures] = useState([]);
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    return (
        <div className="registerfreelance mt-4 mb-4">
            <div className="container">
                <div className="in-registerfreelance pb-4">
                    <div className="text-center mb-3">
                        <h2>สมัครเป็น Freelance</h2>
                    </div>
                    <div className="profile col-8 mx-auto">
                        <h3 className="pt-2">ข้อมูลเบื้องต้นของคุณที่ได้ลงทะเบียนไว้</h3>
                        <div className="d-flex justify-content-around mt-2">
                            <img src={userpic} className="mt-2 mb-3" alt="" width="25%" />
                            <div className="mt-3">
                                <h4>Username : {user.username}</h4>
                                <h5>ชื่อและนามสกุลของคุณ : {user.name} {user.surname}</h5>
                                <h5>อีเมลของคุณ : {user.email}</h5>
                                <h5>วัน-เดือน-ปีเกิดของคุณ : {user.birthday}</h5>
                                <h5>ที่อยู่ : {user.address}</h5>
                            </div>
                        </div>
                        <div className="text-center mt-3 pb-3">
                            <Link to="/editprofile"><button type="button" className="regisfl2">แก้ไขข้อมูล</button></Link>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h2>ข้อมูลเบื้องต้นสำหรับฟรีแลนซ์</h2>
                    </div>
                    <div className="col-10 mt-3 mx-auto">
                        <div className="mt-3">
                            <h3>บอกความเป็นตัวคุณสั้นๆ</h3>
                            <textarea name="text" className="form-control" placeholder="" />
                        </div>
                        <div className="mt-3">
                            <h3>Page Facbook (ไม่จำเป็นต้องระบุ)</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอก Page Facebook" />
                        </div>
                        <div className="mt-3">
                        <h3>เลือกประเภทสถานศึกษาของคุณ</h3>
                            <select class="form-control" id="gender">
                                <option value="">เลือกประเภทสถานศึกษาของคุณ</option>
                                <option value="1">โรงเรียน</option>
                                <option value="2">มหาวิทยาลัย</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <h3>ชื่อสถานศึกษา</h3>
                            <select class="form-control" onChange={handleEducationChange} id="education">
                                <option value="">สถานศึกษา</option>
                                {education.length > 1 ? education.map((education, index) => {
                                    return <option key={index} value={`${education.id}&${education.name}`}>{education.name}</option>
                                }) : null}
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
                            <input type="text" className="form-control" placeholder="กรุณากรอกเลขบัตรประชาชน" />
                        </div>
                        <div className="mt-3">
                            <h3>คำนำหน้าชื่อ</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอกคำนำหน้าชื่อ" />
                        </div>
                        <div className="mt-3">
                            <h3>ชื่อจริงตามบัตรประชาชน (ภาษาไทย)</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอกชื่อจริงตามบัตรประชาชน" />
                        </div>
                        <div className="mt-3">
                            <h3>นามสกุลจริงตามบัตรประชาชน (ภาษาไทย)</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอกนามสกุลจริงตามบัตรประชาชน" />
                        </div>
                        <div className="mt-3">
                            <h3>เพศ (ตามบัตรประชาชน)</h3>
                            <select class="form-control" id="gender">
                                <option value="">เพศ</option>
                                <option value="1">ชาย</option>
                                <option value="2">หญิง</option>
                            </select>
                            <div className="mt-3">
                                <h3>ที่อยู่ตามบัตรประชาชน (ภาษาไทย)</h3>
                                <textarea name="address" className="form-control" placeholder="ที่อยู่" />
                            </div>
                            <div className="mt-3">
                                <h3>รหัสไปรษณีย์</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกรหัสไปรษณีย์" />
                            </div>
                            <div className="mt-3">
                                <h3>สำเนาบัตรประชาชน</h3>
                            </div>
                            <div className="mt-2 id-card text-center col-8 mx-auto">
                                <div className="mt-3 text-left">
                                    <h3>ภาพตัวอย่างที่ถูกต้อง</h3>
                                    <p>ต้องเป็นบัตรประชาชนของตัวเองเท่านั้นและเห็นลายละเอียดชัดเจน</p>
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
                                            onChange={onDrop}
                                            withPreview={true}
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <p>กรุณาอัพโหลดรูปบัตรประชาชนคู่กับรูปของคุณ</p>
                                        <ImageUploader
                                            singleImage={true}
                                            onChange={onDrop}
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
                            <select class="form-control" id="gender">
                                <option value="">บัญชีธนาคาร</option>
                                <option value="1">กสิกร</option>
                                <option value="2">ทหารไทย</option>
                            </select>
                            <div className="mt-3">
                                <h3>เลขบัญชี</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกเลขบัญชี" />
                            </div>
                            <div className="mt-3">
                                <h3>รูปสมุดบัญชี</h3>
                                <div className="">
                                    <p>กรุณาอัพโหลดรูปสมุดบัญชีของคุณ</p>
                                    <ImageUploader
                                        singleImage={true}
                                        onChange={onDrop}
                                        withPreview={true}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="button" className="col-3 regisfl2 mt-3 ">บันทึก</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
