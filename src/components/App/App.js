import React, { useEffect, useState } from 'react'
import './App.css'
import sampDat from '../../utilities/sample-data.json'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'

const App = () => { 
  const [arts, setArts] = useState([])

  const formatArticles = (data) => {
    let i = 0
    data.articles.forEach(art => {
      art.source.id = i
      i++
    }) 
    setArts(data.articles)
  }

  useEffect(() => {
    formatArticles(sampDat)
  })   

  return (
    <div className="main-display">
      <h1>We working</h1>
      <ArticleDisplay articles={arts} />
    </div>
  )
}

export default App