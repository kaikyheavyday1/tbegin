import React, {useState} from 'react'
import logo from '../images/logo.png'
import images1 from '../images/home/1.svg'
import images2 from '../images/home/2.svg'
import images3 from '../images/home/3.svg'
import images4 from '../images/home/4.svg'

import { Row, Col } from 'reactstrap';

export default function Home() {
    
    return (
        <div className = "home container mt-3">
            <div className = "text-center">
             <img src = {logo} alt = "logo-first" width = "15%"/>
             <h4 className="mt-2">เว็บไซต์จ้างงานฟรีแลนซ์สำหรับนักเรียนและนักศึกษา</h4>
             <Row className="text-center mt-5">
                <Col lg="3" md ="6" xs="6">
                    <img src = {images1} alt = "img1"/>
                    <h2>เหมาะกับ</h2>
                    <p>เหมาะสำหรับนักเรียนและนักศึกษาที่ สนใจอยากลองทำงานจริงเพื่อเก็บ ประสบการณ์ไปใช้งานจริง</p>                   
                </Col>
                <Col lg="3" md ="6" xs="6">
                    <img src = {images4} alt = "img4"/>
                    <h2>ค้นหา</h2>
                    <p>ค้นหาฟรีแลนซ์ด้วยตัวท่านเอง คุณสามารถค้นหาฟรีแลนซ์ได้จากหมวดหมู่ ที่คุณต้องการและมีหลายหมวดหมู่ให้เลือก</p>
                </Col>
                <Col lg="3" md ="6" xs="6">
                    <img src = {images3} alt = "img3"/>
                    <h2>พูดคุย</h2>
                    <p>พูดคุยรายละเอียดกับฟรีแลนซ์โดยตรง คุณสามารถสื่อสารความต้องการของงาน จากในเว็บไซต์นี้ได้เลย</p> 
                </Col>
                <Col lg="3" md ="6" xs="6">
                    <img src = {images2} alt = "img2"/>
                    <h2>ชำระเงิน</h2>
                    <p>สามารถชำระเงินผ่าน Tbegin โดยทางเว็บไซต์จะคำนึงจาก ความปลอดภัยสูงสุง ไม่มีการหนีแน่นอน</p> 
                </Col>
             </Row>
            </div>
        </div>
    )
}
