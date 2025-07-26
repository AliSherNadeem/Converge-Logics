import BusinessHero from "@/components/shared/BusinessHero"
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
    </>
  )
}
