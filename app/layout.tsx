import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import OrganizationSchema from '@/components/organization-schema'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const BASE_URL = 'https://www.generatorrepairservices.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Generator Repair Services Gauteng | Expert Repairs, Servicing & Maintenance',
    template: '%s | Generator Repair Services',
  },
  description:
    'Professional generator repair, servicing and maintenance across Gauteng. Same-day emergency callouts. All brands — diesel, petrol, industrial. Serving Johannesburg, Pretoria, Sandton & all Gauteng areas. Call 060 316 0484.',
  keywords: [
    'generator repair Gauteng',
    'generator repairs Johannesburg',
    'generator servicing Pretoria',
    'emergency generator repair Gauteng',
    'diesel generator repairs',
    'generator maintenance Gauteng',
    'generator installation Gauteng',
    'generator repair near me',
    'industrial generator repairs Gauteng',
    'generator repairs Sandton',
  ],
  authors: [{ name: 'Generator Repair Services', url: BASE_URL }],
  creator: 'Generator Repair Services',
  publisher: 'Generator Repair Services',

  // ── Favicons & icons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico' },
    ],
  },

  // ── Web app manifest ──────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'Generator Repair Services',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description:
      'Professional generator repair, servicing and maintenance across Gauteng. Same-day emergency callouts. All brands. Call 060 316 0484.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Generator Repair Services — Power When You Need It, Fixed Right, The First Time',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description:
      'Same-day emergency callouts. All brands. Diesel & petrol generators. Serving all of Gauteng. Call 060 316 0484.',
    images: ['/og-image.jpg'],
  },

  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Misc ──────────────────────────────────────────────────────────
  category: 'Generator Repair Services',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1a1a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <OrganizationSchema />
        {/* MS Tile */}
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="msapplication-config" content="none" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
