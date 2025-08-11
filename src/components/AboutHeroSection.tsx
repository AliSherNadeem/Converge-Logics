"use client"

import Image from "next/image"
import aboutHeroBg from "@/../public/assets/images/about-hero-bg.svg"
import heroVector1 from "@/../public/assets/images/about-hero-vector1.svg"
import heroVector2 from "@/../public/assets/images/about-hero-vector2.svg"
import  aboutHeroPeople1 from "@/../public/assets/images/about-hero-peopleleft.svg"
import  aboutHeroPeople2 from "@/../public/assets/images/about-hero-peopleright.svg"



interface AboutHeroProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function AboutHeroSection({
  title = "Converge Logics",
  subtitle = "About Us",
  description = "At Converge Logics, we deliver expert services across technology, marketing, and finance to help your business thrive. Our team specializes in website and app development, UI/UX and graphic design, as well as social media and email marketing. We also provide professional financial consultation and reporting solutions tailored to your needs. Partner with us to bring your ideas to life and achieve your goals.",
}: AboutHeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={aboutHeroBg}
          alt="Background Wave"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#BAE706]/10 via-[#BAE706]/8 to-[#BAE706]/5" />
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {/* Dots - Top LEFT (changed from right) */}
        <div className="absolute left-8 sm:left-12 md:left-20 top-8 sm:top-12 md:top-16 z-10">
          <Image
            src={heroVector1}
            alt="Decorative Dots"
            width={60}
            height={60}
            className="w-12 h-9 sm:w-16 sm:h-12 md:w-20 md:h-15 object-contain"
          />
        </div>

        {/* Squiggle - Bottom Right */}
        <div className="absolute right-8 sm:right-12 md:right-20 bottom-20 sm:bottom-24 md:bottom-32 z-10">
          <Image
            src={heroVector2}
            alt="Decorative Squiggle"
            width={60}
            height={60}
            className="w-16 h-12 sm:w-20 sm:h-16 md:w-25 md:h-20 object-contain"
          />
        </div>
      </div>

      {/* People Images - NO background wrapper divs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left People Image */}
        <div className="absolute left-4 sm:left-8 md:left-16 top-32 sm:top-48 md:top-64 z-10">
          <Image
            src={aboutHeroPeople1}
            alt="Team collaboration"
            width={400}
            height={300}
            className="w-32 h-24 sm:w-48 sm:h-36 md:w-96 md:h-80  object-contain"
          />
        </div>

        {/* Right People Image - Positioned higher */}
        <div className="absolute right-4 sm:right-8 md:right-16 top-12 sm:top-20 md:top-24 z-10">
          <Image
            src={aboutHeroPeople2}
            alt="Business meeting"
            width={400}
            height={300}
            className="w-32 h-24 sm:w-48 sm:h-36 md:w-96 md:h-80  object-contain"
          />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-20 z-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight  bg-white/70 sm:bg-transparent">
            {title}
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mt-4 mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span className="text-purple-600">{subtitle}</span>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto bg-white/70 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}