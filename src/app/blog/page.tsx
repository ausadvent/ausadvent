
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
      alternates: {
        canonical: 'https://www.ausadventcare.com.au/blog'
      },
      openGraph: {
        title: 'Blog',
        description: 'Latest articles about NDIS solutions',
        url: 'https://www.ausadventcare.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-hero.1e100538.webp&w=3840&q=75',
        type: 'website',
        images: [
          {
            url: 'https://www.ausadventcare.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-hero.1e100538.webp&w=3840&q=75'
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
