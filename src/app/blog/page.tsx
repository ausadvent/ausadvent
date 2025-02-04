import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'
import Way from '../blog/[url]/Way';

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "name": "Blog Page Ausadvent Care",
  "url": "https://www.ausadventcare.com.au/blog",
  "headline": "Blog articles, tips and news about NDIS support independent living",
  "description": "Latest articles about NDIS solutions, Support independent living in Queensland and Western Australia",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.ausadventcare.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-hero.1e100538.webp&w=3840&q=75"
  },
  "sameAs": [
    "https://www.ausadventcare.com.au/blog"
  ]
}

const breadCrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `https://www.ausadvencare.com.au`
    },
    {
      '@type': 'ListItem',
      "position": 2,
      "name": "Blog",
      "item": `https://www.ausadvencare.com.au/blog`,
    }
  ]
}
  

export default async function Blog() {

    const articles = await fetchArticles()

    const metadata:any = await generateMetadata()

    return (
    <main>
      <Head>
        <title>{metadata.title} </title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      </Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbData)}}
      />
        
        <Intro />
        {articles ? (
            <div>
                <ArticlesList articles={articles} />
            </div>
        ) : (
            <p>Loading articles...</p>
        )}
        <section className="">
            <Way />
          </section>
    </main>     
  )
}
