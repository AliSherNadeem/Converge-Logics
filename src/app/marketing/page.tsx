import BusinessHero from "@/components/shared/BusinessHero"
import HowWeWork from "@/components/shared/HowWeWork"
import OurWork from "@/components/shared/OurWork"
import ServicesSection from "@/components/shared/ServicesSection"

export const metadata = {
  title: "Marketing Solutions | Converge Logics",
  description: "Strategic marketing solutions that drive results",
}

export default function MarketingPage() {
  return (
    <>
      <BusinessHero />
      <ServicesSection defaultTab="marketing" />
      <HowWeWork/>
      <OurWork />
    </>
  )
}

