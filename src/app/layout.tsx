import type { Metadata } from 'next'
import { Inter, Noto_Sans, Nunito_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ReactGA from 'react-ga4'

// Amplify config
import ConfigureAmplifyClientSide from './ConfigureAmplifyClientSide'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import LatestArticles from './components/LatestArticles'
import { GoogleAnalytics } from '@next/third-parties/google'


// Fonts
const inter = Inter({ subsets: ['latin'] })

const Noto = Nunito_Sans({ subsets: ['latin']})

const cormorant = Cormorant_Garamond({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-cormorant'
})

// Code for GA4
const trackingId:any = process.env.NEXT_PUBLIC_TRACKING_ID

if( trackingId !== undefined) {
  ReactGA.initialize(trackingId)
} else {
  console.error("Tracking ID is undefined")
}

ReactGA.send({ hitType: "pageview", page: "/" });

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Ausadvent Care",
    template: "%s - Ausadvent Care"
  },
  description: 'Registered care provider located in Queensland and Western Australia.',
  openGraph: {
    title: 'Ausadvent Care',
    description: 'Registered care provider located in Queensland and Western Australia. Our services under the NDIS scheme, including Supported Independent Living, Short Term Accommodation and Individual Living Options',
    url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png',
    type: 'website',
    images: [
      {
        url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${Noto.className} ${cormorant.variable}`}>
        <>
          <ConfigureAmplifyClientSide />
          <Header />
          {children}
          <LatestArticles />
          <Footer />
        </>
      </body>
      <GoogleAnalytics gaId={trackingId} />
    </html>
  )
}
