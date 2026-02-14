import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. ' +
      'Ensure CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are set.'
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});
