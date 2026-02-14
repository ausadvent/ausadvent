import { createClient } from 'contentful';

const spaceId =
  process.env.CONTENTFUL_SPACE_ID ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ?? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. ' +
      'Ensure CONTENTFUL_SPACE_ID/CONTENTFUL_ACCESS_TOKEN or ' +
      'NEXT_PUBLIC_CONTENTFUL_SPACE_ID/NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY are set.'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});
