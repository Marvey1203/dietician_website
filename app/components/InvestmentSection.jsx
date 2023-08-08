import Image from "next/image";

const InvestmentSection = () => {
    return ( 
        <div className="w-full relative pt-14 md:pt-28">
            <Image
                src={"/Investment.webp"}
                width={1920}
                height={934}
                alt="Grean healthy background image with lemons and leaves"
            />
           
            
                <div className="bg-newGreen justify-center items-center md:px-16 md:py-20  w-fit flex absolute mx-auto my-0 top-0 px-7 left-0 right-0 py-8 lg:px-44 lg:py-40 rounded-2xl">
                    <h3 className="text-white font-semibold text-[20px] md:text-5xl md:leading-[4rem] leading-[3rem] lg:text-6xl lg:leading-[6rem] text-center">
                        “Your health is an <br/>
                        <span className="tracking-[.35em]">INVESTMENT</span> <br/>
                        not an expense.”
                    </h3>
                </div>
            
            
        </div>
     );
}
 
export default InvestmentSection;