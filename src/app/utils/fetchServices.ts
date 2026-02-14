import { contentfulClient } from "@/lib/contentful";

export async function fetchData() {
    // fetch data
    const res = await contentfulClient.getEntries({ content_type: 'services'})

    // Store the data in a variable
    const data = res.items

    return data
}
