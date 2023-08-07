const AboutMe = () => {
    return ( 
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 ">
                <div className="flex flex-col md:flex-row md:gap-1 gap-4 justify-center items-center py-10">
                    <div className="w-full h-[2px] bg-black"></div>
                    <h2 className="text-4xl font-bold w-full text-center uppercase">About Me</h2>
                    <div className="w-full h-[2px] bg-black"></div>
                </div>
                <div className="w-full flex lg:flex-row flex-col">
                    <div className="lg:w-[40%] w-full">
                        <img src="/tanelle.png" alt="Image of Tanelle Schutte" />
                    </div>
                    <div className="lg:w-[60%] w-full flex flex-col md:justify-end md:items-end justify-start items-start gap-5 lg:pl-8 pt-10">
                        <h4 className="font-semibold md:text-6xl text-[35px]">Tanelle Schutte</h4>
                        <h5 className="font-bold md:text-xl text-[14px]">RD (SA) BSC MED HONS, CLIN DIET (US)</h5>
                        <p className="md:text-justify  text-[13px] md:text-xl md:tracking-[0.25em] font-primary">
                            I qualified at the University of Stellenbosch in 1999. After 3 years of student training and lecturing, I started to work at Grootte Schuur Hospital where I was promoted to Principal Dietitian. At this state hospital, I gained valuable experience in critical care, trauma, surgery, cancer treatment, eating disorders and internal medicine. After starting a family, I resigned at the hospital and started to locum at Vergelegen Nutrition Centre, where my focus was on the nutritional management of renal patients, athletes (being an athlete myself) and disordered eating. 
                        </p>
                    </div>
                </div>
                <p className="md:text-justify  text-[13px] md:text-xl md:tracking-[0.25em] py-7 font-primary"> 
                    In 2009 I opened a private practice in the Strand, where I mainly helped overweight and insulin resistant patients. I joined the Vergelegen practice permanently in 2016 and was seeing both in-patients and out-patients up until 2019 when I started my own private practice in Swellendam. 
                </p>
                <div className="flex lg:flex-row flex-col lg:gap-1 gap-4 justify-center items-center py-10">
                    <div className="lg:w-[80%] w-full h-[2px] bg-black"></div>
                    <h2 className=" w-full md:text-4xl text-2xl font-bold text-center uppercase font-primary">Sprecial Interest</h2>
                    <div className="lg:w-[80%] w-full h-[2px] bg-black"></div>
                </div>
                <p className="text-center text-[17px] md:text-[29px] py-10 font-primary">
                    WEIGHT MANAGEMENT • INSULIN RESISTANCE • DIABESTES • CHOLOESTEROL MANAGEMENT • HYPERTENSION • CENCER TREATMENT & RECOVERY • RENAL DISORDER • SPORT NUTRITION • PREGANCY & LACTATION • ADULT CIRITICAL CARE & ICU • EATING DISORDERS
                </p>
            
            </div>
        </div>

        
     );
}
 
export default AboutMe;