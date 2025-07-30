"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import vector1 from "@/../public/assets/vectors/our-work-vector1.svg"
import vector2 from "@/../public/assets/vectors/our-work-vector2.svg"
import work1 from "@/../public/assets/images/our-work1.svg";
import work2 from "@/../public/assets/images/our-work2.svg";   
import work3 from "@/../public/assets/images/our-work3.svg";
import work4 from "@/../public/assets/images/our-work4.svg";
import work5 from "@/../public/assets/images/our-work5.svg";
import work6 from "@/../public/assets/images/our-work6.svg";
  

interface Project {
  image: string
  tags: string[]
  title: string
  description: string
}

export default function OurWork() {
  const projects: Project[] = [
    {
      image: work1,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "Landing Page Design",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
    {
      image: work2,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "Mobile App Design",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
    {
      image: work3,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "Web App Design",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
    {
      image: work4,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "Dashboard Design",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
    {
      image: work5,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
    {
      image: work6,
      tags: ["UX Research", "Wireframe", "Visual Design"],
      title: "App Wireframing",
      description: "Lorem ipsum dolor sit amet consectetur. Iaculis nisl viverra urna.",
    },
  ]

  return (
    // <section className="py-16 bg-white relative overflow-hidden">
    <section className="relative py-8 md:py-12 lg:py-16 bg-white">

      {/* Decorative elements */}
        <Image
          src={vector1}
          width={80}
          height={80}
          alt="Decorative dots"
          className="absolute top-8 left-8 z-0"
        />
        <Image
          src={vector2}
          width={80}
          height={80}
          alt="Decorative swirl"
          className="absolute top-8 right-8 z-0"
        />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Process: Aligning Cutting-Edge Tech, Data-Driven Marketing, and Smart Finance to Deliver Scalable,
            ROI-Focused Solutions for Your Business.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative w-full h-60">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg"
          >
            See All 28 Projects ↗
          </Button>
        </div>
      </div>
    </section>
  )
}