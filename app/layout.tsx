import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import MobileCallBar from '@/components/mobile-call-bar'
import OrganizationSchema from '@/components/organization-schema'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.generatorrepairservices.co.za'),
  title: {
    default: 'Generator Repair Services Gauteng | Professional Generator Repairs & Servicing',
    template: '%s | Generator Repair Services',
  },
  description: 'Professional generator repair, servicing and maintenance across Gauteng. Emergency callouts available. Diesel, petrol and industrial generators. Call 060 316 0484.',
  keywords: ['generator repair', 'generator servicing', 'generator maintenance', 'Gauteng', 'Johannesburg', 'Pretoria', 'emergency generator repair'],
  authors: [{ name: 'Generator Repair Services' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.generatorrepairservices.co.za',
    siteName: 'Generator Repair Services',
    title: 'Generator Repair Services Gauteng',
    description: 'Professional generator repair, servicing and maintenance across Gauteng.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <MobileCallBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
