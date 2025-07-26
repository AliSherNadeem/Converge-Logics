import BusinessHero from "@/components/shared/BusinessHero"

export const metadata = {
  title: "Tech Solutions | Converge Logics",
  description: "Cutting-edge technology solutions for modern businesses",
}

export default function Home() {
  return (
    <>
      <BusinessHero />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Tech Services</h2>
          {/* Add your tech-specific content here */}
        </div>
      </section>
    </>
  )
}
