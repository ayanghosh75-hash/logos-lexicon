import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LexiconProvider } from '@/components/providers/LexiconProvider';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { UpdateBanner } from '@/components/pwa/UpdateBanner';
import { LexiGuide } from '@/components/lexi/LexiGuide';
import { UserGuideModal } from '@/components/guide/UserGuideModal';
import { GeoVernacularDetector } from '@/components/geo/GeoVernacularDetector';

export const metadata: Metadata = {
  metadataBase: new URL('https://logos-lexicon-app.vercel.app'),
  title: {
    default: 'Logos Lexicon — Multilingual Biblical & Theological Dictionary',
    template: '%s | Logos Lexicon',
  },
  description:
    'Explore biblical and theological terms across 21 languages (English, Bengali, Hindi, Urdu, Arabic, Persian, Filipino, Japanese, Chinese, and more) with Greek & Hebrew studies, 66 Books Scripture Explorer, and Sermon Studio on any device worldwide.',
  applicationName: 'Logos Lexicon',
  authors: [{ name: 'Ayan Kumar Ghosh', url: 'https://logos-lexicon-app.vercel.app/about' }],
  creator: 'Ayan Kumar Ghosh',
  publisher: 'Ayan Kumar Ghosh — Logos Lexicon Theological Editorial Board',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://logos-lexicon-app.vercel.app/',
  },
  openGraph: {
    title: 'Logos Lexicon — Multilingual Biblical & Theological Dictionary',
    description:
      'Explore biblical and theological terms across 21 languages (English, Bengali, Hindi, Urdu, Arabic, Persian, Filipino, Japanese, Chinese, and more) with Greek & Hebrew studies, 66 Books Scripture Explorer, and Sermon Studio on any device worldwide.',
    url: 'https://logos-lexicon-app.vercel.app/',
    siteName: 'Logos Lexicon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://logos-lexicon-app.vercel.app/og-image.png',
        secureUrl: 'https://logos-lexicon-app.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logos Lexicon — Multilingual Biblical & Theological Dictionary',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logos Lexicon — Multilingual Biblical & Theological Dictionary',
    description:
      'Explore biblical and theological terms across 21 languages (English, Bengali, Hindi, Urdu, Arabic, Persian, Filipino, Japanese, Chinese, and more) with Greek & Hebrew studies, 66 Books Scripture Explorer, and Sermon Studio on any device worldwide.',
    images: ['https://logos-lexicon-app.vercel.app/og-image.png'],
    creator: '@LogosLexicon',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B192C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent Flash of Unstyled Content (FOUC) for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('logos_theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* Preconnect to Google Fonts for Noto typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Sans+Arabic:wght@400;600;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Hebrew:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+Greek:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-3020259399527859" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3020259399527859"
          crossOrigin="anonymous"
        />

        {/* Social Media Link Preview / Open Graph */}
        <meta property="og:site_name" content="Logos Lexicon" />
        <meta property="og:title" content="Logos Lexicon — Multilingual Biblical & Theological Dictionary" />
        <meta property="og:description" content="Explore biblical and theological terms across 21 languages with Greek & Hebrew studies, 66 Books Scripture Explorer, and Sermon Studio on any device worldwide." />
        <meta property="og:image" content="https://logos-lexicon-app.vercel.app/og-image.png" />
        <meta property="og:image:secure_url" content="https://logos-lexicon-app.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://logos-lexicon-app.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logos Lexicon — Multilingual Biblical & Theological Dictionary" />
        <meta name="twitter:description" content="Explore biblical and theological terms across 21 languages with Greek & Hebrew studies, 66 Books Scripture Explorer, and Sermon Studio on any device worldwide." />
        {/* PWA Security & Clean Installation Verification */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Logos Lexicon" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="bg-ivory-100 dark:bg-navy-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors selection:bg-gold-400 selection:text-navy-950">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LexiconProvider>
          <GeoVernacularDetector />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <UpdateBanner />
          <LexiGuide />
          <UserGuideModal />
        </LexiconProvider>
      </body>
    </html>
  );
}
