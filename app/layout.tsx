import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Mukta } from 'next/font/google'
import './globals.css'

const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mukta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'मेजवानी — घरच्या जेवणाची गोष्ट | Home-style Tiffin Service in Pune',
  description:
    'मेजवानी — Pune मधील घरगुती tiffin आणि mess service. दररोज ताजं, घरगुती आणि पोटभर जेवण. Monthly mess ₹1,999 पासून, single tiffin ₹89. WhatsApp वर order करा.',
  keywords: ['मेजवानी', 'tiffin service Pune', 'mess Pune', 'home food Pune', 'monthly mess', 'डबा', 'घरगुती जेवण'],
  applicationName: 'मेजवानी',
  openGraph: {
    title: 'मेजवानी — घरच्या जेवणाची गोष्ट',
    description: 'Pune मधील घरगुती tiffin आणि monthly mess service.',
    siteName: 'मेजवानी',
    images: ['/images/tiffin-hero.png'],
    locale: 'mr_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mr" className={`${mukta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
