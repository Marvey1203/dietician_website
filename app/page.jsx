import HealthNutricion from "./components/HealthNutricion";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import InvestmentSection from "./components/InvestmentSection";
import DietitianSection from "./components/DietitianSection";
import AboutMe from "./components/AboutMe";


export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero/>
      <HealthNutricion/>
      <InvestmentSection/>
      <DietitianSection/>
      <AboutMe/>
      <ContactSection/>
    </div>
  )
}
