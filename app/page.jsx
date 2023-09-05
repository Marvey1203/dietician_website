import Hero from "./components/Hero";
import dynamic from "next/dynamic";
import Head from "next/head";

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
      <Head>
        <meta property="og:title" content="Clinical dietician Swellendam" />
        <meta
          property="og:description"
          content="Tanelle Schutte is a clinical dietician that help you get healthy"
        />
        <meta
          property="og:image"
          content="/TanelleSchutte.webp"
        />
      </Head>
        <Hero />        
        <HealthNutricion />
        <InvestmentSection />
        <DietitianSection />
        <AboutMe />
        <MissionStatement />
        <MoreAbout />
        <ContactSection />
      </div>
  )
}
