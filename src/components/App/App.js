import React from 'react'
import sampDat from '../../utilities/sample-data.json'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'

const App = () => {
  const formatArticles = () => {
    let i = 0
    sampDat.articles.forEach(art => {
      art.source.id = i
      i++
    })
  }

  return (
    <div>
      <h1>We working</h1>
      <ArticleDisplay articles={sampDat.articles} />
    </div>
  )
}

export default App