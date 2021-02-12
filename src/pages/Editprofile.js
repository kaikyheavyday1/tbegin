import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import axios from "axios"

import userpic from "../images/user.svg"

let initState = {
    province: null,
    amphure: null
}


export default function Editprofile() {
    const [user, setUser] = useState(initState)
    const [error, setError] = useState()
    const [provinces, setProvinces] = useState([])
    const [amphures, setAmphures] = useState([])

    const fetchProvinces = async () => {
        const fetch = await axios.get("http://localhost:4000/address?type=provinces")
        const data = await fetch.data
        setProvinces(data)
    }

    useEffect(() => {
        fetchProvinces()
    }, [])

    const handleProvinceChange = async (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
        let codeProvince = value.split("&")[0]
        const fetchAmphure = await axios.get(`http://localhost:4000/address?type=amphures&code=${codeProvince}`)
        const data = await fetchAmphure.data
        setAmphures(data)
    }

    const handleAmpuresChange = async (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
    }


    return (
        <div className="editprofile mt-5">
            <div className="container">
                <h1 className="text-center">จัดการโปรไฟล์</h1>
                <Row className="pt-5">
                    <Col lg="4" md="4" sm="12" xs="12" className="text-center formleft">
                        <h3>Profile</h3>
                        <img src={userpic} alt="user" height="70px" width="100%" />
                        <h4 className="mt-3">Username</h4>
                        <h5>Member</h5>
                        <div className="d-flex justify-content-around mt-5">
                            <div>
                                <h4>100</h4>
                                <h5>Post</h5>
                            </div>
                            <div>
                                <h4>4.5/5</h4>
                                <h5>Rating</h5>
                            </div>
                            <div>
                                <h4>100</h4>
                                <h5>Liked</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8" md="8" sm="12" xs="12" className="formright mb-5">
                        <div className="col-10 mx-auto">
                            <h3>แก้ไขโปรไฟล์</h3>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label class="form-label">ชื่อจริง</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="ชื่อจริง" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label">นามสกุล</label>
                                    <input type="text" id="surname" name="surname" className="form-control" placeholder="นามสกุล" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label class="form-label">อีเมล</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="อีเมล" />
                            </div>
                            <div class="form-row">
                                <div className="form-group col-md-6">
                                    <label class="form-label">เบอร์โทร</label>
                                    <input type="tel" id="tel" name="tel" className="form-control" placeholder="0807854451" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label class="form-label">วันเดือนปีเกิด</label>
                                    <input type="date" id="birthday" name="birthday" className="form-control" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div className="form-group col-md-4">
                                    <label for="inputaddress" class="form-label">จังหวัด</label>
                                    <select class="form-control" onChange={handleProvinceChange} id="province">
                                        <option value="">กรุณาใส่จังหวัด</option>
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
                                    <select class="form-control">
                                        <option value="">เขต</option>
                                        <option value="1">test</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputaddress" class="form-label">ที่อยู่</label>
                                <textarea name="address" id="address" className="form-control" placeholder="ที่อยู่" rows="2" />
                            </div>
                            <div className="btn-editprofile mt-3 text-right">
                                <button type="button">แก้ไขโปรไฟล์</button>
                            </div>
                            <h3 className="mt-5">แก้ไขรหัสผ่าน</h3>
                            <div className="col-8">
                                <div className="form-group">
                                    <label class="form-label">รหัสผ่านปัจจุบัน</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="รหัสผ่าน" />
                                </div>
                                <div className="form-group">
                                    <label class="form-label">รหัสผ่านปัจจุบัน</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="รหัสผ่าน" />
                                </div>
                                <div className="form-group">
                                    <label class="form-label">รหัสผ่านปัจจุบัน</label>
                                    <input type="password" id="confirmPassword" name="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" />
                                </div>
                                <div className="btn-editprofile mt-3 text-left">
                                    <button type="button" className="btn">เปลี่ยนรหัสผ่าน</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
