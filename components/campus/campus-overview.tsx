import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Phone, Clock, Camera, Navigation } from "lucide-react";

export function CampusOverview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* School Overview Banner */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="relative w-full max-w-[1000px] mx-auto mb-6 sm:mb-8">
            <Image
              src="/images/school-campuses.jpg"
              alt="Miss Khadija Schooling System - Two Campuses"
              width={1200}
              height={800}
              className="rounded-3xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <Badge className="bg-green-100 text-green-700 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-lg font-semibold">
            Two Campuses, One Commitment
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Excellence, Innovation and Values
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
            Alhamdulillah, Miss Khadija Schooling System, with its two campuses, continues to set new benchmarks in
            quality education, moral values, and student empowerment for a promising future.
          </p>
        </div>

        {/* Campus 1 - Gulshan E Noor */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <div className="space-y-6 sm:space-y-8 order-1">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                Campus 1
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Gulshan E Noor Campus
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Our primary campus located at Gulshan E Noor PMT Road features modern classrooms, advanced science
                laboratories, and comprehensive facilities designed to foster academic excellence and character
                development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-2xl">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-2 sm:mb-3" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">500+</p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Students</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mb-2 sm:mb-3" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-700">20+</p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Classrooms</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Gulshan E Noor PMT Road</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Primary Campus Location</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">+92 (XXX) XXX-XXXX</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Campus 1 Office</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">8:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Monday to Friday</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-200 text-green-700 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          <div className="relative order-2">
            <div className="relative z-10 group">
              <Image
                src="/images/school-campuses.jpg"
                alt="Campus 1 - Gulshan E Noor"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl w-full h-auto group-hover:shadow-3xl transition-all duration-500 object-cover"
                loading="lazy"
                style={{ objectPosition: "25% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-3xl -z-10 opacity-60"></div>
            <div className="hidden sm:block absolute -top-4 -left-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl -z-10 opacity-60 rotate-12"></div>
          </div>
        </div>

        {/* Campus 2 - Gulshan E Taufeeq */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="relative order-2">
            <div className="relative z-10 group">
              <Image
                src="/images/school-campuses.jpg"
                alt="Campus 2 - Gulshan E Taufeeq"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl w-full h-auto group-hover:shadow-3xl transition-all duration-500 object-cover"
                loading="lazy"
                style={{ objectPosition: "75% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl -z-10 opacity-60"></div>
            <div className="hidden sm:block absolute -top-4 -right-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl -z-10 opacity-60 rotate-12"></div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                Campus 2
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Gulshan E Taufeeq Campus
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Our secondary campus near PSO Pump in Gulshan E Taufeeq offers expanded facilities with modern
                infrastructure, specialized laboratories, and enhanced learning environments to accommodate our growing
                student community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-2xl">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-2 sm:mb-3" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">300+</p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Students</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mb-2 sm:mb-3" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-700">15+</p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Classrooms</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Gulshan E Taufeeq Near PSO Pump</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Secondary Campus Location</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">+92 (XXX) XXX-XXXX</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Campus 2 Office</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">8:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Monday to Friday</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-200 text-green-700 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}