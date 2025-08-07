import React from 'react';
import Image from 'next/image';
import whyChooseUs from '@/../public/assets/images/why-choose-us-main.svg'
import vector1 from '@/../public/assets/vectors/why-choose-us-vector1.svg'
import vector2 from '@/../public/assets/vectors/why-choose-us-vector2.svg'

const WhyChooseUs = () => {
  return (
    <section className="relative py-8 md:py-16 px-4 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-4 left-4 ">
        <Image 
          src={vector1}
          alt=""
          width={80}
          height={80}
          className='w-8 h-8 md:w-full md:h-full'

        />
      </div>
      
      <div className="absolute top-4 right-4 ">
        <Image 
          src={vector2}
          alt=""
          width={80}
          height={80}
          className='w-8 h-8 md:w-full md:h-full'
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>
        </div>

        {/* Main content area with illustration and features */}
        <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
          {/* Central Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src={whyChooseUs}
              alt="Digital solutions illustration"
              width={450}
              height={450}
              className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] object-contain"
            />
          </div>

          {/* Feature texts positioned around the illustration */}
          
          {/* Transparent Approach - Top Left */}
          <div className='hidden md:block'>
          <div className="absolute top-0 left-0 lg:top-4 lg:left-8 max-w-xs">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Transparent Approach
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We prioritize open communication, keeping you involved and informed every step of the way.
            </p>
          </div>

          {/* Tailored Strategies - Top Right */}
          <div className="absolute top-0 right-0 lg:top-4 lg:right-8 max-w-xs text-right">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Tailored Strategies
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We create customized digital solutions designed to meet your unique goals and challenges.
            </p>
          </div>

          {/* Affordable Solutions - Middle Left */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 lg:left-0 max-w-xs">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Affordable Solutions
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We provide cost-effective solutions tailored for businesses of all sizes.
            </p>
          </div>

          {/* Proven Results - Middle Right */}
          <div className="absolute right-0 top-1/3 -translate-y-1/2 lg:right-0 max-w-xs text-right">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Proven Results
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our team has a track record of delivering measurable outcomes, backed by years of experience and industry recognition.
            </p>
          </div>

          {/* Global Reach - Bottom Left */}
          <div className="absolute bottom-0 top-96 left-0 lg:bottom-4 lg:left-8 max-w-xs">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Global Reach
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              With a global reach and local expertise, we craft digital strategies that resonate with your audience.
            </p>
          </div>

          {/* Creative Innovation - Bottom Right */}
          <div className="absolute bottom-0 top-96 right-0 lg:bottom-4 lg:right-8 max-w-xs text-right">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Creative Innovation
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We combine cutting-edge technology with out-of-the-box creativity to help your brand make a lasting impression.
            </p>
          </div>
          </div>
        </div>

        {/* Mobile Layout - Stack vertically on small screens */}
        <div className="block lg:hidden mt-12 space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Transparent Approach
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              We prioritize open communication, keeping you involved and informed every step of the way.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Tailored Strategies
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              We create customized digital solutions designed to meet your unique goals and challenges.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Affordable Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              We provide cost-effective solutions tailored for businesses of all sizes.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Proven Results
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              Our team has a track record of delivering measurable outcomes, backed by years of experience and industry recognition.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Global Reach
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              With a global reach and local expertise, we craft digital strategies that resonate with your audience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Creative Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              We combine cutting-edge technology with out-of-the-box creativity to help your brand make a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;