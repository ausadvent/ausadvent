import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

async function getArticleEntries(): Promise<MetadataRoute.Sitemap> {
    try {
        const { fetchArticles } = await import("./utils/fetchArticles");
        const articles = await fetchArticles();

        return articles.map((article) => ({
            url: `https://www.ausadventcare.com.au/blog/${article.fields.articleUrl}`
        }));
    } catch (error) {
        console.warn("Unable to fetch articles for sitemap.", error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articlesEntries = await getArticleEntries();

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
