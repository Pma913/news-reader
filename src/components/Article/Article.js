import React from 'react'
import './Article.css'
const dayjs = require('dayjs')

const Article = ({ headline, image, description, date }) => {
  console.log(dayjs(date).format('MMM DD/YYYY'))
  return (
    <div>
      <img className="art-thumb" alt="news article display" src={image} />
      <h2 className="headline">{headline}</h2>
      <p className="description">{description}</p>
      <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>
    </div>
  )
}

export default Article