import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Github, Mail, MessageCircle, TrendingUp } from "lucide-react"


export default function BusinessHero({
  title = "Empowering Growth with",
  subtitle = "Tech, Marketing & Finance Solutions",
  description = "Helping businesses thrive with smart technology, strategic marketing, and financial optimization.",
}) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white min-h-[600px] overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Social Media Icons - Left Side */}
        <div className="absolute left-8 top-32 space-y-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Facebook className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Messenger Icon - Left Bottom */}
        <div className="absolute left-12 bottom-32">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </div>


        {/* Charts - Right Side */}
        <div className="absolute right-8 top-24">
          <div className="bg-white rounded-lg shadow-lg p-4 w-32">
            <div className="text-xs text-gray-500 mb-2">Profit</div>
            <div className="text-lg font-bold">325k</div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <div className="w-16 h-8 bg-green-100 rounded ml-2 flex items-end justify-center">
                <div className="w-1 h-2 bg-green-500 mx-px"></div>
                <div className="w-1 h-4 bg-green-500 mx-px"></div>
                <div className="w-1 h-3 bg-green-500 mx-px"></div>
                <div className="w-1 h-6 bg-green-500 mx-px"></div>
                <div className="w-1 h-4 bg-green-500 mx-px"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart - Right Bottom */}
        <div className="absolute right-12 bottom-24">
          <div className="bg-white rounded-lg shadow-lg p-4 w-40">
            <div className="text-xs text-gray-500 mb-2">Revenue Growth</div>
            <div className="flex items-end space-x-1 h-16">
              <div className="w-4 h-8 bg-indigo-400 rounded-t"></div>
              <div className="w-4 h-12 bg-indigo-500 rounded-t"></div>
              <div className="w-4 h-6 bg-indigo-400 rounded-t"></div>
              <div className="w-4 h-14 bg-indigo-600 rounded-t"></div>
              <div className="w-4 h-10 bg-indigo-500 rounded-t"></div>
            </div>
          </div>
        </div>

        {/* Figma Icon - Right */}
        <div className="absolute right-16 top-1/2">
          <div className="w-10 h-10 bg-gradient-to-b from-orange-400 via-indigo-500 to-green-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {title}
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full text-lg"
            >
              Book Consultation ↗
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-indigo-800 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex justify-center items-center w-full space-x-8 text-white font-bold text-lg">
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              TECH
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              TECH
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              TECH
            </span>
              <span className="flex items-center">
              <span className=" mr-2">★</span>
              MARKETING
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              FINANCE
            </span>
            <span className="flex items-center">
              <span className=" mr-2">★</span>
              TECH
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
