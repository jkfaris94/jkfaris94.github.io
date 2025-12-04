'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setTimeoutState] = useState(false)
  const [article, setArticle] = useState('')

  const handleOpenArticle = (article) => {
    setIsArticleVisible(true)
    setArticle(article)
    setTimeoutState(true)
  }

  const handleCloseArticle = () => {
    setIsArticleVisible(false)
    setArticle('')
    setTimeoutState(false)
  }

  return (
    <>
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
        <Main 
          isArticleVisible={isArticleVisible} 
          timeout={timeout} 
          article={article} 
          onClose={handleCloseArticle} 
        />
        <Footer timeout={timeout} />
      </div>
      <div id="bg"></div>
    </>
  )
}
