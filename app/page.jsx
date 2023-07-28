import HealthNutricion from "./components/HealthNutricion";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero/>
      <HealthNutricion/>
    </div>
  )
}
