import './globals.css'

import type { Metadata } from 'next'
import { Inter, Oswald, Roboto_Mono, Major_Mono_Display, } from 'next/font/google'

import CustomCursor from '@/components/Cursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MW | Mahat Works',
  description: 'Discover your web development potential with Mahat Works',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-charcoal `}>
        {children}
        <CustomCursor />
      </body>
    </html >
  )
}
