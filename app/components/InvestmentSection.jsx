const InvestmentSection = () => {
    return ( 
        <div className="w-full relative pt-28">
            <img className="w-full" src="/healthsection.svg" alt="Grean healthy background image with lemons and leaves" />
            
                <div className="bg-newGreen w-fit absolute mx-auto my-0 top-0 left-0 right-0 px-44 py-40 rounded-2xl">
                    <h3 className="text-white font-semibold text-6xl leading-[6rem] text-center">
                        “Your health is an <br/>
                        <span className="tracking-[.35em]">INVESTMENT</span> <br/>
                        not an expense.”
                    </h3>
                </div>
            
            
        </div>
     );
}
 
export default InvestmentSection;