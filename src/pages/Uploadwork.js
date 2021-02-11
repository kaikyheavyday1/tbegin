import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
export default class Uploadwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <div className="uploadwork">
                <div className="container pb-5">
                    <div className="in-uploadwork col-10 pb-3 mx-auto">
                        <h1 className="text-center mt-5">ลงผลงาน</h1>
                        <div>
                            <h2>เลือกหมวดหมู่ของงาน</h2>
                            <Row>
                                <Col lg="6">
                                    <div className="form-group">
                                        <label for="inputwork" class="form-label">หมวดหมู่ของงานหลัก</label>
                                        <select class="form-control">
                                            <option value="">หมวดหมู่ของงานหลัก</option>
                                            <option value="1">test</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="form-group">
                                        <label for="inputwork" class="form-label">หมวดหมู่ของงานรอง</label>
                                        <select class="form-control">
                                            <option value="">หมวดหมู่ของงานรอง</option>
                                            <option value="1">test</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <h2>รายละเอียดของงาน</h2>
                            <div className="form-group">
                                <label for="inputwork" class="form-label">ชื่องาน</label>
                                <input type="text" className="form-control" placeholder="เขียนประเภทของงานที่รับทำ ซึ่งเขียนให้กระชับ อ่านเข้าใจง่าย ช่วยให้ผู้ว่าจ้างตัดสินใจเบื้องต้นได้" />
                            </div>
                            <div className="form-group">
                                <label for="inputaddress" class="form-label">อธิบายเพิ่มเติมเกี่ยวกับงาน</label>
                                <textarea name="address" className="form-control" rows="2" placeholder="อธิบายเกี่ยวกับงานเพิ่มเติม ใส่รายละเอียดให้ได้มากที่สุด" />
                            </div>
                            <h2>รูปผลงานของคุณ</h2>
                            <Row>
                                <Col lg="4">
                                    <div>
                                        <input type="file" onChange={this._handleImageChange} />
                                        <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                                        {$imagePreview}
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div>
                                        <input type="file" onChange={this._handleImageChange} />
                                        <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                                        {$imagePreview}
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div>
                                        <input type="file" onChange={this._handleImageChange} />
                                        <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                                        {$imagePreview}
                                    </div>
                                </Col>
                            </Row>
                            <h2 className="mt-5">กำหนดราคาและเวลาส่งงาน</h2>
                            <div className="form-group">
                                <label for="inputaddress" class="form-label">สิ่งที่ลูกค้าจะได้รับจากงานของคุณ</label>
                                <textarea name="address" className="form-control" rows="2" placeholder="ระยะเวลาการทำงานของคุณ คุณภาพระดับงานของคุณ ลูกค้าสามารถแก้งานของคุณได้กี่ครั้ง" />
                            </div>
                            <Row>
                                <Col lg="4">
                                    <div className="form-group">
                                        <label for="inputwork" class="form-label">ราคางานของคุณ</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div className="form-group">
                                        <label for="inputwork" class="form-label">หลังหักค่าบริการงาน</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div className="form-group">
                                        <label for="inputwork" class="form-label">ใช้เวลาทำ</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="btn-aboutus mt-3 text-center">
                            <button type="button" className="btn-lg">เข้าร่วมกับเรา</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
