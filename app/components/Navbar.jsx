"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const NavPopUp = dynamic(() => import("./NavPopUp"))


const Navbar = () => {
    const [popUpStatus, setPopUpStatus] = useState(false)
    const handleClose = () =>{
        setPopUpStatus(false)
    }
    const navItems = [
        {
            name: "Health & Nutrition",
            href: "/#health-nutrition"
        },
        {
            name: "About Me",
            href: "/#about"
        },
        {
            name: "Book a consultation",
            href: "/#contact"
        },
    ]
    return ( 
        <div className="w-full flex flex-row justify-between items-center lg:gap-10 py-10">
            <Link href={'/'}>
            <Image
                src="/LogoClinical.webp" 
                width={250}
                height={150}
                alt="Logo"
                priority
            />
            </Link>
            
            
            <div className="flex flex-row gap-5 md:gap-10 w-7/10 justify-end">
                {
                    navItems.map((value, index) => {
                        return(
                            <a className="text-black font-semibold text-sm md:text-base hidden md:block" key={index}  href={value.href} scroll={false}>
                                { value.name }
                            </a>
                        )
                        
                    })
                }
                <div onClick={() => setPopUpStatus(true)}>
                    <svg className="w-7 flex md:hidden" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </div>
                {
                    popUpStatus && <NavPopUp navItems={navItems} handleClose={handleClose} />
                }

            </div>
        </div>
     );
}
 
export default Navbar;