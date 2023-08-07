import ButtonsConsoltation from "./ButtonConsoltation";

const DietitianSection = () => {
    return ( 
        <div className="w-full flex flex-col justify- items-center">
            <div className="w-full">
                <img className="w-full" src="/bowlimg.svg" alt="Images of healthy food" />
            </div>
            <div className="w-3/4 py-10 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4 ">
                    <h3 className="font-semibold text-4xl md:text-5xl lg:text-6xl w-full lg:w-[70%]">WHY IS IT IMPORTANT TO SEE A REGISTERED DIETITIAN?</h3>
                    <div className="flex flex-row gap-2 justify-start items-start ">
                        <img className="w-[8.3rem] h-[8.3rem]" src="/heartIcon.png" alt="Icon of a green heart" />
                        <img className="w-[8rem] h-[8rem]" src="/apple.png" alt="Icon of a golden apple" />
                    </div>
                    
                    
                </div>
                <p className="text-xl">
                Nutritional information can be overwhelming to the public. People are often confused by conflicting and outdated research and information. A qualified dietitian is an expert in the field of nutrition and can assist you with individual science-based guidelines to improve your health and wellbeing. 
                </p>
                <p className="text-xl">
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