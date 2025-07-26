import BusinessHero from "@/components/shared/BusinessHero"


export const metadata = {
  title: "Marketing Solutions | Converge Logics",
  description: "Strategic marketing solutions that drive results",
}

export default function MarketingPage() {
  return (
    <>
      <BusinessHero />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Marketing Services</h2>
          {/* Add your marketing-specific content here */}
        </div>
      </section>
    </>
  )
}
