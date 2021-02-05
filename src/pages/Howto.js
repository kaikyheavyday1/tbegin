import React from 'react'
import { Row, Col } from 'reactstrap';
import worker1 from '../images/howto/worker.svg'
import worker2 from '../images/howto/worker1.svg'


export default function Howto() {
    return (
        <div className = "howto container">
            <h1 className="text-center mt-5">Tbegin ใช้งานยังไง</h1>
            <Row className ="d-flex justify-content-center mt-5">
                <Col lg ="5" md="6" sm = "12" className = "hiring text-center">
                    <div className ="d-flex justify-content-left">                        
                        <img src = {worker1} alt = "img1" height ="50px" className="mr-5"/>
                        <h2>สำหรับผู้ว่าจ้าง</h2>
                    </div>
                    <div className="d-flex justify-content-left mt-3">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                </Col>
                <Col lg ="5" md="6" sm = "12" className = "text-center">
                <div className ="d-flex justify-content-left">
                        <img src = {worker2} alt = "img1" height ="50px" className="mr-5"/>
                        <h2>สำหรับฟรีแลนซ์</h2>                       
                    </div>
                    <div className="d-flex justify-content-left mt-3">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {worker1} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
