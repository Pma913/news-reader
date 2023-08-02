import React from 'react'
import './Header.css'
import Search from '../Search/Search'

const Header = (props) => {
  return (
    <div className="header">
      <h1>News Reader</h1>
      <Search search={props.search} clear={props.clear}/>
    </div>
  )
}

export default Header