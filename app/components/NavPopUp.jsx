import Link from "next/link";

const NavPopUp = ({navItems, handleClose}) => {
    return ( 
        <div className="w-full h-full absolute top-0 bottom-o left-0 right-0 bg-white z-50">
            <div onClick={handleClose}>
                <svg className="w-8 m-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
            
            <div className="flex flex-col gap-5 justify-center items-center">
            {
                    navItems.map((value, index) => {
                        return(
                            <Link onClick={handleClose} className="text-black font-bold text-lg md:text-base" key={index} href={value.href}>{ value.name }</Link>
                        )
                        
                    })
            }
            </div>
            
        </div>
     );
}
 
export default NavPopUp;