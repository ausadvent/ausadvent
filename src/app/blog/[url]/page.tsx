import { fetchArticles } from '@/app/utils/fetchArticles'
import React from 'react'
import Intro from './Intro'
import MainContent from './MainContent'

interface PageProps{
    params: {url: string}
}

export default async function Article({ params }: any) {
    const articles = await fetchArticles()

    // Find the current article
    const currentArticle:any = articles.find(entry => entry.fields.articleUrl === params.url)
  
    return (
    // <div>Article {currentArticle.fields.articleTitle}</div>
    <main>
      <Intro article={currentArticle} />
      <MainContent article={currentArticle} />
    </main>
  )
}
