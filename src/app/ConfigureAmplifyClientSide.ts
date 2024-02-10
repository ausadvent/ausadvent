'use client'

import { Amplify } from "aws-amplify"
import config from '@/amplifyconfiguration.json'

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}

// api keys
const apiKey:string|undefined =  process.env.NEXT_PUBLIC_API_KEY;


Amplify.configure(config, {
    API: {
      REST: {
        headers: async () => {
          return { 'X-Api-Key': apiKey || '' };
        }
      }
    }
});