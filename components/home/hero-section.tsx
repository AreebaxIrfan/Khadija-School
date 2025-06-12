"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Star, GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-100/50"></div>

      {/* Floating Elements (Hidden on small screens) */}
      <div className="hidden sm:block absolute top-20 left-10 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
      <div className="hidden sm:block absolute top-40 right-20 w-10 sm:w-12 h-10 sm:h-12 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 left-20 w-14 sm:w-20 h-14 sm:h-20 bg-green-300 rounded-full opacity-40 animate-bounce delay-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <Badge
                className="bg-green-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm sm:text-base font-semibold animate-pulse"
              >
                🌱 Growing Genius Since 2022
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Nurturing
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent block animate-pulse">
                  Tomorrow's
                </span>
                <span className="text-gray-800">Leaders</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-md sm:max-w-lg">
                At Miss Khadija Schooling System, we provide world-class education that empowers students to excel
                academically, socially, and personally in a nurturing, innovative environment.
              </p>
            </div>

            {/* Central Call-to-Action Button */}
            <div className="flex justify-center lg:justify-start pt-6 sm:pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-pulse"
                onClick={() => (window.location.href = "/register")}
              >
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 animate-bounce" />
                Join Our School Family
              </Button>
            </div>

            {/* Stats with Animation */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-1 sm:mr-2" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform">
                    500+
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Happy Students</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-1 sm:mr-2" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                    50+
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Expert Teachers</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mr-1 sm:mr-2" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 group-hover:scale-110 transition-transform">
                    15+
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Years Excellence</p>
              </div>
            </div>
          </div>

          {/* Student Image Section */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 group">
              {/* Main Student Image */}
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                  {/* Real student image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">
                      <img
                        src="/images/student-uniform.png"
                        alt="Student in school uniform"
                        className="rounded-2xl shadow-lg w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Decorative elements (Scaled down on mobile) */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-400 rounded transform -rotate-12 animate-bounce"></div>
                      <div className="absolute -top-1 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded transform rotate-12 animate-bounce delay-150"></div>
                      <div className="absolute -bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded transform rotate-6 animate-bounce delay-300"></div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="flex justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements (Hidden on small screens) */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl -z-10 opacity-60 animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -z-10 opacity-40 animate-bounce"></div>
            <div className="hidden sm:block absolute top-10 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-300 to-blue-400 rounded-2xl -z-10 opacity-60 rotate-12 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}