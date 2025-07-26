import BusinessHero from "@/components/shared/BusinessHero"

export const metadata = {
  title: "Finance Solutions | Converge Logics",
  description: "Expert financial guidance for your business",
}

export default function FinancePage() {
  return (
    <div>
      <BusinessHero />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Financial Services</h2>
          {/* Add your finance-specific content here */}
        </div>
      </section>
    </div>
  )
}
