import { getContentfulEntries } from "@/lib/contentful";

export async function fetchArticles() {
    return getContentfulEntries('blog')
}
