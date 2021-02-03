import React from 'react'

export default function Login() {
    return (
        <div className = "container">
           <div className ="col-6 mx-auto">
                    <h1 className="text-center">Sign in</h1>
                    <form>
                        <div className = "form-group">
                            <label htmlfor="Inputusername">username</label>
                            <input type = "text" name = "username" className = "form-control"/>
                        </div>
                        <div>
                            <label htmlfor="Inputpassword">password</label>
                            <input type = "password" name = "password" className = "form-control"/>
                        </div>
                        <div className = "mt-3 text-center">
                            <button type = "submit" className = "btn-lg btn-primary">Sign in</button>
                        </div>
                    </form>
                    </div>
        </div>
    )
}
