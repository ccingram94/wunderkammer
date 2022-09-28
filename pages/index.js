import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Der Wunderkammer: Oddities and Curiosities</title>
        <meta name="description" content="Der Wunderkammer: Oddities and Curiosities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
