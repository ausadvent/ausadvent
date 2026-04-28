import 'server-only';
import { createClient } from 'contentful';

export function getContentfulClient() {
  const spaceId =
    process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken =
    process.env.CONTENTFUL_ACCESS_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

  if (!spaceId || !accessToken) {
    throw new Error(
      'Missing Contentful environment variables. ' +
      'Ensure CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are set.'
    );
  }

  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
}

export async function getContentfulEntries(contentType: string) {
  try {
    const contentfulClient = getContentfulClient();
    const res = await contentfulClient.getEntries({ content_type: contentType });

    return res.items;
  } catch (error) {
    console.error(`Unable to fetch Contentful entries for "${contentType}".`, error);

    if (process.env.NODE_ENV === 'production') {
      throw error;
    }

    return [];
  }
}

export function getContentfulAssetUrl(asset: any) {
  const url = asset?.fields?.file?.url;

  if (!url) {
    return '';
  }

  return url.startsWith('http') ? url : `https:${url}`;
}

export function getRichTextPlainText(document: any) {
  const values: string[] = [];

  function walk(node: any) {
    if (!node) {
      return;
    }

    if (typeof node.value === 'string') {
      values.push(node.value);
    }

    if (Array.isArray(node.content)) {
      node.content.forEach(walk);
    }
  }

  walk(document);

  return values.join(' ').trim();
}
