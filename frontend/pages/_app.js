import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood</title>
        <link ref="icon" href="/favicon.icon"></link>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )

}

export default MyApp
