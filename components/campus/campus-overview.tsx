import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, MapPin, Phone, Clock, Camera, Navigation } from "lucide-react"

export function CampusOverview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        {/* Main Campus */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-2 font-semibold">Main Campus</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Central Learning Hub</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our flagship campus spans 10 acres of beautifully landscaped grounds, featuring modern architecture and
                cutting-edge facilities. From advanced science laboratories to spacious classrooms, every space is
                designed to inspire learning and creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-2xl font-bold text-green-700">300+</p>
                <p className="text-gray-600 font-medium">Students</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl">
                <Award className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-2xl font-bold text-emerald-700">25+</p>
                <p className="text-gray-600 font-medium">Classrooms</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">123 Education Street</p>
                  <p className="text-gray-600">Learning City, LC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Main Campus Office</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">8:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Monday to Friday</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Camera className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-200 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 group">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Main Campus Building"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-3xl -z-10 opacity-60"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl -z-10 opacity-60 rotate-12"></div>
          </div>
        </div>

        {/* North Campus */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 group">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="North Campus Innovation Center"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl -z-10 opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl -z-10 opacity-60 rotate-12"></div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-2 font-semibold">North Campus</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovation & STEM Center</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our cutting-edge North Campus focuses on STEM education and innovation. With specialized laboratories,
                maker spaces, and technology centers, it's where our students explore the frontiers of science,
                technology, engineering, and mathematics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <Award className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-2xl font-bold text-green-700">8</p>
                <p className="text-gray-600 font-medium">Science Labs</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl">
                <Users className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-2xl font-bold text-emerald-700">5</p>
                <p className="text-gray-600 font-medium">Tech Centers</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">456 Innovation Drive</p>
                  <p className="text-gray-600">Tech Valley, TV 67890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">+1 (555) 987-6543</p>
                  <p className="text-gray-600">North Campus Office</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">8:30 AM - 5:00 PM</p>
                  <p className="text-gray-600">Monday to Friday</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Camera className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-200 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
