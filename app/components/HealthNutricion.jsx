import ButtonsConsoltation from "./ButtonConsoltation";
import Cards from "./Cards";

const HealthNutricion = () => {
    return ( 
        <div className="w-full py-20 flex flex-col justify-center items-center gap-20" id="health-nutrition">
            <p className="text-center text-[15px] md:text-xl w-3/4">
                Proper nutrition is essential for maintaining good health and well-being. A balanced diet provides the necessary nutrients, vitamins, and minerals that our bodies require to function optimally. It supports the growth and development of children, helps adults maintain their health, and promotes healthy aging in older individuals.
            </p>
            <ButtonsConsoltation/>
            <Cards/>
        </div>
     );
}
 
export default HealthNutricion;