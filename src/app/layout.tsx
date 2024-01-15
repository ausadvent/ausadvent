import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const Noto = Noto_Sans({ subsets: ['latin']})
const cormorant = Cormorant_Garamond({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: {
    default: "Ausadvent",
    template: "%s - Ausadvent"
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Noto.className} ${cormorant.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
