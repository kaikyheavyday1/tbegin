import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import user from '../images/user.svg'
export default class Registerfreelance extends Component {
    render() {
        return (
            <div className="registerfreelance mt-4 mb-4">
                <div className="container">
                    <div className="text-center mb-3">
                        <h2 >สมัครเป็น Freelance</h2>
                    </div>
                    <div className="ml-5 d-flex justify-content-start">
                        <img src={user} className="mt-2 mb-3" alt="" width="15%" />
                        <div className="mt-5 ml-5">
                            <h3>Username</h3>
                            <input type="text" className="form-control" placeholder="ชื่อผู้ใช้ของคุณ" />
                        </div>
                    </div>
                    <div className="col-8 mt-5 ml-5">
                        <div className="">
                            <h3>ชื่อ</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอกชื่อ" />
                        </div>
                        <div className="mt-3">
                            <h3>นามสกุล</h3>
                            <input type="text" className="form-control" placeholder="กรุณากรอกนามสกุล" />
                        </div>
                        <div className="mt-3">
                            <h3>อีเมล</h3>
                            <input type="email" className="form-control" placeholder="กรุณากรอกอีเมล" />
                        </div>
                        <div className="mt-3">
                            <h3>วันเดือนปีเกิด</h3>
                            <input type="date" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group mt-3">
                            <label for="inputaddress" class="form-label"><h3>ที่อยู่</h3></label>
                            <textarea name="address" className="form-control" placeholder="ที่อยู่" />
                        </div>
                        <div className="mt-3">
                            <h3>จังหวัด</h3>
                            <select class="form-control" id="province">
                                <option value="">กรุณาใส่จังหวัด</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <h3>สถานศึกษา</h3>
                            <select class="form-control" id="province">
                                <option value="">กรุณาใส่สถานศึกษา</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
