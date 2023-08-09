import Image from "next/image";

const Hero = () => {
    return ( 
        <section className="relative ">
            <Image
                src={"/BgHero.webp"}
                
                priority
                fill={true}
                objectFit="cover"
                
            />
            
            <div className="w-3/4 h-full pb-[358px] pt-44 mx-auto">
                <div className="absolute">
                    <h2 className="w-fit font-bold text-[50px] text-white uppercase  pb-10 md:pl-10 md:text-[60px]">
                        Eat Better
                        <br></br>
                        Live Better
                    </h2>
                </div>
                

            </div>
            
            

        </section>
     );
}
 
export default Hero;