'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setTimeoutState] = useState(false)
  const [article, setArticle] = useState('')
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.classList.add('is-preload')
    } else {
      document.body.classList.remove('is-preload')
    }

    if (isArticleVisible) {
      document.body.classList.add('is-article-visible')
    } else {
      document.body.classList.remove('is-article-visible')
    }
  }, [loading, isArticleVisible])

  const handleOpenArticle = (articleId) => {
    setIsArticleVisible(true)
    setArticle(articleId)

    setTimeout(() => {
      setTimeoutState(true)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(true)
    }, 350)
  }

  const handleCloseArticle = () => {
    setArticleTimeout(false)

    setTimeout(() => {
      setTimeoutState(false)
      setArticle('')
    }, 325)

    setTimeout(() => {
      setIsArticleVisible(false)
    }, 350)
  }

  return (
    <>
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
        <Main 
          isArticleVisible={isArticleVisible} 
          timeout={timeout} 
          articleTimeout={articleTimeout} 
          article={article} 
          onClose={handleCloseArticle} 
        />
        <Footer timeout={timeout} />
      </div>
      <div id="bg"></div>
    </>
  )
}
