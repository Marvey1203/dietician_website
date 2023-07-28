import HealthNutricion from "./components/HealthNutricion";
import Hero from "./components/Hero";
import Investment from "./components/Investment";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero/>
      <HealthNutricion/>
      <Investment/>
    </div>
  )
}
