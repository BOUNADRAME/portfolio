import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata = {
  title: 'Bouna Dramé — Ingénieur Logiciel Senior | Architecte Full Stack | Expert Recensement & SDMX',
  description: 'Portfolio de Bouna Dramé, Ingénieur Logiciel Senior spécialisé en systèmes statistiques, recensements (RGPH-5, EPC), architectures cloud-native et plateformes Open Data SDMX 3.0. Développeur PIGOR, SEDAS, expert recensement Sénégal, Guinée, Gambie.',
  keywords: 'Bouna Dramé, développeur, architecte logiciel, SDMX 3.0, statistiques, recensement, RGPH-5, RGPH, EPC, enquête post-censitaire, PIGOR, SEDAS, Open Data, Sénégal, ANSD, Guinée, Gambie, Maroc, Spring Boot, Next.js, microservices, census, statistical systems, consultant international',
  openGraph: {
    title: 'Bouna Dramé — Expert Recensement & Systèmes Statistiques SDMX',
    description: 'Architecte Full Stack | Expert Recensement RGPH-5 | Systèmes Statistiques SDMX 3.0 | Consultant International (Sénégal, Guinée, Gambie, Maroc)',
    type: 'website',
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
