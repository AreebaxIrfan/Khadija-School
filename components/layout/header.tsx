import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-green-100/50 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img
                src="/images/school-logo.png"
                alt="Miss Khadija Schooling System Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                Miss Khadija Schooling System
              </h1>
              <p className="text-xs text-gray-600 font-medium">Guiding Young Minds</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-green-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all"
            >
              About
            </Link>
            <Link
              href="/campus"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all"
            >
              Campus
            </Link>
            <Link
              href="/register"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all"
            >
              Register
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
