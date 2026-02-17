import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ReactGA from 'react-ga4'

// Components
import ConfigureAmplifyClientSide from './ConfigureAmplifyClientSide'
import Header from './components/Header'
import Footer from './components/Footer'
import LatestArticles from './components/LatestArticles'
import Metrics from './metrics'

// Fonts - Simplified font imports and removed unused ones
const Noto = Nunito_Sans({ subsets: ['latin']})
const cormorant = Cormorant_Garamond({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-cormorant'
})

// Initialize GA page view
ReactGA.send({ hitType: "pageview", page: "/" });

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ausadventcare.com.au'), // Added metadataBase for resolving social images

  title: {
    default: "Ausadvent Care",
    template: "%s - Ausadvent Care"
  },
  description: 'Registered care provider located in Queensland and Western Australia.',
  
  // Updated alternates with proper URL structure
  alternates: {
    canonical: 'https://www.ausadventcare.com.au'
  },

  icons: {
    icon: '/favicon.ico',
  },

  // Updated OpenGraph with proper URL structure and additional properties
  openGraph: {
    title: 'Ausadvent Care',
    description: 'Registered care provider located in Queensland and Western Australia. Our services under the NDIS scheme, including Supported Independent Living, Short Term Accommodation and Individual Living Options',
    url: 'https://www.ausadventcare.com.au', // Updated to use website URL instead of image URL
    siteName: 'Ausadvent Care', // Added site name
    locale: 'en_AU', // Added locale
    type: 'website',
    images: [{
      url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png',
      width: 1200, // Added recommended dimensions
      height: 630,
      alt: 'Ausadvent Care Logo' // Added alt text for accessibility
    }]
  },

  // Enhanced Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Ausadvent Care', // Added title
    description: 'Registered care provider located in Queensland and Western Australia.',
    images: ['https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Noto.className} ${cormorant.variable}`}>
        <ConfigureAmplifyClientSide />
        <Header />
        <main>{children}</main> {/* Added semantic main tag */}
        <LatestArticles />
        <Footer />
      </body>
      <Metrics />
    </html>
  )
}