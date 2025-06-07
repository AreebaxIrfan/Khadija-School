import Link from "next/link"
import { Sparkles, Bell } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-3">
        <div className="flex items-center space-x-2 animate-pulse">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <Bell className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium">
          🎉 New Academic Year 2024-2025 Admissions Now Open - Limited Seats Available!
        </p>
        <Link
          href="/register"
          className="text-blue-100 hover:text-white underline text-sm font-semibold transition-colors"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  )
}
