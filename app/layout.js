import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Convergence Research Foundation | CRF',
  description:
    'A prestigious institute dedicated to the intersection of rigorous academic inquiry, creative expression, and revolutionary technological advancement.',
  openGraph: {
    title: 'Convergence Research Foundation | CRF',
    description:
      'A prestigious institute dedicated to the intersection of rigorous academic inquiry, creative expression, and revolutionary technological advancement.',
    url: 'https://www.convergenceresearchfoundation.com',
    siteName: 'Convergence Research Foundation',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Convergence Research Foundation | CRF',
    description:
      'A prestigious institute dedicated to the intersection of rigorous academic inquiry, creative expression, and revolutionary technological advancement.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface text-on-surface font-body leading-relaxed">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
