import { fetchArticles } from '@/app/utils/fetchArticles'
import React from 'react'

interface PageProps{
    params: {url: string}
}

export default async function Article({ params }: any) {
    const articles = await fetchArticles()
    console.log(articles)

    // Find the current article
    const currentArticle:any = articles.find(entry => entry.fields.articleUrl === params.url)
  
    return (
    <div>Article {currentArticle.fields.articleTitle}</div>
  )
}
