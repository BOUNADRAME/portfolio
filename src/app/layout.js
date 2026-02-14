import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata = {
  title: 'Bouna Dramé — Ingénieur Logiciel Senior | Architecte Full Stack',
  description: 'Portfolio de Bouna Dramé, Ingénieur Logiciel Senior spécialisé en systèmes statistiques, architectures cloud-native et plateformes Open Data. Expert SDMX 3.0.',
  keywords: 'Bouna Dramé, développeur, architecte logiciel, SDMX, statistiques, Sénégal, ANSD, Spring Boot, Next.js',
  openGraph: {
    title: 'Bouna Dramé — Ingénieur Logiciel Senior',
    description: 'Architecte Full Stack | Expert Systèmes Statistiques | Consultant International',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="grain">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
