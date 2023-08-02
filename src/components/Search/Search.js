import React, { useState } from 'react'
import './Search.css'

const Search = ({ search, clear }) => {
  const [input, setInput] = useState('')

  return (
    <div className="search">
      <input className="input-field" placeholder="search..." type="text" value={input} onChange={(event) => {
        setInput(event.target.value)
      }}/>
      <div className="button-container">
        <button onClick={(event) => {
          event.preventDefault()
          search(input)
        }}>Search</button>
        <button onClick={(event) => {
          event.preventDefault()
          clear()
          setInput('')
        }}>Clear</button>
      </div>
    </div>
  )
}

export default Search