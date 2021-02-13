import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import user from '../images/user.svg'
import dc1 from '../images/registerfreelance/dc_1.svg'
import dc2 from '../images/registerfreelance/dc_2.svg'
import cp from '../images/registerfreelance/computer-picture.svg'
export default class Registerfreelance extends Component {
    render() {
        return (
            <div className="registerfreelance mt-4 mb-4">
                <div className="container">
                    <div className="in-registerfreelance pb-4">
                        <div className="text-center mb-3">
                            <h2 >สมัครเป็น Freelance</h2>
                        </div>
                        <div className="col-6 mx-auto d-flex justify-content-start">
                            <img src={user} className="mt-2 mb-3" alt="" width="30%" />
                            <div className="mt-5 ml-5">
                                <h3>Username</h3>
                                <input type="text" className="form-control" placeholder="ชื่อผู้ใช้ของคุณ" />
                            </div>
                        </div>
                        <div className="col-10 row mt-5 mx-auto">
                            <div className="col-6">
                                <h3>ชื่อ</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกชื่อ" />
                            </div>
                            <div className="col-6">
                                <h3>นามสกุล</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกนามสกุล" />
                            </div>
                            <div className="col-6 mt-3">
                                <h3>อีเมล</h3>
                                <input type="email" className="form-control" placeholder="กรุณากรอกอีเมล" />
                            </div>
                            <div className="col-6 mt-3">
                                <h3>วันเดือนปีเกิด</h3>
                                <input type="date" className="form-control" placeholder="" />
                            </div>
                            <div className="col-12 form-group mt-3">
                                <h3>ที่อยู่</h3>
                                <textarea name="address" className="form-control" placeholder="ที่อยู่" />
                            </div>
                            <div className="col-12 text-center">
                                <button type="button" className="col-3 btn-regisfl mt-3 btn-lg">แก้ไขข้อมูล</button>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <h2>ข้อมูลเบื้องต้นสำหรับฟรีแลนซ์</h2>
                        </div>
                        <div className="col-10 mt-3 mx-auto">
                            <div className="">
                                <h3>ความถนัด (กรุณาเลือกอย่างน้อย 1 อย่าง)</h3>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value=""/>
                                    <label className="form-check-label" for="exampleRadios2">
                                        ออกแบบกราฟฟิก
                                     </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        ผลิตสื่อมัลติมีเดีย
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        ถ่ายภาพ
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        เขียนและแปลภาษา
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        เว็บไซต์และโปรแกรม
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        สอนพิเศษ
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" value="" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        จัดการร้านค้าออนไลน์
                                 </label>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3>บอกความเป็นตัวคุณสั้นๆ</h3>
                                <textarea name="text" className="form-control" placeholder="" />
                            </div>
                            <div className="mt-3">
                                <h3>Page Facbook (ไม่จำเป็นต้องระบุ)</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอก Page Facebook" />
                            </div>
                            <div className="mt-3">
                                <h3>ชื่อสถานศึกษา</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกชื่อสถานศึกษา" />
                            </div>
                            <div className="mt-3">
                                <h3>ที่อยู่สถานศึกษา</h3>
                                <textarea name="address" className="form-control" placeholder="ที่อยู่" />
                            </div>
                            <div className="mt-3">
                                <h3>รหัสนักเรียนหรือนักศึกษา</h3>
                                <input type="text" className="form-control" placeholder="กรุณากรอกรหัสนักเรียนหรือนักศึกษา" />
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
                                    <input className="uploderfl" type="file" id="" name=""></input>
                                    <img src={cp} className="col-2" alt="" width="50%" />
                                    <p className="rgfl">กรุณาอัพโหลดรูปภาพ</p>
                                </div>
                                <div className="mt-5">
                                    <input className="uploderfl" type="file" id="" name=""></input>
                                    <img src={cp} className="col-2" alt="" width="50%" />
                                    <p className="rgfl">กรุณาอัพโหลดรูปภาพ</p>
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
                                        <input className="uploderfl" type="file" id="" name=""></input>
                                        <img src={cp} className="col-2" alt="" width="50%" />
                                    </div>
                                    <p className="rgfl">กรุณาอัพโหลดรูปภาพ</p>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="col-3 regisfl2 mt-3 btn-lg">บันทึก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
