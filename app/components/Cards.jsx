const Cards = () => {
    const cardItems = [
        {
            icon: "/svgsun.svg",
            name: "Nutrition",
            text: "Proper nutrition assists in the prevention of lifestyle diseases like diabetes, high blood pressure, cardiovascular diseases, gut    disorders, kidney diseases, cancer related complications and arthritis.",
            img: "/imgnutricion.svg"
        },
        {
            icon: "/svghalf.svg",
            name: "Physical Activity",
            text: "Regular physical activity helps us to improve sleep, maintain a healthy weight, manage stress and improve our quality of life. It’s recommended that you do at least 150 minutes  of moderate aerobic activity per week.",
            img: "/imgphysical.svg"
        },
        {
            icon: "/svgstar.svg",
            name: "Sleep",
            text: "Good sleep habits support your mental and physical health and contributes to your overall quality of life. Sleep also plays a vital part in your weight loss journey.",
            img: "/imgsleep.svg"
        }
    ]
    return ( 
        <div className="grid grid-cols-3 gap-5 w-3/4 ">
        {
            cardItems.map((value, index) => {
                return(
                    <div key={index} className="flex flex-col gap-5 justify-between items-stretch border-2 border-black rounded-2xl overflow-hidden">
                        <div className="flex flex-col p-3 gap-5 justify-start items-start">
                            <div className="flex flex-col gap-2">
                                <img className="w-8 h-8 flex items-center justify-center" src={value.icon} alt="" />
                                <h4 className="text-3xl font-bold">{value.name}</h4>
                            </div>
                            
                            <p>{value.text}</p>
                        </div>
                        <div className="flex items-end">
                            <img className="w-full h-{160px} " src={value.img} alt="" />
                        </div>
                        
                    </div>
                )
            })
        }    

        </div>
     );
}
 
export default Cards;