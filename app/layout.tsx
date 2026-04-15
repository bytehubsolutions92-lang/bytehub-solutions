import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        <Navbar />

        {children}

        <Footer />
        {/* WhatsApp Button */}
  <a
    href="https://wa.me/27601452970?text=Hi%20I%20am%20interested%20in%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition flex items-center gap-2"
  >
    💬 <span className="hidden md:inline">Chat with us</span>
  </a>

      </body>
    </html>
  )
}