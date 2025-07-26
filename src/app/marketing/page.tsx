import BusinessHero from "@/components/shared/BusinessHero"
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
    </>
  )
}

