import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="apple-touch-icon" href="/title.png" />
      <link rel="shortcut icon" href="/title.png" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client-ca-pub-8621991861517322" crossOrigin='anonymous'></Script>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
