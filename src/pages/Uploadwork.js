import React, { Component } from 'react'

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
            <div>
                <div className="container">
                    <h1 className="text-center mt-5">ลงผลงาน</h1>
                    <div>
                        <h2>เลือกหมวดหมู่ของงาน</h2>
                        <div className="form-group">
                            <label for="inputwork" class="form-label">หมวดหมู่ของงานหลัก</label>
                            <select class="form-control">
                                <option value="">กรุณาใส่แขวงหรือตำบล</option>
                                <option value="1">test</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="inputwork" class="form-label">หมวดหมู่ของงานรอง</label>
                            <select class="form-control">
                                <option value="">กรุณาใส่แขวงหรือตำบล</option>
                                <option value="1">test</option>
                            </select>
                        </div>
                        <h2>รายละเอียดของงาน</h2>
                        <div className="form-group">
                            <label for="inputwork" class="form-label">ชื่องาน</label>
                            <select class="form-control">
                                <option value="">กรุณาใส่แขวงหรือตำบล</option>
                                <option value="1">test</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="inputaddress" class="form-label">อธิบายเพิ่มเติมเกี่ยวกับงาน</label>
                            <textarea name="address" className="form-control" rows="2" />
                        </div>
                        <h2>รูปผลงานของคุณ</h2>
                        <div>
                            <input type="file" onChange={this._handleImageChange} />
                            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                            {$imagePreview}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
