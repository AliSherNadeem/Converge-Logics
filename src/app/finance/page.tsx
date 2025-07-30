import BusinessHero from "@/components/shared/BusinessHero"
import HowWeWork from "@/components/shared/HowWeWork"
import OurWork from "@/components/shared/OurWork"
import ServicesSection from "@/components/shared/ServicesSection"


export const metadata = {
  title: "Finance Solutions | Converge Logics",
  description: "Expert financial guidance for your business",
}

export default function FinancePage() {
  return (
    <>
      <BusinessHero />
      <ServicesSection defaultTab="finance" />
      <HowWeWork />
      <OurWork/>
    </>
  )
}
