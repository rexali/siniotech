import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="we help home businesses, small & medium businesses and companies who are not online solve the problem of online or digital absence issue, so they stop worrying and focus on other aspects of their business operations, reach more potential customers or clients, and increase sales, revenue and profit." />
        <meta name="keywords" content="web developer, web development consultant, web development service, front-end web developer, back-end web developer, full stack web devloper, mobile web developer" />
        <meta name="author" content="Mujaware" />
        {/* <meta httpEquiv="refresh" content="30" /> */}
        <title>Digital Marketing, Sales, Advertising, Web Developer, Mobile App Developer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="icon" type="image/png" href="/images/siniotech.png" />
      </head>
      <body className={inter.className}>
        {children}
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" async></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" async></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" async></script>
      </body>
    </html>
  )
}
