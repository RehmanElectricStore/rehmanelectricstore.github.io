import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
