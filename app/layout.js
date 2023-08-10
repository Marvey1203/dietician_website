import './globals.css'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"



export const metadata = {
  title: 'Clinical Dietitian',
  description: 'Private practice by Tanelle Schutte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
