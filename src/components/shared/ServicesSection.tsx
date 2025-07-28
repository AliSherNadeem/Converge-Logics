"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import uiIcon from "@/../public/assets/images/ui-ux-icon.svg"
import webDevIcon from "@/../public/assets/images/web dev icon.svg"
import appDevIcon from "@/../public/assets/images/app dev icon.svg"
import graphicDesignIcon from "@/../public/assets/images/graphic design icon.svg"
import projectManagementIcon from "@/../public/assets/images/project management icon.svg"
import businessIcon from "@/../public/assets/images/business icon.svg"
import socialMediaIcon from "@/../public/assets/images/social-media-icon.svg"
// import productMarketingIcon from "@/../public/assets/images/product-marketing-icon.svg"
import emailMarketingIcon from "@/../public/assets/images/email-marketing-icon.svg"
import digitalMarketingIcon from "@/../public/assets/images/digital-marketing-icon.svg"
import bookKeepingIcon from "@/../public/assets/images/book-keeping-icon.svg"
import financialConsultationIcon from "@/../public/assets/images/financial-consultation-icon.svg" 
import financialReportingIcon from "@/../public/assets/images/financial-reporting-icon.svg";

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
         image: uiIcon,
      },
      {
        title: "Web Development",
        description: "Websites & apps built to perform, scale and succeed",
         image: webDevIcon,
      },
      {
        title: "App Development",
        description: "Mobile apps made better than before",
         image: appDevIcon,
      },
      {
        title: "Graphic Design",
        description: "Creative that drives traffic and converts",
         image: graphicDesignIcon,
      },
      {
        title: "Project Management",
        description: "Streamlined processes for maximum efficiency",
         image: projectManagementIcon,
      },
      {
        title: "Business Analysis",
        description: "Business intelligence for your strategy",
         image: businessIcon,
      },
    ],
    marketing: [
      {
        title: "Social Media Management",
        description: "Algorithm mastered and audience captivated",
         image: socialMediaIcon,
      },
      // {
      //   title: "Product Marketing",
      //   description: "Where trends meet transitions for maximum impact",
      //    image: productMarketingIcon,
      // },
      {
        title: "Email Marketing",
        description: "Engaging Makretings that convert leads to customers",
         image: emailMarketingIcon,
      },
      {
        title: "Digital Marketing",
        description: "Where digital meets strategy for maximum reach",
         image: digitalMarketingIcon,
      },

    ],
    finance: [
      {
        title: "Book Keeping",
        description: "Accurate financial records for informed decisions",
         image: bookKeepingIcon,
      },
      {
        title: "Financial Consultation",
        description: "Expert advice for financial growth and stability",
         image: financialConsultationIcon,
      },
      {
        title: "Financial Reporting",
        description: "Comprehensive reports for transparency and insight",
         image: financialReportingIcon,
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
        <div className="max-w-full mx-auto bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden">
          {/* Lime gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#BAE706]/20 via-[#BAE706]/5 pointer-events-none" />
          
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {services[activeTab].map((service, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 rounded-[40px] p-6  transition-colors border border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm mx-12 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Image
                    src={service. image || "/placeholder.svg"}
                    alt={service.title}
                    width={150}
                    height={150}
                    className="mx-auto py-2"
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

