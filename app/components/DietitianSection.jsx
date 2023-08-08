import Image from "next/image";
import ButtonsConsoltation from "./ButtonConsoltation";

const DietitianSection = () => {
    return ( 
        <div className="w-full flex flex-col justify- items-center">
            <div className="w-full">
                <Image
                    src={"/foodBowls.webp"}
                    width={1920}
                    height={443}
                    alt="Images of healthy food"
                />
            </div>
            <div className="w-3/4 py-10 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4 ">
                    <h3 className="font-semibold font-primary text-[25px] md:text-5xl lg:text-6xl w-full lg:w-[70%]">WHY IS IT IMPORTANT TO SEE A REGISTERED DIETITIAN?</h3>
                    <div className="flex flex-row gap-2 justify-start items-start ">
                        <img className="md:w-[8.3rem] md:h-[8.3rem] w-[5rem] h-[5rem]" src="/heartIcon.png" alt="Icon of a green heart" />
                        <img className="md:w-[8rem] md:h-[8rem] w-[5rem] h-[5rem]" src="/apple.png" alt="Icon of a golden apple" />
                    </div>
                    
                    
                </div>
                <p className="md:text-xl text-[15px] font-primary">
                Nutritional information can be overwhelming to the public. People are often confused by conflicting and outdated research and information. A qualified dietitian is an expert in the field of nutrition and can assist you with individual science-based guidelines to improve your health and wellbeing. 
                </p>
                <p className="md:text-xl text-[15px] font-primary">
                    Follow-up visits are very important to keep ypu accountable and plays a crucial role in ensuring success with weight loss.
                </p>
                <div className="w-full flex justify-start py-5">
                    <ButtonsConsoltation/>
                </div>
                
            </div>
        </div>
     );
}
 
export default DietitianSection;