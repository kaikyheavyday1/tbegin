import React, { useState } from 'react'
import logo from '../images/logo.png'
import axios from "axios"
import {Link} from 'react-router-dom'


let initState = {
    email: null,
    password: null
}

export default function Login() {

    const [user, setUser] = useState(initState)

    const handleLoginChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setUser({ ...user, [id]: value })
    }

    const ButtonOnclick = async (e) => {

        if (user.email !== "" && user.password !== "") {
            const fetch = await axios.post("http://localhost:4000/auth/login", user)
            const data = await fetch.data
            console.log(data)
            e.preventDefault()
            localStorage.setItem('access-token', data);
            window.location.href = "http://localhost:3000/"
        }

    }

    return (
        <div className="login container mt-5 mb-5">
            <div className="in-login col-6 mx-auto">
                <div className="text-center">
                    <img src={logo} alt="img4" height="70px"/>
                </div>
                <h1>เข้าสู่ระบบ</h1>
                <div className="form-group">
                    <input type="email" name="email" id="email" onChange={handleLoginChange} className="form-control" placeholder="อีเมล" />
                </div>
                <div>
                    <input type="password" name="password" id="password" onChange={handleLoginChange} className="form-control" placeholder="รหัสผ่าน" />
                </div>
                <div className="mt-5 text-center">
                    <button type="button" onClick={ButtonOnclick} className="mb-3">เข้าสู่ระบบ</button>
                </div>
                <div className="text-center pb-3">
                    <h3><Link to ='/register'>สมัครสมาชิก</Link></h3>
                </div>
            </div>
        </div>
    )
}
