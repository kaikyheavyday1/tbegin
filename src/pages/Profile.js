import React from 'react'
import { Row, Col } from 'reactstrap';
import user from "../images/user.svg"
import graduate from "../images/profile/graduation-hat.svg"
import letter from "../images/profile/envelope.svg"
import phone from "../images/profile/phone-call.svg"

export default function Profile() {
    return (
        <div className="profile">
            <div className="container">
                <Row className="mt-5">
                    <Col lg="4" md="12" sm="12" xs="12">
                        <div>
                            <Row>
                                <Col lg="4">
                                    <img src={user} alt="user" height="70px" width="100%" />
                                </Col>
                                <Col lg="8">
                                    <div className="pt-3">
                                        <h4>พงศ์พิพัฒน์ ธวัชชัยดำรงค์</h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around mt-3">
                                <button type="button">ตั้งค่าโปรไฟล์</button>
                                <button type="button">ส่งข่้อความ</button>
                            </div>
                            <div className="mt-3">
                                <p>ป๋าใจดีสปอร์ต กทม</p>
                            </div>
                            <div className="mt-3">
                                <h5>สมัครสมาชิกเมื่อ 18/02/2564</h5>
                            </div>
                            <div className="d-flex justify-content-around mt-3">
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>ผลงาน</h5>
                                </div>
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>เรทติ้ง</h5>
                                </div>
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>สำเร็จ</h5>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3>Contact</h3>
                                <div className="d-flex justify-content-start">                                    
                                    <div><img src={phone} alt="user" height="20px"/></div>                                    
                                    <div className="ml-2"><h5>0807854451</h5></div>
                                </div>
                                <div className="d-flex justify-content-start">                                    
                                    <div><img src={letter} alt="user" height="20px"/></div>                                    
                                    <div className="ml-2"><h5>rabite02013@hotmail.com</h5></div>
                                </div>
                                <div className="d-flex justify-content-start">                                    
                                    <div><img src={graduate} alt="user" height="20px"/></div>                                    
                                    <div className="ml-2"><h5>โรงเรียนบางปะกอกวิทยาคม</h5></div>
                                </div>
                            </div>
                            <div>
                                <h3>ความถนัด</h3>
                                <div className="d-flex justify-content-around mt-3">
                                <div className="">
                                    <h5>ผลงาน</h5>
                                </div>
                                <div className="">
                                    <h5>เรทติ้ง</h5>
                                </div>
                                <div className="">
                                    <h5>สำเร็จ</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8" md="12" sm="12" xs="12">
                        <h1 className="text-center">โปรไฟล์ของคุณ</h1>
                        <h4 className="text-center mt-3">ผลงาน</h4>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
