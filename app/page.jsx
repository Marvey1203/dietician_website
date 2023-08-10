//import HealthNutricion from "./components/HealthNutricion";
import Hero from "./components/Hero";
//import ContactSection from "./components/ContactSection";
//import InvestmentSection from "./components/InvestmentSection";
//import DietitianSection from "./components/DietitianSection";
//import AboutMe from "./components/AboutMe";
//import MissionStatement from "./components/MissionStatement";
//import MoreAbout from "./components/MoreAbout";
import dynamic from "next/dynamic";

const HealthNutricion = dynamic(() => import("./components/HealthNutricion"))
const InvestmentSection = dynamic(() => import("./components/InvestmentSection"))
const DietitianSection = dynamic(() => import("./components/DietitianSection"))
const AboutMe = dynamic(() => import("./components/AboutMe"))
const MissionStatement = dynamic(() => import("./components/MissionStatement"))
const MoreAbout = dynamic(() => import("./components/MoreAbout"))
const ContactSection = dynamic(() => import("./components/ContactSection"))

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero/>
      <HealthNutricion/>
      <InvestmentSection/>
      <DietitianSection/>
      <AboutMe/>
      <MissionStatement/>
      <MoreAbout/>
      <ContactSection/>
    </div>
  )
}
