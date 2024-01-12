import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

const Noto = Noto_Sans({ subsets: ['latin']})

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
      <body className={Noto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
