"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    // Optional: Only add scroll listener if needed for specific effects
    const handleScroll = () => {
      // Add scroll-based logic here if needed (e.g., shadow intensity)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@misskhadija.edu.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4porté

System: h-4" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-green-200 transition-colors" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="hover:text-green-200 transition-colors" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="hover:text-green-200 transition-colors" aria-label="Twitter">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-green-100/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Miss Khadija Schooling System">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
                  <Image
                    src="/images/school-logo.png"
                    alt="Miss Khadija Schooling System Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  Miss Khadija Schooling System
                </h1>
                <p className="text-xs text-gray-600 font-medium">Guiding Young Minds to Excellence</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="relative z-50 p-2 hover:bg-green-50"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-600 transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-600 transition duration-300 ease-in-out translate-y-2 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-600 transition duration-300 ease-in-out translate-y-4 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
                    }`}
                  />
                </div>
              </Button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-green-600 font-semibold relative group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/campus"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group py-2"
              >
                Campus
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group py-2"
              >
                Register
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 rounded-full font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl overflow-auto transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-8 space-y-6">
              <Link
                href="/"
                className="block text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Home</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>About</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/campus"
                className="block text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Campus</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link
                href="/register"
                className="block text-gray-700 hover:text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200 relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Register</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link href="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded-full font-medium">
                  Contact Us
                </Button>
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-100">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>+92 300 1234567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>info@misskhadija.edu.pk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>Follow Us:</span>
                    <div className="flex space-x-2">
                      <a href="#" className="hover:text-green-600 transition-colors" aria-label="Facebook">
                        Facebook
                      </a>
                      <a href="#" className="hover:text-green-600 transition-colors" aria-label="Instagram">
                        Instagram
                      </a>
                      <a href="#" className="hover:text-green-600 transition-colors" aria-label="Twitter">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}