"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* School Logo */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img
              src="/images/school-logo.png"
              alt="Miss Khadija Schooling System Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* 404 Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong
            URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* School Info */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">Miss Khadija Schooling System - Guiding Young Minds</p>
        </div>
      </div>
    </div>
  )
}
