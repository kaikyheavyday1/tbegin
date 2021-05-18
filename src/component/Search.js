import React, { useState } from 'react'
import searchimg from '../images/nav/loupe.svg'
import axios from 'axios'

export default function Search() {
  const [search, setSearch] = useState()
  const handleSearchChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    setSearch({ ...search, [id]: value })
  }
  const handleButtonSubmit = async (e) => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?search=${search.search}`
    )
    const data = await fetch.data
    console.log(data)
  }
  return (
    <div className="input-search mt-1 ml-5">
      <input
        type="text"
        placeholder="search"
        className="form-search pl-3 p-1"
        id="search"
        onChange={handleSearchChange}
      />
      <button type="button bg-primary">
        <img src={searchimg} width="20px" onClick={handleButtonSubmit} />
      </button>
    </div>
  )
}
