import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import logo from "../images/logo in navbar.png"
import { Row, Col } from 'reactstrap';
import logomail from "../images/footer/Group 41.svg"
import logotel from "../images/footer/Group 44.svg"

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="container">
                    <Row className="">
                        <Col lg="3 mt-4">
                            <h2>
                                หมวดหมู่งาน
                            </h2>
                            <h3>
                                <Link to="/working-list?maintype=1"><p>ออกแบบกราฟฟิค</p></Link>
                                <Link to="/working-list?maintype=2"><p>ผลิตสื่อมัลติมีเดีย</p></Link>
                                <Link to="/working-list?maintype=3"><p>ถ่ายภาพ</p></Link>
                                <Link to="/working-list?maintype=4"><p>เขียนแปลภาษา</p></Link>
                                <Link to="/working-list?maintype=5"><p>เว็บไซต์และโปรแกรม</p></Link>
                                <Link to="/working-list?maintype=6"><p>สอนพิเศษ</p></Link>
                                <Link to="/working-list?maintype=7"><p>จัดการร้านค้าออนไลน์</p></Link>
                            </h3>
                        </Col>
                        <Col lg="3 mt-4">
                            <h2>สมาชิก</h2>
                            <h3>
                                <Link to="/Hiring"><p>จ้างงาน</p></Link>
                                <Link to="/uploadwork"><p>ลงผลงาน</p></Link>
                                <Link to="/registerfreelance"><p>ยืนยันตัวตนเป็น Freelance</p></Link>
                            </h3>
                        </Col>
                        <Col lg="3 mt-4">
                            <h2>ช่วยเหลือ</h2>
                            <h3>
                                <Link to="/Aboutus"><p>เกี่ยวกับเรา</p></Link>
                                <Link to="/"><p>ติดต่อเรา</p></Link>
                                <Link to="/Question"><p>คำถามที่พบบ่อย</p></Link>
                            </h3>
                        </Col>
                        <Col lg="3 mt-4">
                            <Link to="/"><img src={logo} alt="logo-first" width="70%" /></Link>
                            <h3 className="textfooter mt-3">
                                <div className="d-flex justify-content-start">
                                    <img src={logomail} alt="" width="10%" />
                                    <p className ="ml-3 mt-2">TBegin@gmail.com</p>
                                </div>
                                <div className= "d-flex justify-content-start">
                                <img src={logotel} alt="" width="10%" />
                                <p className ="ml-3 mt-2">099-999-9999</p>
                                </div>
                            </h3>
                            <div className="btn-Footer mt-3">
                                <Link to="/Register"><button type="button" className="btn-lg">เข้าร่วมกับเรา</button></Link>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
