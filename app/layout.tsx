import localFont from '@next/font/local'
import { ThemeProvider } from 'next-themes'
import NavBar from '@component/components/navbar'
import './globals.css'
import Providers from '@component/components/providers'

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
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
