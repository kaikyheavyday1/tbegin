import React from 'react'
import { withRouter, Link } from 'react-router-dom'


export default function Hiring() {


    return (
        <div className='Sidebar'>
            <h1 className='text'>หมวดหมู่</h1>
<ul>
<li><a href='#'><h2>ออกแบบกราฟิก</h2>
        </a>
    <ul className='feat-show'>
        <li><Link to = "/uploadwork">ออกแบบโลโก้</Link></li>
        <li><a href='#'>ออกแบบโลโก้</a></li>
        <li><a href='#'>ออกแบบแบนเนอร์</a></li>
        <li><a href='#'>พอร์ตฟอลิโอ</a></li>
        <li><a href='#'>วาดภาพ/ดราฟภาพ</a></li>
        <li><a href='#'>อินโฟกราฟิก</a></li>
        <li><a href='#'>สไลด์พรีเซนต์</a></li>
        <li><a href='#'>ออกแบบ UX/UI</a></li>
    </ul>
</li>

<li><a href='#'><h2>สื่อมีเดีย</h2></a>
    <ul>
        <li><a href='#'>ตัดต่อวีดีโอ</a></li>
        <li><a href='#'>อนิเมชั่น</a></li>
        <li><a href='#'>โมเดล 3 มิติ</a></li>
        <li><a href='#'>เสียงเอฟเฟค</a></li>
    </ul>
</li>

<li><a href='#'><h2>ถ่ายภาพ</h2></a>
    <ul>
        <li><a href='#'>ถ่ายรูปรับปริญา</a></li>
        <li><a href='#'>ถ่ายแบบ</a></li>
        <li><a href='#'>ถ่ายสินค้า</a></li>
        <li><a href='#'>ถ่ายรูปโฆษณา</a></li>
    </ul>
</li>

<li><a href='#'><h2>เขียนและแปลภาษา</h2></a>
    <ul>
        <li><a href='#'>เขียนรายงาน</a></li>
        <li><a href='#'>แปลภาษา</a></li>
        <li><a href='#'>พิมพ์เอกสาร</a></li>
        <li><a href='#'>พิสูจน์อักษร</a></li>
    </ul>
</li>

<li><a href='#'><h2>โปรแกรม และ เว็บไซต์</h2></a>
    <ul>
        <li><a href='#'>Web Developer</a></li>
        <li><a href='#'>Mobile Developer</a></li>
        <li><a href='#'>Game Developer</a></li>
        <li><a href='#'>ออกแบบฐานข้อมูล</a></li>
        <li><a href='#'>ลงโปรแกรมต่างๆ</a></li>
        <li><a href='#'>ตรวจสอบโค้ด แก้บัคต่างๆ</a></li>
    </ul>
</li>

<li><a href='#'><h2>สอนพิเศษ</h2></a>
    <ul>
        <li><a href='#'>คณิตศาสตร์</a></li>
        <li><a href='#'>วิทยาศาสตร์</a></li>
        <li><a href='#'>ภาษาอังกฤษ</a></li>
        <li><a href='#'>ภาษาไทย</a></li>
        <li><a href='#'>สังคมศึกษา</a></li>
        <li><a href='#'>ศิลปะ</a></li>
        <li><a href='#'>ติวสอบเข้า/เก็งข้อสอบ</a></li>
    </ul>
</li>

<li><a href='#'><h2>จัดการร้านค้าออนไลน์</h2></a>
    <ul>
        <li><a href='#'>ดูแลเพจและเว็บไซต์</a></li>
        <li><a href='#'>รีวิวสินค้</a></li>
        <li><a href='#'>ยิงโฆษณา</a></li>
        <li><a href='#'>สินค้าราคาส่ง</a></li>
    </ul>
</li>

</ul>
        </div>
    )
}
