import type { Metadata } from 'next'
import { Inter, Noto_Sans, Nunito_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LatestArticles from './components/LatestArticles'

// Amplify config
import ConfigureAmplifyClientSide from './ConfigureAmplifyClientSide'

const inter = Inter({ subsets: ['latin'] })

const Noto = Nunito_Sans({ subsets: ['latin']})

const cormorant = Cormorant_Garamond({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-cormorant'
})


export const metadata: Metadata = {
  title: {
    default: "Ausadvent Care",
    template: "%s - Ausadvent Care"
  },
  description: 'Registered care provider located in Queensland and Western Australia.',
  openGraph: {
    title: 'Ausadvent Care',
    description: 'Registered care provider located in Queensland and Western Australia. Our services under the NDIS scheme, including Supported Independent Living, Short Term Accommodation and Individual Living Options',
    url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgXg9%2BtEZcLoy6fdTAb0z07jSCXGwavyBkaKeevGzAUsYCIQD7Xyh6bd9BTG09WBml4NKLUnc97DjOLR0JKhtYKZxhISrtAgjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDIxNjk5NDkzMzMyMSIMX%2FpltUwocQ0h3Fg%2BKsEC%2FZJyg9w3WRdkS7n0hKF3r7TK1MaeCdO7gzrLYpIauOe0ZjmzW8i6h58uLtIvahDCh6e%2F8nVvFarBK4Bzw89jTY28mM4s%2F07cWcte46jcHZyem0CmSWYso7zWoPBzCdF0B9brFaCy%2FKpp5fA5Oip3dCT9FllYv%2BDYNri8E2SdYy2CXqnALolA2pSOtZY1Rm2HgCiEIxdTfzsXaCweJ5gBQbkOLt%2FjKVMK8tGrT%2BS%2BJZN%2Fl7Rm4HZAXPOhpN6VhLJxpx3E8hJdmq8RQbeZMGSK1Qqexv64zppvZtydNZSGk5lbGRLLY6bUoWQ3T17EgjnzW1bdyyPT43jjVruanPchV7AYbFobMPEz%2FtHIWPYWtCp8idpq5OMRkBdtX7kH04EyOooMM2WoZEKVnXEG9ytbMv%2FyJ8OP%2Be3UA9RUyuOaQR04MI26wK4GOrMCT5qlxKHDeacSrtc9lhGglfHtS%2FxFHkvg8w5V2GnyfnN3e7ugxyjgn8SbZW%2FUTNiPudNgNQSH9D3h7nct0aj%2F20nS87uo2OrNfB09HS0JNZj8Akw%2BTchU5vsqC42mTRGM0j5TQZ5Rteyom4m4iogTh8tXZLwdEShFvCzWIedk2n0XKVmpfj0pj%2FA%2BKrkpUhaP3Hgv8IY8ZiveeFxmSOXtPZA9VFi%2B8KCYycw1A5wQ7LkaY8ybzDx3mb2QduKpL6bRReKoXlhdzq80W%2FzH3StuQlQtJVU9Kwl2sH8%2B5Pxye2nJk9H1ID5s7C5wdx1yXd62NLvh0rH2O6C%2BUn4gMoqiZUPDC0BEC4it8oGxfmWFjVEyjQn4GaE8ywMnguaUnZKf2Sv0wx2kuhTSOBOOKVPoJbgJyQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240217T024250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIATFBPH5JE522DJI7S%2F20240217%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=ef6cfe1df4a6ec3aac24ec4963a02591ad4e05e54cdb80f64d957913cba67d97',
    type: 'website',
    images: [
      {
        url: 'https://ausadvent-logo.s3.ap-southeast-2.amazonaws.com/logo-vertical.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgXg9%2BtEZcLoy6fdTAb0z07jSCXGwavyBkaKeevGzAUsYCIQD7Xyh6bd9BTG09WBml4NKLUnc97DjOLR0JKhtYKZxhISrtAgjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDIxNjk5NDkzMzMyMSIMX%2FpltUwocQ0h3Fg%2BKsEC%2FZJyg9w3WRdkS7n0hKF3r7TK1MaeCdO7gzrLYpIauOe0ZjmzW8i6h58uLtIvahDCh6e%2F8nVvFarBK4Bzw89jTY28mM4s%2F07cWcte46jcHZyem0CmSWYso7zWoPBzCdF0B9brFaCy%2FKpp5fA5Oip3dCT9FllYv%2BDYNri8E2SdYy2CXqnALolA2pSOtZY1Rm2HgCiEIxdTfzsXaCweJ5gBQbkOLt%2FjKVMK8tGrT%2BS%2BJZN%2Fl7Rm4HZAXPOhpN6VhLJxpx3E8hJdmq8RQbeZMGSK1Qqexv64zppvZtydNZSGk5lbGRLLY6bUoWQ3T17EgjnzW1bdyyPT43jjVruanPchV7AYbFobMPEz%2FtHIWPYWtCp8idpq5OMRkBdtX7kH04EyOooMM2WoZEKVnXEG9ytbMv%2FyJ8OP%2Be3UA9RUyuOaQR04MI26wK4GOrMCT5qlxKHDeacSrtc9lhGglfHtS%2FxFHkvg8w5V2GnyfnN3e7ugxyjgn8SbZW%2FUTNiPudNgNQSH9D3h7nct0aj%2F20nS87uo2OrNfB09HS0JNZj8Akw%2BTchU5vsqC42mTRGM0j5TQZ5Rteyom4m4iogTh8tXZLwdEShFvCzWIedk2n0XKVmpfj0pj%2FA%2BKrkpUhaP3Hgv8IY8ZiveeFxmSOXtPZA9VFi%2B8KCYycw1A5wQ7LkaY8ybzDx3mb2QduKpL6bRReKoXlhdzq80W%2FzH3StuQlQtJVU9Kwl2sH8%2B5Pxye2nJk9H1ID5s7C5wdx1yXd62NLvh0rH2O6C%2BUn4gMoqiZUPDC0BEC4it8oGxfmWFjVEyjQn4GaE8ywMnguaUnZKf2Sv0wx2kuhTSOBOOKVPoJbgJyQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240217T024250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIATFBPH5JE522DJI7S%2F20240217%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=ef6cfe1df4a6ec3aac24ec4963a02591ad4e05e54cdb80f64d957913cba67d97'
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
    </html>
  )
}
