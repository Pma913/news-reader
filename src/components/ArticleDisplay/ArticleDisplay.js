import React from 'react'
import Article from '../Article/Article'

const ArticleDisplay = ({ articles }) => {
  const arts = articles.map(art => {
    return (
      <Article 
        headline={art.title}
        image={art.urlToImage}
        description={art.description}
        date={art.publishedAt}
        key={art.source.id}
      />
    )
  })

  return (
    <>
      {arts}
    </>
  )
}

export default ArticleDisplay