import React from 'react'
import { Row, Col } from 'reactstrap';
import ImageUploader from 'react-images-upload'
export default function Editwork() {
    return (
        <div className = "container pb-5">
            
            
        <div className = "editwork-bg in-uploadwork col-10 pb-3 mx-auto">
        <h1 className = "editwork-bold mt-4 text-center">แก้ไขสินค้า</h1>
        <h3 className = "editwork-color text-center">ProductName</h3>
            <Row>
                <Col lg = "6">
                <h2 className = "editwork-color editwork-bold mt-3">เลือกหมวดหมู่ผลงาน</h2>
                <hr color = "#00296B"></hr>
                <h3 className = "editwork-color">หมวดหมู่งานหลัก</h3>
                <select class="form-control">
                    <option value="">โปรดเลือกหมวดหมู่งาน</option>
                    <option value="1">test</option>
                </select>
                <h3 className = "editwork-color">ประเภทงาน</h3>
                <select class="form-control">
                    <option value="">โปรดเลือกประเภทงาน</option>
                    <option value="1">test</option>
                </select>
                </Col>
                
                <Col lg = "6">
                <h2 className = "editwork-color editwork-bold mt-3">ราคา และ ระยะเวลาการทำงาน</h2>
                <hr color = "#00296B"></hr>
                <h3 className = "editwork-color">ราคา</h3>
                <input type="text" className="form-control" placeholder="กำหนดราคา เช่น 200" />
                <h3 className = "editwork-color">ระยะเวลาการทำงาน</h3>
                <select class="form-control">
                    <option value="">โปรดเลือกระยะเวลาการทำงาน</option>
                    <option value="1">1-2 วัน</option>
                    <option value="2">2-3 วัน</option>
                    <option value="3">3-4 วัน</option>
                    <option value="4">5-6 วัน</option>
                    <option value="5">มากกว่า 1 อาทิตย์</option>
                </select>
                </Col>
                
            </Row>
            <h2 className = "editwork-color editwork-bold mt-3">รายละเอียดงาน</h2>
            <hr className = "" color = "#00296B"></hr>
            <h3 className = "editwork-color">ชื่องาน</h3>
            <input type="text" className="form-control" placeholder="Ex.โลโก้สไตล์มินิมอล" />
            <h3 className = "editwork-color">อธิบายเพิ่มเติมเกี่ยวกับงาน</h3>
            <textarea name="editwork" className="form-control" rows="3" placeholder="Ex. โลโก้สไตล์มินิมิลสวยหรู เรียบง่ายดูสบายตา ราคาถูก สามารถแก้ผลงานได้ 2 รอบ" />
            <h3 className = "editwork-color">สื่งที่ลูกค้าจะได้รับจากงาน</h3>
            <textarea name="editwork" className="form-control" rows="3" placeholder="Ex. โลโก้จำนวน 2 ชิ้นงาน แก้ไขได้ทั้งหมด 2 รอบ ตามบรีฟงานลูกค้า" />
            <div className="form-group">
            <h2 className = "editwork-color editwork-bold mt-3">อัพโหลดรูปผลงาน</h2>
            <hr className = "" color = "#00296B"></hr>
              <p>อัพโหลดรูปภาพของคุณ (จำกัดสูงสุดไม่เกิน 6 รูป)</p>
              <ImageUploader
                singleImage={false}
                withPreview={true}
              />
            </div>
            <div className="btn-aboutus mt-3 text-right">
                        <button type="button" className="btn-lg">บันทึกการแก้ไข</button>
                    </div>
        </div>
        </div>

    )
}
