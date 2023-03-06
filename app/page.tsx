import Head from "next/head"
import type { NextPage } from "next"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evan Christopher</title>
        <meta name="description" content="Evan Christopher's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-red-600 text-4xl'>Evan Christopher</h1>
    </div>
  )
}
