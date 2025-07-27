"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/../public/assets/logos/converge_logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Tech", href: "/" },
        { name: "Marketing", href: "/marketing" },
        { name: "Finance", href: "/finance" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/career" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className=" bg-white bg-gradient-to-b from-[#BAE706]/15 to-[#BAE706]/15 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <Image
              src={logo}
              width={500}
              height={500}
              alt="Converge Logics Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="transition-all transform hover:scale-105 duration-200">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <DropdownMenuItem
                          key={dropdownItem.name}
                          className="cursor-pointer"
                          inset={false}
                          asChild
                        >
                          <Link href={dropdownItem.href} className="w-full hover:!bg-[#BAE706]">
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            <Button
              size={"lg"}
              variant="outline"
              className="bg-transparent border-lime-400 hover:bg-lime-400 text-black font-medium rounded-full px-6"
            >
              Get Started →
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <span className="text-lg font-medium text-gray-900">
                          {item.name}
                        </span>
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-gray-900"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-gray-900 hover:text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-4">
                  <Link
                    href="/contact"
                    className="block text-lg font-medium text-gray-900 hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Button
                    variant="outline"
                    size={"lg"}
                    className="w-full bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full"
                  >
                    Get Started →
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
