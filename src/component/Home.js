import React, { useState } from 'react'
import logo from '../images/logo.png'
import images1 from '../images/home/1.svg'
import images2 from '../images/home/2.svg'
import images3 from '../images/home/3.svg'
import images4 from '../images/home/4.svg'
import images5 from '../images/home/5.png'
import images6 from '../images/home/6.svg'

import { Row, Col } from 'reactstrap';



export default function Home() {

    return (
        <div className="home container mt-3">
            <div className="text-center">
                <img src={logo} alt="logo-first" width="15%" />
                <h4 className="mt-2">เว็บไซต์จ้างงานฟรีแลนซ์สำหรับนักเรียนและนักศึกษา</h4>
                <Row className="text-center mt-5">
                    <Col lg="3" md="6" xs="6">
                        <img src={images1} alt="img1" />
                        <h2>เหมาะกับ</h2>
                        <p>เหมาะสำหรับนักเรียนและนักศึกษาที่ สนใจอยากลองทำงานจริงเพื่อเก็บ ประสบการณ์ไปใช้งานจริง</p>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src={images4} alt="img4" />
                        <h2>ค้นหา</h2>
                        <p>ค้นหาฟรีแลนซ์ด้วยตัวท่านเอง คุณสามารถค้นหาฟรีแลนซ์ได้จากหมวดหมู่ ที่คุณต้องการและมีหลายหมวดหมู่ให้เลือก</p>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src={images3} alt="img3" />
                        <h2>พูดคุย</h2>
                        <p>พูดคุยรายละเอียดกับฟรีแลนซ์โดยตรง คุณสามารถสื่อสารความต้องการของงาน จากในเว็บไซต์นี้ได้เลย</p>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src={images2} alt="img2" />
                        <h2>ชำระเงิน</h2>
                        <p>สามารถชำระเงินผ่าน Tbegin โดยทางเว็บไซต์จะคำนึงจาก ความปลอดภัยสูงสุง ไม่มีการหนีแน่นอน</p>
                    </Col>
                </Row>
                <Row className="section2 mt-5 mb-5">
                    <Col className="text-left" ig="6" md="6" sm="12" xs="12">
                        <div className="logo-second">
                            <img src={logo} alt="logo-second" />
                        </div>
                        <h2>เลือกหางานราคาสบายกระเป๋า</h2>
                        <p>ง่ายๆไม่กี่ขั้นตอน...</p>
                        <img src={images5} alt="imag5" />
                    </Col>
                    <Col className="section2-right text-left mt-5" ig="6" md="6" sm="12" xs="12">
                        <div className="mt-3">
                            <h2>ยินดีต้อนรับเข้าสู่เว็บไซต์ "Tbegin"</h2>
                            <h3>เว็บไซต์สำหรับ น้องๆ นักเรียน นักศึกษา ที่ต้องการจะหารายได้เสริมหรือต้องการจะทำ Portfolio ไปใช้เรียนต่อหรือสมัครงานและผู้จ้างงานยังได้งานที่มีคุณภาพและราคาสบายกระเป๋าอีกด้วย</h3>
                        </div>
                        <div className="correct mt-5 ">
                            <div className="d-flex">
                                <img src={images6} alt="imag6" />
                                <h3 className ="mt-1 ml-3">หารายได้เสริมระหว่างการศึกษา</h3>
                            </div>
                            <div className="d-flex mt-3">
                                <img src={images6} alt="imag6" />
                                <h3 className ="mt-1 ml-3">ราคาที่ผู้ว่าจ้างจับต้องได้</h3>
                            </div>
                            <div className="d-flex mt-3">
                                <img src={images6} alt="imag6" />
                                <h3 className ="mt-1 ml-3">สามารถนำไปเป็น Portfolio ไว้ใช้ในการศึกษาต่อหรือสมัครงานได้</h3>
                            </div>
                            <div className="d-flex mt-3">
                                <img src={images6} alt="imag6" />
                                <h3 className ="mt-1 ml-3">รับประกันความปลอดภัย</h3>
                            </div>
                            <div className="d-flex mt-3 mb-5">
                                <img src={images6} alt="imag6" />
                                <h3 className ="mt-1 ml-3">งานไม่ถึงมือยินดีคืนเงิน</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="section3 mt-5">
                    <Col className="mt-5" ig="12" md="12" sm="12" xs="12">
                    <h3>ผลงานแนะนำจากฟรีแลนซ์ Tbegin</h3>
                    <div className="mt-3">
                        
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
