import React, { useEffect, useState } from 'react'
import './App.css'
import sampDat from '../../utilities/sample-data.json'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'
import Header from '../Header/Header'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import { Route, Routes } from 'react-router-dom'
import getNews from '../../utilities/apiCalls'

const App = () => { 
  const [arts, setArts] = useState([])
  const [controllArts, setControllArts] = useState([])
  const [art, setArt] = useState({})

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

  const getArticle = (id) => {
    const chosenArt = arts.find(art => art.source.id === id)
    setArt(chosenArt)
  } 

  const fetchData = () => {
    getNews()
    .then(data => formatArticles(data))
  }

  useEffect(() => {
    fetchData()
  }, [])   

  return (
    <div className="main-display">
      <Header search={searchArts} clear={clearSearch}/>
      <Routes>
        <Route path="/" element={<ArticleDisplay getArt={getArticle} articles={arts} />} />
        <Route path="/details" element={<ArticleDetails props={art}/>} />
      </Routes>
    </div>
  )
}

export default App