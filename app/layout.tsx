import localFont from '@next/font/local'
import Head from "next/head"
import NavBar from '@component/components/navbar'
import './globals.css'
import Providers from '@component/components/providers'
import PageWrapper from '@component/components/pageWrapper'

export const metadata = {
  title: 'Evan Christopher',
  description: "Evan's personal website",
}

const workSans = localFont({
  src: [
    {
      path: '../public/fonts/WorkSans-Thin.ttf',
      weight: '100',
    },
    {
      path: '../public/fonts/WorkSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/WorkSans-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/WorkSans-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-work-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} font-sans`}>
      <Head>
        <title>Evan Christopher</title>
        <meta name="description" content="Evan Christopher's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Providers>
          <NavBar />
          <PageWrapper>
            {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  )
}
