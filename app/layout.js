import './globals.css'
import Navbar from "@/app/components/Navbar"
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import("@/app/components/Footer"))



export const metadata = {
  title: 'Clinical Dietitian in Swellendam',
  description: 'Private practice by Tanelle Schutte',
  alternates: {
    canonical: 'https://swellendamdietitian.com/'
  }
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="sDX29Hyxqh1otBeY5qZxATyCnxzhyHMzDbMRrBFhGe0" />
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
