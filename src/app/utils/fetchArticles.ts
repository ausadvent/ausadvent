import { getContentfulClient } from "@/lib/contentful";

export async function fetchArticles() {
    try {
        const contentfulClient = getContentfulClient();
        const res = await contentfulClient.getEntries({ content_type: 'blog'})

        return res.items
    } catch (error) {
        console.warn("Unable to fetch Contentful articles.", error);

        return []
    }
}
