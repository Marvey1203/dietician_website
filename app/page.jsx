import HealthNutricion from "./components/HealthNutricion";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero/>
      <HealthNutricion/>
      <ContactSection/>
    </div>
  )
}
