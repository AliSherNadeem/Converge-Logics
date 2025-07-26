import BusinessHero from "@/components/shared/BusinessHero"
import ServicesSection from "@/components/shared/ServicesSection"

export const metadata = {
  title: "Tech Solutions | Converge Logics",
  description: "Cutting-edge technology solutions for modern businesses",
}

export default function Home() {
  return (
    <>
      <BusinessHero />
      <ServicesSection defaultTab="tech" />
    </>
  )
}
