const InvestmentSection = () => {
    return ( 
        <div className="w-full relative pt-28">
            <img className="w-full h-full" src="/healthsection.svg" alt="Grean healthy background image with lemons and leaves" />
            
                <div className="bg-newGreen justify-center items-center md:px-16 md:py-20  w-fit flex absolute mx-auto my-0 top-0 px-8 left-0 right-0 py-10 lg:px-44 lg:py-40 rounded-2xl">
                    <h3 className="text-white font-semibold text-2xl md:text-5xl md:leading-[4rem] leading-[3rem] lg:text-6xl lg:leading-[6rem] text-center">
                        “Your health is an <br/>
                        <span className="tracking-[.35em]">INVESTMENT</span> <br/>
                        not an expense.”
                    </h3>
                </div>
            
            
        </div>
     );
}
 
export default InvestmentSection;