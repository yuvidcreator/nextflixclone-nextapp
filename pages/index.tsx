import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen py-2">
        <h1>Hello Yuvraj</h1>
        
      </div>
    </main>
  )
}

export default Home
