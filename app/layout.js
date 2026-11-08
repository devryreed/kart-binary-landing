import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: 'Kart Binary — Binary Options Trading',
  description: 'Kart Binary is a high-performance binary options trading platform with real-time market data, instant payouts and bank-grade security. Built for serious traders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="bg-[#080405] text-white antialiased" style={{fontFamily:'var(--font-inter), system-ui, sans-serif'}}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
