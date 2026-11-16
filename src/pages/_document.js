import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </Head>
      <body>
      <Script strategy={'beforeInteractive'} src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></Script>
      <Main />
        <NextScript />
      </body>
    </Html>
  )
}
