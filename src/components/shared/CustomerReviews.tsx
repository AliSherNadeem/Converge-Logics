"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import vector1 from "@/../public/assets/vectors/reviews-vector1.svg"
import vector2 from "@/../public/assets/vectors/reviews-vector2.svg"

interface Review {
  id: number
  rating: number
  text: string
  author: {
    name: string
    location: string
    avatar: string
  }
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Converge Logics transformed our business with their exceptional web development services. Their team delivered a stunning website that perfectly represents our brand. The UI/UX design is outstanding and user-friendly.",
    author: {
      name: "Sarah Johnson",
      location: "United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 2,
    rating: 5,
    text: "Outstanding digital marketing services! Converge Logics helped us increase our online presence significantly. Their social media marketing and email marketing campaigns generated amazing results for our business.",
    author: {
      name: "Michael Chen",
      location: "Canada",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    rating: 4,
    text: "The mobile app development team at Converge Logics is incredible. They built our iOS and Android apps with great attention to detail. The graphic design work was also top-notch and exceeded our expectations.",
    author: {
      name: "Emily Rodriguez",
      location: "United Kingdom",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 4,
    rating: 5,
    text: "Converge Logics provided comprehensive tech solutions for our startup. From web development to digital marketing management, they handled everything professionally. Their expertise in UI/UX design is remarkable.",
    author: {
      name: "David Thompson",
      location: "Australia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 5,
    rating: 5,
    text: "Excellent marketing services! The team at Converge Logics created an amazing social media strategy and managed our campaigns perfectly. Their email marketing approach helped us reach more customers effectively.",
    author: {
      name: "Lisa Wang",
      location: "Singapore",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 6,
    rating: 4,
    text: "Professional graphic design and web development services. Converge Logics delivered exactly what we needed for our brand identity. Their digital marketing expertise helped us grow our online business significantly.",
    author: {
      name: "James Wilson",
      location: "New Zealand",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, isCenter = false }: { review: Review; isCenter?: boolean }) {
  return (
    <Card
      className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full transition-all duration-500 ${
        isCenter ? "scale-105 shadow-2xl bg-white/95" : ""
      }`}
    >
      <CardContent className="p-6">
        <StarRating rating={review.rating} />
        <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
            <AvatarFallback>
              {review.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900">{review.author.name}</p>
            <p className="text-sm text-gray-600">{review.author.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
    }, 2500)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      visible.push(reviews[index])
    }
    return visible
  }

  const visibleReviews = getVisibleReviews()

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <Image
        src={vector1}
        alt="Decorative dots pattern"
        width={60}
        height={60}
        className="py-2 md:py-0 absolute top-8 left-8"
      />
      <Image
        src={vector2}
        alt="Decorative curved line"
        width={70}
        height={60}
        className="py-2 md:py-0 absolute top-8 right-8"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            See What Our Customers
            <br />
            Say About Us
          </h2>
        </div>

        {/* Reviews Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className="transform transition-all duration-500 ease-in-out"
              >
                <ReviewCard review={review} isCenter={index === 1} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: reviews.length }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
