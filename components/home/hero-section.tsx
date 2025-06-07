import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-semibold">
                🌟 Award-Winning Education Since 2009
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Nurturing
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                  Tomorrow's
                </span>
                <span className="text-gray-800">Leaders</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                At Kadija Schooling System, we provide world-class education that empowers students to excel
                academically, socially, and personally in a nurturing, innovative environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <BookOpen className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                Watch Video Tour
              </Button>
            </div>
            <div className="flex items-center space-x-12 pt-6">
              <div className="text-center group">
                <p className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">500+</p>
                <p className="text-gray-600 font-medium">Happy Students</p>
              </div>
              <div className="text-center group">
                <p className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">50+</p>
                <p className="text-gray-600 font-medium">Expert Teachers</p>
              </div>
              <div className="text-center group">
                <p className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">15+</p>
                <p className="text-gray-600 font-medium">Years Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 group">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="Students learning at Kadija School"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl -z-10 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full -z-10 opacity-40"></div>
            <div className="absolute top-10 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl -z-10 opacity-60 rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
