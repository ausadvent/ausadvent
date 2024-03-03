
// Components
import Intro from './components/Intro'
import Services from './components/Services'
import Values from './components/Values'
import Independence from './components/Independence'
import Framework from './components/Framework'
import Support from './components/Support'
import Head from 'next/head'

export default function Home() {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ausadvent Care",
    "url": "https://www.ausadventcare.com.au",
    "description": "Registered care provider located in Queensland and Western Australia. Our services include Supported Independent Living, Short Term Accommodation and Individual Living Options.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png"
    },
    "sameAs": [
      "https://www.ausadventcare.com.au" // Add the canonical URL here
    ]
  }
  
  return (
    <main className="">
      <Head>
        <title>Ausadvent Care</title>
        <meta name="description" content="Registered care provider located in Queensland and Western Australia. Our services under the NDIS scheme, including Supported Independent Living, Short Term Accommodation and Individual Living Options" />
        <link rel="canonical" href="https://www.ausadventcare.com.au" />
      </Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)  }}
      />
      <Intro />
      <Services />
      <Values />
      <Independence />
      <Framework />
      <Support />
    </main>
  )
}
