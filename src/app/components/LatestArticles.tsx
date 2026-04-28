import { fetchArticles } from '../utils/fetchArticles'
import LatestArticlesClient from './LatestArticlesClient'

export default async function LatestArticles() {
  const articles = await fetchArticles()
  return <LatestArticlesClient articles={articles ?? []} />
}
