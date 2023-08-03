import React, { useEffect, useState } from 'react'
import './App.css'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'
import Header from '../Header/Header'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import { Route, Routes } from 'react-router-dom'
import getNews from '../../utilities/apiCalls'

const App = () => { 
  const [arts, setArts] = useState([])
  const [controllArts, setControllArts] = useState([])
  const [art, setArt] = useState({})
  const [isClicked, setIsClicked] = useState(false)

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
    const filteredArts = controllArts.filter(art => art.title.toUpperCase().includes(upText))
    setArts(filteredArts)
  }

  const clearSearch = () => {
    setArts(controllArts)
  }

  const getArticle = (id) => {
    const chosenArt = arts.find(art => art.source.id === id)
    setArt(chosenArt)
  } 

  const handleToggle = () => {
    setIsClicked(!isClicked)
  }

  const fontMode = isClicked ? 'standard font' : 'dyslexic font'

  useEffect(() => {
    getNews()
    .then(data => formatArticles(data))
  }, [])   

  return (
    <div className={`main-display ${isClicked ? "standard" : "dyslexic"}`}>
    <button className="font-btn" onClick={() => handleToggle()}>{fontMode}</button>
      <Routes>
        <Route path="/" element={
        <div className="main-page-display">
          <Header search={searchArts} clear={clearSearch}/>
          <ArticleDisplay getArt={getArticle} articles={arts} />
        </div>
        } />
        <Route path="/details" element={<ArticleDetails props={art}/>} />
      </Routes>
    </div>
  )
}

export default App