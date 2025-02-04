import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sansnom Tech Solutions - Transforming Ideas into Digital Reality</title>
        <meta name="description" content="We are a team of passionate developers crafting innovative solutions for your business needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
