import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

// Components
import Intro from './Intro'
import MainContent from './MainContent'
import NotFound from '@/app/not-found'

// Utils
import { fetchArticles } from '@/app/utils/fetchArticles'
import { getContentfulAssetUrl, getRichTextPlainText } from '@/lib/contentful'

interface PageProps{
  params: {url: string}
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  
  const articles = await fetchArticles()

  // Find the current article
  const currentArticle:any = articles.find(entry => entry?.fields?.articleUrl === params.url)
  
  if(currentArticle) {
    const articleFields = currentArticle?.fields ?? {}
    // Ensure the image URL is absolute
    const absoluteImageUrl = getContentfulAssetUrl(articleFields.articleMainImage);
    const description = getRichTextPlainText(articleFields.introductoryText).slice(0, 70)
  
    return {
      title: `${articleFields.articleTitle}`,
      description,
      alternates: {
        canonical: `https://www.ausadventcare.com.au/blog/${articleFields.articleUrl}`
      },
      openGraph: {
        title: `${articleFields.articleTitle}`,
        description,
        url: absoluteImageUrl,
        type: 'website',
        images: [
          {
            url: absoluteImageUrl
          }
        ]
      },
      robots: {
        index: true,
        follow: true
      }
    }
  } else {
    return {
      title: 'Not Found'
    }
  }
}


export default async function Article({ params }: any) {
  const articles = await fetchArticles()

  const metadata:any = await generateMetadata({ params })

  // Find the current article
  const currentArticle:any = articles.find(entry => entry?.fields?.articleUrl === params.url)

  if(currentArticle) {
    const articleFields = currentArticle?.fields ?? {}
    const articleUrl = articleFields.articleUrl ?? params.url
    const absoluteImageUrl = getContentfulAssetUrl(articleFields.articleMainImage);
    const description = getRichTextPlainText(articleFields.introductoryText).slice(0, 70)
  
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "name": `${articleFields.articleTitle}`,
      "url": `https://www.ausadventcare.com.au/blog/${articleUrl}`,
      "headline": "Blog articles, tips and news about NDIS support independent living",
      "description": description,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteImageUrl
      },
      "sameAs": [
        `https://www.ausadventcare.com.au/blog/${articleUrl}`
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
        },
        {
          '@type': 'ListItem',
          "position": 3,
          "name": articleFields.articleTitle,
          "item": `https://www.ausadventcare.com.au/blog/${articleUrl}`,
      },
      ]
    }
  
    return (
      <div>
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
        <Intro article={currentArticle} />
        <MainContent article={currentArticle} />
      </div>
    )
  } else {
    return (
      <NotFound />
    )
  }
}
