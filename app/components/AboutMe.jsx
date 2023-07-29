const AboutMe = () => {
    return ( 
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 ">
                <div className="flex flex-row gap-1 justify-center items-center py-5">
                    <div className="w-full h-[2px] bg-black"></div>
                    <h2 className="text-4xl font-bold w-full text-center uppercase">About Me</h2>
                    <div className="w-full h-[2px] bg-black"></div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-[40%]">
                        <img src="/tanelle.png" alt="Image of Tanelle Schutte" />
                    </div>
                    <div className="w-[60%] flex flex-col justify-center items-end gap-5 pl-8">
                        <h4 className="font-semibold text-6xl">Tanelle Schutte</h4>
                        <h5 className="font-bold text-xl">RD (SA) BSC MED HONS, CLIN DIET (US)</h5>
                        <p className="text-strech text-lg">
                            I qualified at the University of Stellenbosch in 1999. After 3 years of student training and lecturing, I started to work at Grootte Schuur Hospital where I was promoted to Principal Dietitian. At this state hospital, I gained valuable experience in critical care, trauma, surgery, cancer treatment, eating disorders and internal medicine. After starting a family, I resigned at the hospital and started to locum at Vergelegen Nutrition Centre, where my focus was on the nutritional management of renal patients, athletes (being an athlete myself) and disordered eating. 
                        </p>
                    </div>
                </div>
            
            </div>
        </div>

        
     );
}
 
export default AboutMe;