// 'use client'

import React, { useEffect, useState } from 'react'
import Intro from './Intro'
import ArticlesList from './ArticlesList'
import { fetchArticles } from '../utils/fetchArticles'



export default async function Blog() {
    // const [articles, setArticles] = useState<any>()
    // const [isFetching, setIsFetching] = useState(true);

    // useEffect(() => {
    //     async function fetchingData() {
    //         try {
    //             const res:any = await fetchArticles()
    //             setArticles(res)
    //         } catch(error) {
    //             console.error("Error fetching articles: ", error)
    //         } finally {
    //             setIsFetching(false)
    //         }
    //     }
    //     fetchingData()
    // }, [])

    // console.log('from page', articles)
  

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
