import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'
const dayjs = require('dayjs')

const Article = ({ headline, image, description, date, id, getArt }) => {
  return (
    <div className="article-box">
      <img className="art-thumb" alt="news article display" src={image} />
      <Link to="/details">
        <h2 className="headline" onClick={() => {
          getArt(id)
        }}>{headline}</h2>
      </Link>
      <p className="description">{description}</p>
      <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>
    </div>
  )
}

export default Article