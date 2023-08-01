const MoreAbout = () => {
    return ( 
        <div className="w-full flex justify-center items-center">
            <div className="w-3/4 flex flex-row py-16 ">
                <div className="w-[55%] flex flex-col gap-10 pr-10">
                    <h3 className="font-bold text-6xl uppercase">More about me</h3>
                    <p className="text-justify text-lg tracking-[0.25em] font-primary">
                        I live in Swellendam and is married to Wilhelm, a Town Planner, and the love of my life. I am blessed with three daughters. Motherhood is the most challenging and rewarding experience of my life. I received my first pair of running shoes when I was 12 years old and have loved running since then. I used to run marathons, but I now prefer trail running. Jessie, our border collie, has been my running partner for the last eight years. I love running with her in the mountains. I believe in balance: to be active, to eat healthy, to get sufficient sleep and sunlight and work hard on relationships.
                    </p>

                </div>
                <div className="w-[45%]">
                    <img className="w-full" src="/moreAbout.jpg" alt="Image of Jessie and Tanelle Schutte jogging" />

                </div>
            </div>
            
           
        </div>
        
     );
}
 
export default MoreAbout;