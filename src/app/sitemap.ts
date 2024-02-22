import { MetadataRoute } from "next";

// Utils
import { fetchArticles } from "./utils/fetchArticles";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
    // Fetch blog articles
    const articles = await fetchArticles()

    const articlesEntries: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `https://www.ausadventcare.com.au/blog/${article.fields.articleUrl}`
    }))

    return [
        {
            url: 'https://www.ausadventcare.com.au/',
            priority: 1
        },
        {
            url: 'https://www.ausadventcare.com.au/about',
            priority: 0.5
        },
        {
            url: 'https://www.ausadventcare.com.au/services',
            priority: 0.8
        },
        {
            url: 'https://www.ausadventcare.com.au/ndis',
            priority: 0.5
        },
        {
            url: 'https://www.ausadventcare.com.au/locations',
            priority: 0.8
        },
        {
            url: 'https://www.ausadventcare.com.au/blog',
            priority: 0.8
        },
        ...articlesEntries
    ]
}