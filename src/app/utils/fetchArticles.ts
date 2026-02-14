import { contentfulClient } from "@/lib/contentful";

export async function fetchArticles() {
    // fetch data
    const res = await contentfulClient.getEntries({ content_type: 'blog'})

    // Store the data in a variable
    const data = res.items

    return data
}
