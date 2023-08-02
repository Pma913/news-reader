import React, { useEffect, useState } from 'react'
import './App.css'
import sampDat from '../../utilities/sample-data.json'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'

const App = () => { 
  const [arts, setArts] = useState([])
  const [controllArts, setControllArts] = useState([])

  const formatArticles = (data) => {
    let i = 0
    data.articles.forEach(art => {
      art.source.id = i
      i++
    }) 
    setArts(data.articles)
    setControllArts(data.articles)
  }

  const searchArts = (text) => {
    const upText = text.toUpperCase()
    const filteredArts = arts.filter(art => art.title.toUpperCase().includes(upText))
    setArts(filteredArts)
  }

  const clearSearch = () => {
    setArts(controllArts)
  }

  useEffect(() => {
    formatArticles(sampDat)
  }, [])   

  return (
    <div className="main-display">
      <Header search={searchArts} clear={clearSearch}/>
      <Routes>
        <Route path="/" element={<ArticleDisplay articles={arts} />} />
      </Routes>
    </div>
  )
}

export default App