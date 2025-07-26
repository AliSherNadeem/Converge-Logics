"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// interface ServiceCard {
//   title: string;
//   description: string;
//   icon: string;
// }

interface ServicesSectionProps {
  defaultTab?: "tech" | "marketing" | "finance";
}

export default function ServicesSection({
  defaultTab = "tech",
}: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const services = {
    tech: [
      {
        title: "UI/UX Design",
        description: "Designs that delight users and enhance experiences",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Web Development",
        description: "Websites & apps built to perform, scale and succeed",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "App Development",
        description: "Mobile apps made better than before",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Graphic Design",
        description: "Creative that drives traffic and converts",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Project Management",
        description: "Streamlined processes for maximum efficiency",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Business Analysis",
        description: "Business intelligence for your strategy",
        icon: "/placeholder.svg?height=80&width=80",
      },
    ],
    marketing: [
      {
        title: "Digital Marketing",
        description: "Comprehensive digital strategies that drive results",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "SEO Optimization",
        description: "Boost your search rankings and organic traffic",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Social Media",
        description: "Engaging social media campaigns that convert",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Content Strategy",
        description: "Compelling content that tells your brand story",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Email Marketing",
        description: "Targeted email campaigns that drive engagement",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Brand Identity",
        description: "Strong brand identity that stands out",
        icon: "/placeholder.svg?height=80&width=80",
      },
    ],
    finance: [
      {
        title: "Financial Planning",
        description: "Strategic financial planning for sustainable growth",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Investment Analysis",
        description: "Smart investment strategies for maximum returns",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Risk Management",
        description: "Comprehensive risk assessment and mitigation",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Tax Optimization",
        description: "Efficient tax strategies to maximize savings",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Cash Flow Management",
        description: "Optimize cash flow for better business operations",
        icon: "/placeholder.svg?height=80&width=80",
      },
      {
        title: "Financial Reporting",
        description: "Clear financial insights for informed decisions",
        icon: "/placeholder.svg?height=80&width=80",
      },
    ],
  };

return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            <strong>Mission:</strong> We are a next-gen digital agency built for
            the modern business landscape. Our team of engineers, marketers, and
            financial strategists work together to deliver integrated solutions
            that drive innovation, visibility, and profitability.
          </p>
        </div>

        {/* Services Container - Corrected gradient with black background */}
        <div className="max-w-7xl mx-auto bg-black rounded-[48px] p-8 md:p-12 relative overflow-hidden">
          {/* Lime gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#BAE706]/20 via-[#BAE706]/5   pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mt-8 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-gray-300 mb-8 mx-auto max-w-xl">
                Tech built to scale. Marketing that converts. Finance strategies
                that maximize ROI and scale your biz.
              </p>

              {/* Tab Buttons */}
              <div className="flex justify-center mx-auto max-w-96 space-x-4 mb-12 bg-gradient-to-b from-[#BAE706]/20  to-[#BAE706]/10 rounded-full px-3 py-1">
                <Button
                  onClick={() => setActiveTab("tech")}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === "tech"
                      ? "bg-[#BAE706] text-black hover:bg-[#BAE706]/90"
                      : "bg-transparent text-white hover:bg-[#BAE706]/20 cursor-pointer"
                  }`}
                >
                  Tech
                </Button>
                <Button
                  onClick={() => setActiveTab("marketing")}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === "marketing"
                      ? "bg-[#BAE706] text-black hover:bg-[#BAE706]/90"
                      : "bg-transparent text-white hover:bg-[#BAE706]/20 cursor-pointer"
                  }`}
                >
                  Marketing
                </Button>
                <Button
                  onClick={() => setActiveTab("finance")}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === "finance"
                      ? "bg-[#BAE706] text-black hover:bg-[#BAE706]/90"
                      : "bg-transparent text-white hover:bg-[#BAE706]/20 cursor-pointer"
                  }`}
                >
                  Finance
                </Button>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services[activeTab].map((service, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 rounded-[40px] p-6  transition-colors border border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm mx-auto leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-6">
              <Button
                size="lg"
                className="bg-[#BAE706] hover:bg-[#BAE706]/90 text-black font-semibold px-5 py-6 rounded-full text-lg"
              >
                Book Consultation ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

