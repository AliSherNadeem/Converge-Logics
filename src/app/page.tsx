import BusinessHero from "@/components/shared/BusinessHero"
import HowWeWork from "@/components/shared/HowWeWork"
import OurWork from "@/components/shared/OurWork"
import ServicesSection from "@/components/shared/ServicesSection"
import WhyChooseUs from "@/components/shared/WhyChooseUs"

export const metadata = {
  title: "Tech Solutions | Converge Logics",
  description: "Cutting-edge technology solutions for modern businesses",
}

export default function Home() {
  return (
    <>
      <BusinessHero />
      <ServicesSection defaultTab="tech" />
      <HowWeWork/>
      <OurWork/>
      <WhyChooseUs/>
    </>
  )
}
