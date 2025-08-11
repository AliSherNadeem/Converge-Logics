import AboutHeroSection from '@/components/AboutHeroSection'
import CustomerReviews from '@/components/shared/CustomerReviews'
import HowWeWork from '@/components/shared/HowWeWork'
import WhyChooseUs from '@/components/shared/WhyChooseUs'
import React from 'react'


export const metadata = {
  title: "About Us | Converge Logics",
  description: "Get to know more about usand our work",
}

export default function AboutPage() {
  return (
    <>
    <AboutHeroSection/>
    <HowWeWork/>
    <WhyChooseUs/>
    <CustomerReviews/>
    </>
  )
}
