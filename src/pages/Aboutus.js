import React from 'react'
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import Logo2 from '../images/logo.png'


export default function Aboutus() {
    return (
        <div className = "aboutus text-center mt-4 mb-4">
           <div className="container">
           <img src = {Logo2} className="mt-2 mb-3" alt = "logo-first" width = "25%"/>
            <Row className = "bgaboutus justify-content-center">
            <Col lg = "8">
            <h2 className = "aboutus1 text-center mt-3">เกี่ยวกับเรา</h2>
            <h3 className = "text-left mt-3">เว็บไซต์ www.Tbegin.com เป็นเว็บไซต์สำหรับนักเรียนและนักศึกษาที่มองหาการทำรายได้ ซึ่งผู้ที่ต้องการจะจ้างงานสามารถจ้างงานผ่านฟรีแลนซ์ที่เป็นนักเรียนและนักศึกษา ในส่วนราคาของการว่าจ้างขึ้นอยู่กับการสนทนากันระหว่างผู้ว่าจ้างและฟรีแลนซ์ 
            ซึ่งราคาของชิ้นงานที่ลงเอาไว้จะมีราคาที่สมเหตุสมผลอย่างแน่นอน
            <p>เว็บไซต์ของเราทำขึ้นด้วยจุดประสงค์คืออยากให้นักเรียนและนักศึกษาได้มีพื้นที่ได้ลงผลงานสำหรับในการหารายได้หรือมีความต้องการที่จะอัพสกิลตัวเอง และผู้ว่าจ้างจะสามารถหาราคาในเรทราคาที่ถูกมากขึ้นได้จากเว็บไซต์นี้</p>
            </h3>
            </Col>
            </Row>
            <div className = "btn-aboutus mt-3">
                <Link to = '/Register'>
                     <button type = "button" className = "btn-lg">เข้าร่วมกับเรา</button>
                </Link>
            </div>
           </div>
        </div>
    )
}
