const InvestmentSection = () => {
    return ( 
        <div className="w-full md:relative md:pt-28">
            <img className="w-full h-full md:flex hidden" src="/healthsection.svg" alt="Grean healthy background image with lemons and leaves" />
            
                <div className="bg-newGreen w-full justify-center items-center py-10 md:w-fit flex md:absolute md:mx-auto md:my-0 md:top-0 md:left-0 md:right-0 md:px-32 md:py-28 lg:px-44 lg:py-40 rounded-2xl">
                    <h3 className="text-white font-semibold text-3xl md:text-4xl md:leading-[4rem] leading-[3rem] lg:text-6xl lg:leading-[6rem] text-center">
                        “Your health is an <br/>
                        <span className="tracking-[.35em]">INVESTMENT</span> <br/>
                        not an expense.”
                    </h3>
                </div>
            
            
        </div>
     );
}
 
export default InvestmentSection;