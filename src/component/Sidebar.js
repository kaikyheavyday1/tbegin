import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import polygon from '../images/sidebar/polygon.svg'

function Sidebar() {
  return (
    <div className="sidesideside">
      <h1 className="text editwork-color">หมวดหมู่งาน</h1>
      <hr color="#00296B"></hr>

      <div className="">
        <ul>
          <Link to="/working-list?maintype=1">
            <li>
              <h3 className="editwork-color">ออกแบบกราฟิก</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=1">ออกแบบโลโก้</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=2">ออกแบบแบนเนอร์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=3">พอร์ตฟอลิโอ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=4">วาดภาพ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=5">ดราฟรูป</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=6">อินโฟกราฟิก</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=7">สไลด์พรีเซนต์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=8">ออกแบบ UX/UI</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=2">
            <li>
              <h3 className="editwork-color">ผลิตสื่อมัลติมีเดีย</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=9">ซับไตเติล</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=10">ตัดต่อวีดีโอ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=11">อนิเมชั่น</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=12">โมชั่นกราฟิก</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=13">วีดีโอนำเสนอ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=14">โมเดล 3มิติ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=15">เสียงเอฟเฟค</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=3">
            <li>
              <h3 className="editwork-color">ถ่ายภาพ</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=16">ถ่ายภาพรับปริญญา</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=17">ถ่ายภาพ Portarait</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=18">ถ่ายโฆษณา</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=19">ถ่ายสินค้าเพื่อการโฆษณา</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=4">
            <li>
              <h3 className="editwork-color">งานเขียนและแปลภาษา</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=20">เขียนรายงาน</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=21">แปลภาษา</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=22">แต่งกลอน</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=23">พิมพ์เอกสาร</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=24">พิสูจน์อักษร</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=25">เขียนนิยาย</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=5">
            <li>
              <h3 className="editwork-color">เว็บไซต์และโปรแกรม</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=26">พัฒนาเว็บไซต์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=27">พัฒนาแอพลิเคชั่นมือถือ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=28">ออกแบบฐานข้อมูล</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=29">พัฒนาเกม</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=30">แก้บัคต่างๆ</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=31">ออกแบบ UX/UI</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=32">ฮาร์ดแวร์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=33">Desktop Application</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=6">
            <li>
              <h3 className="editwork-color">สอนพิเศษ</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=34">วิชาคณิตศาสตร์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=35">ภาษา</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=36">วิชาวิทยาศาสตร์</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=37">เก็งข้อสอบระดับมัธยม</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=38">เก็งข้อสอบระดับประถม</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=39">วิชาสังคม กฎหมาย</Link>
            </li>
          </ul>
        </ul>
      </div>

      <div className="">
        <ul>
          <Link to="working-list?maintype=7">
            <li>
              <h3 className="editwork-color">การจัดการร้านค้าออนไลน์</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="/working-list?subtype=40">แอดมิน</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=41">รีวิวสินค้า</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=42">โฆษณา</Link>
            </li>
            <li>
              <Link to="/working-list?subtype=43">Supplier</Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
