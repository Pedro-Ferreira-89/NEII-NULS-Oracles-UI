import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Nuls Oracles</title>
          <meta name="description" content="Nuls Oracle Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/nlsorc.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
              rel="stylesheet"/>

        </Head>
        <Component {...pageProps} />
      </>
      );
}
