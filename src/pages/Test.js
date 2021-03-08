import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import axios from 'axios'
let initState = {
  email: null,
  password: null,
}
let getuser = {
  name: null,
  surname: null,
  email: null,
}

export default function Test() {
  const [mp, setMp] = useState()
  const [user, setUser] = useState(initState)
  const [olduser, setOlduser] = useState(getuser)
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('start')
    profile()
    console.log(mp)
  }, [])
  const profile = async (e) => {
    const fetch = await axios.get('http://localhost:4000/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access-token'), //the token is a variable which holds the token
      },
    })
    let data = await fetch.data
    data = data[0]
    const insertUser = {
      username: data.username,
      name: data.name,
      surname: data.surname,
      tel: data.phone,
      email: data.email,
      birthday: data.birthday,
      address: data.address,
    }
    setOlduser(insertUser)
  }
  const handleCountclick = () => {
    setCount(count + 1)
  }
  const handleInputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setUser({ ...user, [id]: value })
    console.log(user)
  }

  return (
    <div className="container">
      <h1>DESIGN</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">1</div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">2</div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">3</div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">4</div>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="mr-3">kuy</h1>
        <div>
          <h1>aasd</h1>
          <h1>asdsadasdsad</h1>
        </div>
      </div>
      <div className="col-6 mx-auto text-center bg-primary">
        <p>asdsadsad</p>
        <div>
          {olduser.name} {olduser.surname} {olduser.username}
        </div>
      </div>
      <div>
        {count}
        <button type="button" onClick={handleCountclick}>
          click me
        </button>
      </div>

      <div>
        <div className="form-group">
          <label for="inputemail">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="กรุณากรอกอีเมล"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label for="inputemail">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <button type="button">login</button>
        </div>
      </div>
    </div>
  )
}
