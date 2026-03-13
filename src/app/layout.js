import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata = {
  title: 'Bouna Dramé — Architecte Full Stack | Expert Systèmes Statistiques SDMX 3.0',
  description: '7+ ans d\'expérience en architecture de systèmes d\'information pour institutions publiques. Expert SDMX 3.0, recensements nationaux (18M+ habitants), et plateformes cloud-native. Consultant international (Sénégal, Guinée, Gambie, Maroc).',
  keywords: 'Bouna Dramé, développeur full stack, architecte logiciel, SDMX 3.0, systèmes statistiques, recensement, RGPH-5, PIGOR, SEDAS, Open Data, ANSD, Spring Boot, Next.js, microservices, census, consultant international, Dakar, Sénégal',
  authors: [{ name: 'Bouna Dramé' }],
  creator: 'Bouna Dramé',
  publisher: 'Bouna Dramé',
  icons: {
    icon: [
      { url: '/portfolio/icon.svg', type: 'image/svg+xml' },
      { url: '/portfolio/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/portfolio/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Bouna Dramé — Architecte Full Stack | Expert Systèmes Statistiques',
    description: '7+ ans d\'expérience | 10+ projets à impact national | Expert SDMX 3.0 & recensements | Consultant international',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    siteName: 'Portfolio Bouna Dramé',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bouna Dramé — Architecte Full Stack',
    description: 'Expert systèmes statistiques SDMX 3.0 | Consultant international',
  },
  verification: {
    google: 'your-google-verification-code', // À remplacer par votre code Google Search Console
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="grain">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
