import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import polygon from '../images/sidebar/polygon.svg'

function Sidebar() {
  return (
    <Row>
      <Col className="ml-0" md={2} sm={1}>
        <div className="sidesideside">
          <h1>ตัวกรองรายการฟรีแลนซ์</h1>
          <h2>หมวดหมู่งาน</h2>
          <div className="">
            <Link to="working-list?type=graphic">
              <h3>ออกแบบกราฟฟิค</h3>
            </Link>
            <Link to="working-list?type=graphic&subtype=logo">
              <p>ออกแบบโลโก้</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=port">
              <p>Portfolio</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=banner">
              <p>ออกแบบแบนเนอร์</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=drawing">
              <p>วาดภาพ</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=drafting">
              <p>ดราฟรูป</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=info">
              <p>อินโฟรกราฟิก</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=Present">
              <p>Slide Presentation</p>
            </Link>
            <Link to="working-list?type=graphic&subtype=uxui">
              <p>UX/UI</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=media">
              <h3>ผลิตสื่อมัลติมีเดีย</h3>
            </Link>
            <Link to="working-list?type=media&subtype=subtitle">
              <p>Subtitle</p>
            </Link>
            <Link to="working-list?type=media&subtype=videoedit">
              <p>Video Editor</p>
            </Link>
            <Link to="working-list?type=media&subtype=anime">
              <p>Animation</p>
            </Link>
            <Link to="working-list?type=media&subtype=motiongraphic">
              <p>Motion Graphic</p>
            </Link>
            <Link to="working-list?type=media&subtype=videopresent">
              <p>Video Presentation</p>
            </Link>
            <Link to="working-list?type=media&subtype=3d">
              <p>3D Model</p>
            </Link>
            <Link to="working-list?type=media&subtype=fx">
              <p>Sound FX</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=photo">
              <h3>ถ่ายภาพ</h3>
            </Link>
            <Link to="working-list?type=photo&subtype=education">
              <p>ถ่ายภาพรับปริญญา</p>
            </Link>
            <Link to="working-list?type=photo&subtype=portarait">
              <p>ถ่ายภาพ Portarait</p>
            </Link>
            <Link to="working-list?type=photo&subtype=ad">
              <p>ถ่ายโฆษณา</p>
            </Link>
            <Link to="working-list?type=photo&subtype=product">
              <p>ถ่าย Product</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=writingtranslate">
              <h3>เขียนแปลภาษา</h3>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=report">
              <p>เขียนรายงาน</p>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=translate">
              <p>แปลภาษา</p>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=poet">
              <p>แต่งกลอน</p>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=writing">
              <p>พิมพ์เอกสาร</p>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=proofread">
              <p>พิสูจน์อักษร</p>
            </Link>
            <Link to="working-list?type=writingtranslate&subtype=fiction">
              <p>เขียนนิยาย</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=programmer">
              <h3>เว็บไซต์และโปรแกรม</h3>
            </Link>
            <Link to="working-list?type=programmer&subtype=web">
              <p>Web Developer</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=mobile">
              <p>Mobile Developer</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=back-end">
              <p>ออกแบบฐานข้อมูล</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=game">
              <p>Game Developer</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=bug">
              <p>แก้บัคต่างๆ</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=uxui">
              <p>UX/UI</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=hardware">
              <p>Hardware</p>
            </Link>
            <Link to="working-list?type=programmer&subtype=application">
              <p>Desktop Application</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=tutor">
              <h3>สอนพิเศษ</h3>
            </Link>
            <Link to="working-list?type=tutor&subtype=math">
              <p>สอนวิชาคำนวณ</p>
            </Link>
            <Link to="working-list?type=tutor&subtype=language">
              <p>สอนภาษา</p>
            </Link>
            <Link to="working-list?type=tutor&subtype=science">
              <p>สอนวิทยาศาสตร์</p>
            </Link>
            <Link to="working-list?type=tutor&subtype=tutoring">
              <p>สอนเก็งข้อสอบ</p>
            </Link>
            <Link to="working-list?type=tutor&subtype=teachchildren">
              <p>สอนเด็กเล็ก</p>
            </Link>
            <Link to="working-list?type=tutor&subtype=law">
              <p>สอนสังคมและกฏหมาย</p>
            </Link>
          </div>
          <div className="">
            <Link to="working-list?type=manage">
              <h3>การจัดการร้านค้าออนไลน์</h3>
            </Link>
            <Link to="working-list?type=manage&subtype=admin">
              <p>Admin</p>
            </Link>
            <Link to="working-list?type=manage&subtype=review">
              <p>Review สินค้า</p>
            </Link>
            <Link to="working-list?type=manage&subtype=ad">
              <p>โฆษณา</p>
            </Link>
            <Link to="working-list?type=manage&subtype=supplier">
              <p>Supplier</p>
            </Link>
          </div>
          <Link to="working-list?type=other">
            <h3>อื่นๆ</h3>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default Sidebar
