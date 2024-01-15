import { createClient } from "contentful";


// contentful keys
const spaceKey:any =  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for Contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken
});

export async function fetchArticles() {
    // fetch data
    const res = await client.getEntries({ content_type: 'blog'})

    // Store the data in a variable
    const data = res.items

    return data
}