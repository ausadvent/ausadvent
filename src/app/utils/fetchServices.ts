import { getContentfulClient } from "@/lib/contentful";

export async function fetchData() {
    try {
        const contentfulClient = getContentfulClient();
        const res = await contentfulClient.getEntries({ content_type: 'services'})

        return res.items
    } catch (error) {
        console.warn("Unable to fetch Contentful services.", error);

        return []
    }
}
