'use client'

import React, { useEffect, useState } from 'react'

import { fetchArticles } from '../utils/fetchArticles'

export default function LatestArticles() {
    const [articles, setArticles] = useState<any>()
    useEffect(() => {
        async function fetchingData() {
        const res:any = await fetchArticles()
        setArticles(res)
        }
        fetchingData()
    }, [])
    console.log('hey',articles)

    // Store the 3 latest articles in a variable
    const recentArticles = articles?.slice(0,3)

    const [currentArticle, setCurrentArticle] = useState(0)

    // Go to next article automatically after 5 seconds
    const nextArticle = setTimeout(() => {
        currentArticle < recentArticles?.length - 1 ? setCurrentArticle(currentArticle + 1) : setCurrentArticle(0)
    }, 5000)
  
    return (
        <div>
            <div className='py-[3rem]'>
                <h2 className='cormorant text-[1.5rem] font-bold text-center'>LATEST ARTICLES</h2>
                <p>{articles[currentArticle]?.fields.articleTitle}</p>
            </div>
        </div>
    )
}
