import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Mukta, Tiro_Devanagari_Marathi } from 'next/font/google'
import './globals.css'

const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mukta',
  display: 'swap',
})

const tiro = Tiro_Devanagari_Marathi({
  subsets: ['devanagari', 'latin'],
  weight: '400',
  variable: '--font-tiro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'भूक संघटना — घरच्या जेवणाची गोष्ट | Home-style Tiffin Service in Pune',
  description:
    'Pune मधील घरगुती tiffin आणि mess service. दररोज ताजं, घरगुती आणि पोटभर जेवण — Monthly mess ₹1,999 पासून, single tiffin ₹89. WhatsApp वर order करा.',
  keywords: ['tiffin service Pune', 'mess Pune', 'home food Pune', 'monthly mess', 'डबा', 'घरगुती जेवण'],
  openGraph: {
    title: 'भूक संघटना — घरच्या जेवणाची गोष्ट',
    description: 'Pune मधील घरगुती tiffin आणि monthly mess service.',
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
  themeColor: '#f8f3e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mr" className={`${mukta.variable} ${tiro.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
