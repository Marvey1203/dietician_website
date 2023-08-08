const MoreAbout = () => {
    return ( 
        <div className="w-full flex justify-center items-center">
            <div className="w-3/4 flex lg:flex-row flex-col py-16 gap-5 ">
                <div className="lg:w-[55%] w-full flex flex-col lg:gap-10 lg:pr-10 gap-5">
                    <h3 className="font-bold lg:text-6xl text-3xl uppercase">More about me</h3>
                    <p className="md:text-justify text-start md:text-lg text-[15px] md:tracking-[0.25em] md:font-primary">
                        I live in Swellendam and is married to Wilhelm, a Town Planner, and the love of my life. I am blessed with three daughters. Motherhood is the most challenging and rewarding experience of my life. I received my first pair of running shoes when I was 12 years old and have loved running since then. I used to run marathons, but I now prefer trail running. Jessie, our border collie, has been my running partner for the last eight years. I love running with her in the mountains. I believe in balance: to be active, to eat healthy, to get sufficient sleep and sunlight and work hard on relationships.
                    </p>

                </div>
                <div className="lg:w-[45%] w-full">
                    <img className="w-full" src="/moreAbout.jpg" alt="Image of Jessie and Tanelle Schutte jogging" />

                </div>
            </div>
            
           
        </div>
        
     );
}
 
export default MoreAbout;