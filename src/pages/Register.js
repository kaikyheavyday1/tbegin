import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Service } from '../service/service'

let initState = {
    username: null,
    password: null,
    name: null,
    surname: null,
    email: null,
    tel: null,
    birthday: null,
    address: null,
    confirmPassword: null
}

export default function Register() {
    const [user, setUser] = useState(initState)
    const [error,setError] = useState()
    const service = new Service()

    const handleInputChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
        console.log(user)
    }

    const handleButtonSubmit = () => {
        if (!user) {
            console.log('เกิดข้อผิดพลาด ไม่มีข้อมูล')
            return 
        }

        const validate = service.validateInput(user)
        if(validate){
            console.log(`กรุณาใส่ค่า ${validate}`)
            setError(`กรุณาใส่ค่า ${validate}`)
            return
        }
        if (service.checkPassword(user)) {
            console.log('pass จะทำไรต่อ ก็เอาไปทำในนี้')
            setError('')
            return
        }
        setError('รหัสผ่านไม่ตรงกัน')
        console.log('รหัสผ่านไม่ตรงกัน')
        return
    }



    return (
        <div className="register container">
            <div className="col-6 mx-auto">
                <div className="text-center">
                    <img src={logo} alt="img4" height="70px" className="justify-content-center" />
                    <h1>สร้างบัญชีกับ Tbegin</h1>
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleInputChange} id="username" name="username" className="form-control" placeholder="ชื่อผู้ใช้ของคุณ" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleInputChange} id="name" name="name" className="form-control" placeholder="ชื่อจริง" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleInputChange} id="surname" name="surname" className="form-control" placeholder="นามสกุล" />
                </div>
                <div className="form-group">
                    <input type="email" onChange={handleInputChange} id="email" name="email" className="form-control" placeholder="อีเมล" />
                </div>
                <div className="form-group">
                    <input type="password" onChange={handleInputChange} id="password" name="password" className="form-control" placeholder="รหัสผ่าน" />
                </div>
                <div className="form-group">
                    <input type="password" onChange={handleInputChange} id="confirmPassword" name="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" />
                </div>
                <div className="form-group">
                    <label for="inputacc" class="form-label">ข้อมูลติดต่อ</label>
                    <input type="tel" onChange={handleInputChange} id="tel" name="tel" className="form-control" placeholder="เบอร์โทร" />
                </div>
                <div className="form-group">
                    <input type="date" onChange={handleInputChange} id="birthday" name="birthday" className="form-control" />
                </div>
                <div className="form-group">
                    <textarea name="address" onChange={handleInputChange} id="address" className="form-control" placeholder="ที่อยู่" rows="3" />
                </div>
                <div className="mt-3 text-center">
                    <button onClick={handleButtonSubmit} type="button" className="btn-lg btn-primary">สร้างบัญชี</button>
                </div>
                <span style={{color:"red"}}>{error ? error : ''}</span>
                <h3 className="text-center mt-3">มีบัญชีอยู่แล้ว <Link to = "./Login">เข้าสู่ระบบ</Link></h3>
            </div>
        </div>
    )
}
