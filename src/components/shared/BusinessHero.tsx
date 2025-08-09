"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import socialIcons from "@/../public/assets/vectors/social-icons.svg"
import figmaIcon from "@/../public/assets/vectors/figma-icon.svg"
import vsCodeIcon from "@/../public/assets/vectors/vs-code-icon.svg"
import typographyIcon from "@/../public/assets/vectors/typography-icon.svg"
import htmlIcon from "@/../public/assets/vectors/html-icon.svg"
import heroProfileChart from "@/../public/assets/vectors/hero-profile-chart.svg"
import heroGrowthChart from "@/../public/assets/vectors/hero-growth-chart.svg"


interface BusinessHeroProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function BusinessHero({
  title = "Empowering Growth with",
  subtitle = "Tech, Marketing & Finance Solutions",
  description = "Helping businesses thrive with smart technology, strategic marketing, and financial optimization.",
}: BusinessHeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/hero-illustration.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#BAE706]/10 via-[#BAE706]/10 to-[#BAE706]/8" />
      </div>

      {/* Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Social Media Icons - Left Side */}
        <div className="absolute left-2 sm:left-4 md:left-8 top-8 sm:top-12 md:top-20 space-y-2 sm:space-y-3 md:space-y-4 z-10">
            <Image
              src={socialIcons}
              alt="Facebook"
              width={100}
              height={40}
              className="w-full h-full object-contain"
            />
        </div>

         {/* VS CODE Icon - Left Side */}
        <div className="absolute left-6 sm:left-12 md:left-18 top-48 sm:top-56 md:top-64 z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24">
            <Image
             src={vsCodeIcon}
              alt="Design Tools"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

         {/* Figma Icon - Left */}
        <div className="absolute left-16 sm:left-24 md:left-44 top-44 sm:top-52 md:top-72 z-10">
          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24">
            <Image
              src={figmaIcon}
              alt="Typography"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
       

        {/* Typography Icon- Left Bottom */}
        <div className="absolute left-4 sm:left-8 md:left-12 bottom-20 sm:bottom-24 md:bottom-32 z-10">
            <Image
              src={typographyIcon}
              alt="Messenger"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
        </div>


        {/* HTML5 Icon - Top Right */}
        <div className="absolute right-16 sm:right-32 md:right-48 top-8 sm:top-12 md:top-16 z-10">
          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-28 md:h-28">
            <Image
              src={htmlIcon}
              alt="HTML5"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Profit Chart - Right Side */}
        <div className="absolute right-2 sm:right-4 md:right-8 top-28 sm:top-32 md:top-44 z-10">
          <div className="w-24 sm:w-36 md:w-60">
            <Image
              src={heroProfileChart}
              alt="Profit Chart - 325k"
              width={128}
              height={96}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Revenue Chart - Right Bottom */}
        <div className="absolute right-4 sm:right-8 md:right-20 bottom-20 sm:bottom-22 md:bottom-24 z-10">
          <div className="w-28 sm:w-36 md:w-64">
            <Image
              src={heroGrowthChart}
              alt="Revenue Growth Chart"
              width={160}
              height={120}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Figma Icon - Right
        <div className="absolute right-8 sm:right-12 md:right-16 top-1/2 -translate-y-1/2 z-10">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
            <Image
              src="/assets/icons/figma.png"
              alt="Figma"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
        </div> */}
      </div>

      {/* Main Content - Higher z-index for mobile */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-20 z-50">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight z-50 relative">
            {title}
            <br />
            <span className="text-[#6E4BDC] bg-white/80 sm:bg-transparent px-2 sm:px-0 rounded-lg sm:rounded-none">
              {subtitle}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed z-50 relative bg-white/80 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
            {description}
          </p>
          <div className="mt-6 sm:mt-8 z-50 relative">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 sm:px-5 py-4 sm:py-6 rounded-full text-base sm:text-lg cursor-pointer transition-all transform hover:scale-105 shadow-lg"
            >
              Book Consultation ↗
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#726BDF] to-[#0E0D1C] py-4 sm:py-6 overflow-hidden z-40">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-8 sm:space-x-12 text-white font-bold text-xl sm:text-2xl md:text-3xl">
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              TECH
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              TECH
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              TECH
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">★</span>
              TECH
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
