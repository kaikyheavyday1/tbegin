import React from 'react'
import logo from '../images/logo.png'
export default function Login() {
    return (
        <div className = "login container mt-5">
           <div className ="col-6 mx-auto">
               <img src = {logo} alt = "img4" height="70px" className="justify-content-center"/>
                <h1>เข้าสู่ระบบ</h1>
                    <form>
                        <div className = "form-group">
                            <input type = "email" name = "email" className = "form-control" placeholder= "อีเมล"/>
                        </div>
                        <div>
                            <input type = "password" name = "password" className = "form-control" placeholder= "รหัสผ่าน"/>
                        </div>
                        <div className = "mt-3 text-center">
                            <button type = "submit" className = "btn-lg btn-primary">เข้าสู่ระบบ</button>
                        </div>
                    </form>
                    </div>
        </div>
    )
}
