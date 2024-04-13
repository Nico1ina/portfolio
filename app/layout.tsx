import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolina Larsson - Front End Developer',
  description: 'Online Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#f5f3ef]'>
        <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
        <main className='flex-grow'>{children}</main>
      </body>
    </html>
  )
}
