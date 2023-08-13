import './globals.css'
import Navbar from "@/app/components/Navbar"
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import("@/app/components/Footer"))



export const metadata = {
  title: 'Clinical Dietitian',
  description: 'Private practice by Tanelle Schutte',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="FtA9RgqRmhz_iXq28yU92M3fuNjF07Cx61cFQtEoBCo" />
      <body className="text-primary">
      <div className="flex flex-col justify-center items-center">
        <div className="w-4/5">
          <Navbar/>
        </div>
        <div className='w-full'>
          {children}
        </div>
        <div className="w-4/5">
          <Footer/>
        </div>
      </div>
        
        
      </body>
    </html>
  )
}
