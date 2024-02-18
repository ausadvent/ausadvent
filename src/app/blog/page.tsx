
import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'

// Components
import Intro from './Intro'
import ArticlesList from './ArticlesList'

// Utils
import { fetchArticles } from '../utils/fetchArticles'

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: 'Blog',
      description: 'Latest articles about NDIS solutions',
      openGraph: {
        title: 'Blog',
        description: 'Latest articles about NDIS solutions',
        url: 'https://www.aihr.com/wp-content/uploads/Learning-and-development-manager.png',
        type: 'website',
        images: [
          {
            url: 'https://www.aihr.com/wp-content/uploads/Learning-and-development-manager.png'
          }
        ]
      },
      robots: {
        index: true,
        follow: true
      }
    }
  }
  

export default async function Blog() {

    const articles = await fetchArticles()

    return (
    <main>
        <Intro />
        {articles ? (
            <div>
                <ArticlesList articles={articles} />
            </div>
        ) : (
            <p>Loading articles...</p>
        )}
    </main>     
  )
}
