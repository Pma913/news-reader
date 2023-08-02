import React from 'react'

const Article = ({ headline, image, description, date }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <img src={image} />
      <p>{description}</p>
      <p>{date}</p>
    </div>
  )
}

export default Article