import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleDetails.css'
const dayjs = require('dayjs')

const ArticleDetails = ({ props }) => {
  return (
    <div className="details">
      <Link to="/">
        <button>Back</button>
      </Link>
      <h2 className="art-headline">{props.title}</h2>
      <img className="details-img" src={props.urlToImage} alt="alt here"/>
      <p>{dayjs(props.publishedAt).format('MMM DD, YYYY')}</p>
      <p>{props.content}</p>
      <p>{props.source.name}</p>
    </div>
  )
}

export default ArticleDetails