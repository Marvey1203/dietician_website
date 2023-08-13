const MissionStatement = () => {
    return ( 
        <div className="w-full bg-[url(/forestBg.webp)] py-36 flex justify-center items-center h-full mt-20">
            <div className="bg-newGreen w-3/4 mx-auto my-0 top-0 left-0 right-0 px-5 md:px-12 md:py-28 py-20 rounded-2xl">
                    <h3 className="text-white font-semibold text-2xl leading-[3rem] md:text-6xl md:leading-[6rem] text-center uppercase font-primary">
                        Mission Statement
                    </h3>
                    <p className="text-center text-base md:text-2xl tracking-[0.18em] md:tracking-[0.23em] py-7 font-primary text-white ">
                       My mission is to help patients improve their health and wellbeing with good, balanced nutrition, physical activity and lifestyle changes. 
                    </p>
                </div>
        </div>
     );
}
 
export default MissionStatement;