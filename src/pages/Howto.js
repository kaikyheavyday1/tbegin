import React from 'react'
import { Row, Col } from 'reactstrap';
import worker1 from '../images/howto/worker.svg'
import worker2 from '../images/howto/worker1.svg'
import Money from '../images/howto/Money2.svg'
import Chat from '../images/howto/Chat2.svg'
import Magnifier from '../images/howto/Magnifier2.svg'
import Letter from '../images/howto/letter2.svg'
import Star from '../images/howto/Star.svg'
import Logo2 from '../images/logo.png'


export default function Howto() {
    return (
        <div className = "howto container pb-4 text-center mt-4 mb-4">
            <img src = {Logo2} className="mt-2" alt = "logo-first" width = "15%"/>
            <h3 className="text-center mt-1">วิธีการใช้งานเว็บไซต์ TBegin</h3>
            <Row className ="d-flex justify-content-around mt-3">
                <Col lg ="5" md="6" sm = "12" className = "howto1 text-center">
                    <div className ="howto2 d-flex justify-content-left">                        
                        <img src = {worker2} alt = "img1" height ="50px" className="mr-5"/>
                        <h2>สำหรับผู้ว่าจ้าง</h2>
                    </div>
                    <div className="d-flex justify-content-left mt-3">
                    <img src = {Magnifier} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.เลือกงานที่ต้องการ</h3>
                            <p>เลือกงานของฟรีเเลนซ์ที่มีอยู่อย่างหลากหลาย</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Chat} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>2.คุยรายละเอียดงานกับฟรีแลนซ์</h3>
                            <p>สอบถามรายละเอียดและลงรายละเอียดงาน</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Money} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>3.ชำระเงินผ่านระบบ</h3>
                            <p>ระบบจะเป็นตัวกลางถือเงินของคุณจนกว่าฟรีแลนซ์จะทำงานเสร็จ</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Letter} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>4.รอฟรีแลนซ์ส่งงาน</h3>
                            <p>ตรวจสอบและกดอนุมัติหากฟรีแลนซ์ได้ทำงานตามสัญญา</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Star} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>5.ให้คะแนนและรีวิว</h3>
                            <p>เพื่อพัฒนา Community ของ Tbegin</p>
                        </div>
                    </div>
                </Col>
                <Col lg ="5" md="6" sm = "12" className = "howto3 text-center">
                <div className ="howto4 d-flex justify-content-left">
                        <img src = {worker1} alt = "img1" height ="50px" className="mr-5"/>
                        <h2>สำหรับฟรีแลนซ์</h2>                       
                    </div>
                    <div className="d-flex justify-content-left mt-3">
                    <img src = {Magnifier} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>1.ขายงานที่ต้องการบน Tbegin</h3>
                            <p>เลือกขายงานฟรีแลนซ์จากหมวดหมู่ที่มีอยู่</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Chat} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>2.คุยรายละเอียดและราคากับผู้ว่าจ้าง</h3>
                            <p>คุยรายละเอียดงานและเสนอราคากับผู้ว่าจ้าง</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Money} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>3.รอผู้ว่าจ้างชำระเงินผ่านระบบ</h3>
                            <p>ระบบจะเป็นตัวกลางถือเงินของคุณจนกว่าคุณจะส่งงานให้ผู้ว่าจ้าง</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Letter} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>4.ส่งงานและรอผู้ว่าจ้างอนุมัติงาน</h3>
                            <p>รอผู้ว่าจ้างกดอนุมัติงานแล้วทางระบบจะโอนเงินให้</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left">
                    <img src = {Star} alt = "img1" height ="50px" className="mr-2"/>
                        <div className="text-left">
                            <h3>5.ให้คะแนนและรีวิว</h3>
                            <p>เพื่อพัฒนา Community ของ Tbegin</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
