import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/career" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <section className="px-8 py-16 bg-white">
        {/* Footer Container with black background and purple gradient overlay */}
        <div className="max-w-full mx-auto bg-black rounded-[48px] px-8 md:px-12 relative overflow-hidden">
          {/* Purple gradient overlay from bottom to top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#8781E4]/30 via-[#3E3894]/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* CTA Section */}
            <div className="text-center py-16 px-4">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                Want to start a<br />
                project?
              </h2>
              <Button
                size="lg"
                className="bg-[#BAE706] hover:bg-[#BAE706]/90 text-black font-semibold px-8 py-4 rounded-full text-lg"
              >
                Let&apos;s Talk ↗
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mx-8"></div>

            {/* Footer Content */}
            <div className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Converge Logics</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Id tellus varius semper feugiat malesuada massa velit
                    egestas in. Hac tortor auctor pharetra mattis aliquam eget.
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
                  <ul className="space-y-3">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
                  <ul className="space-y-3">
                    {legalLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-300" />
                      <span className="text-gray-300">(524) 365-2889</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-300" />
                      <span className="text-gray-300">info@convergelogics.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-10 h-10 text-gray-300 mt-1" />
                      <span className="text-gray-300">
                      103, Block C, Business Square Gulberg Greens, Islamabad, Pakistan
                        <br />
                        20590
                      </span>
                    </div>S
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-4 pt-2">
                <div className="max-w-md">
                  <h4 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h4>
                  <div className="flex space-x-3">
                    <Input
                      type="email"
                      placeholder="Enter email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6"
                    />
                    <Button className="bg-[#BAE706] hover:bg-[#BAE706]/90 text-black font-semibold px-6 rounded-full">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-4 pt-6 border-t border-white/20 text-center">
                <p className="text-gray-400">© 2025 Converge Logics. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
