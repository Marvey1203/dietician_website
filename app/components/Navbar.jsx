import Link from "next/link";

const Navbar = () => {
    const navItems = [
        {
            name: "Health & Nutrition",
            href: "/#health-nutrition"
        },
        {
            name: "About Me",
            href: "/#"
        },
        {
            name: "Book a consultation",
            href: "/#"
        },
    ]
    return ( 
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 py-10">
            <img className="h-14" src="/LogoClinical.svg" alt="Tanelle Schutte, Clinical Dietitian logo" />
            <div className="flex flex-row gap-5 md:gap-10 w-7/10 justify-end">
                {
                    navItems.map((value, index) => {
                        return(
                            <Link className="text-black font-bold text-sm md:text-base" key={index} href={value.href}>{ value.name }</Link>
                        )
                        
                    })
                }

            </div>
        </div>
     );
}
 
export default Navbar;