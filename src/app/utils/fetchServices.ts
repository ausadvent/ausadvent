import { getContentfulEntries } from "@/lib/contentful";

export async function fetchData() {
    return getContentfulEntries('services')
}
