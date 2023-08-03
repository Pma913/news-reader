import React, { useState } from 'react'
import './Search.css'

const Search = ({ search, clear }) => {
  const [input, setInput] = useState('')

  return (
    <div className="search">
      <input className="input-field" placeholder="Type to search..." type="text" value={input} onChange={(event) => {
        setInput(event.target.value)
        search(event.target.value)
      }}/>
      
        <button onClick={(event) => {
          event.preventDefault()
          clear()
          setInput('')
        }}>Clear</button>
      
    </div>
  )
}

export default Search