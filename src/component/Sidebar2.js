import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Sidebar2 = (props) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div className="sidesidesideside">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <h2 className = "editwork-color editwork-bold">หมวดหมู่งาน</h2>
        </NavbarBrand>
        <button className="btn-home" onClick={toggleNavbar}>
          แสดง
        </button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=graphic">
            <li>
              <h3 className="editwork-color">ออกแบบกราฟิก</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=graphic&subtype=logo">
                ออกแบบโลโก้
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=banner">
                ออกแบบแบนเนอร์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=port">
                พอร์ตฟอลิโอ
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=drawing">วาดภาพ</Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=drafting">
                ดราฟรูป
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=info">
                อินโฟกราฟิก
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=Present">
                สไลด์พรีเซนต์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=graphic&subtype=uxui">
                ออกแบบ UX/UI
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=media">
            <li>
              <h3 className="editwork-color">ผลิตสื่อมัลติมีเดีย</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=media&subtype=subtitle">
                ซับไตเติล
              </Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=videoedit">
                ตัดต่อวีดีโอ
              </Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=anime">อนิเมชั่น</Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=motiongraphic">
                โมชั่นกราฟิก
              </Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=videopresent">
                วีดีโอนำเสนอ
              </Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=3d">โมเดล 3มิติ</Link>
            </li>
            <li>
              <Link to="working-list?type=media&subtype=fx">เสียงเอฟเฟค</Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=photo">
            <li>
              <h3 className="editwork-color">ถ่ายภาพ</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=photo&subtype=education">
                ถ่ายภาพรับปริญญา
              </Link>
            </li>
            <li>
              <Link to="working-list?type=photo&subtype=portarait">
                ถ่ายภาพ Portarait
              </Link>
            </li>
            <li>
              <Link to="working-list?type=photo&subtype=ad">ถ่ายโฆษณา</Link>
            </li>
            <li>
              <Link to="working-list?type=photo&subtype=product">
                ถ่ายสินค้าเพื่อการโฆษณา
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=writingtranslate">
            <li>
              <h3 className="editwork-color">งานเขียนและแปลภาษา</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=writingtranslate&subtype=report">
                เขียนรายงาน
              </Link>
            </li>
            <li>
              <Link to="working-list?type=writingtranslate&subtype=translate">
                แปลภาษา
              </Link>
            </li>
            <li>
              <Link to="working-list?type=writingtranslate&subtype=poet">
                แต่งกลอน
              </Link>
            </li>
            <li>
              <Link to="working-list?type=writingtranslate&subtype=writing">
                พิมพ์เอกสาร
              </Link>
            </li>
            <li>
              <Link to="working-list?type=writingtranslate&subtype=proofread">
                พิสูจน์อักษร
              </Link>
            </li>
            <li>
              <Link to="working-list?type=writingtranslate&subtype=fiction">
                เขียนนิยาย
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=programmer">
            <li>
              <h3 className="editwork-color">เว็บไซต์และโปรแกรม</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=programmer&subtype=web">
                พัฒนาเว็บไซต์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=mobile">
                พัฒนาแอพลิเคชั่นมือถือ
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=back-end">
                ออกแบบฐานข้อมูล
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=game">
                พัฒนาเกม
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=bug">
                แก้บัคต่างๆ
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=uxui">
                ออกแบบ UX/UI
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=hardware">
                ฮาร์ดแวร์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=programmer&subtype=application">
                Desktop Application
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=tutor">
            <li>
              <h3 className="editwork-color">สอนพิเศษ</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=tutor&subtype=math">
                วิชาคณิตศาสตร์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=tutor&subtype=language">ภาษา</Link>
            </li>
            <li>
              <Link to="working-list?type=tutor&subtype=science">
                วิชาวิทยาศาสตร์
              </Link>
            </li>
            <li>
              <Link to="working-list?type=tutor&subtype=tutoring">
                เก็งข้อสอบระดับมัธยม
              </Link>
            </li>
            <li>
              <Link to="working-list?type=tutor&subtype=teachchildren">
                เก็งข้อสอบระดับประถม
              </Link>
            </li>
            <li>
              <Link to="working-list?type=tutor&subtype=law">
                วิชาสังคม กฎหมาย
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
          <Link to="working-list?type=manage">
            <li>
              <h3 className="editwork-color">การจัดการร้านค้าออนไลน์</h3>
            </li>
          </Link>
          <ul className="feat-show editwork-color">
            <li>
              <Link to="working-list?type=manage&subtype=admin">แอดมิน</Link>
            </li>
            <li>
              <Link to="working-list?type=manage&subtype=review">
                รีวิวสินค้า
              </Link>
            </li>
            <li>
              <Link to="working-list?type=manage&subtype=ad">โฆษณา</Link>
            </li>
            <li>
              <Link to="working-list?type=manage&subtype=supplier">
                Supplier
              </Link>
            </li>
          </ul>
        </ul>
            </NavItem>
            <NavItem className="">
            <ul>
        <Link to="working-list?type=other">
          <li>
            <h3 className="editwork-color">อื่นๆ</h3>
          </li>
        </Link>
      </ul>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <button className="button2" onClick="topFunction()">
        กลับไปด้านบน
      </button>
    </div>
  )
}

export default Sidebar2
