import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  MapPin,
  Phone,
  Wifi,
  Utensils,
  Dumbbell,
  FlaskConical,
  Computer,
  Library,
  TreePine,
  Clock,
  Users,
  Award,
  Sparkles,
  Play,
  Camera,
  Navigation,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-blue-100/50 z-50 transition-all duration-300 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Kadija Schooling System
                </h1>
                <p className="text-xs text-gray-600 font-medium">Excellence in Education</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all"
              >
                About
              </Link>
              <Link
                href="/campus"
                className="text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
              >
                Campus
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all"
              >
                Register
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold">
              🏫 Our Beautiful Campus
            </Badge>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              World-Class
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                Learning Environment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our state-of-the-art campuses designed to inspire learning, creativity, and personal growth. Every
              space is thoughtfully crafted to provide the best educational experience.
            </p>
          </div>

          {/* Campus Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "2", label: "Modern Campuses", icon: MapPin },
              { number: "15", label: "Acres of Land", icon: TreePine },
              { number: "50+", label: "Specialized Rooms", icon: BookOpen },
              { number: "100%", label: "WiFi Coverage", icon: Wifi },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          {/* Main Campus */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-700 mb-4 px-4 py-2 font-semibold">Main Campus</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Central Learning Hub</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Our flagship campus spans 10 acres of beautifully landscaped grounds, featuring modern architecture
                  and cutting-edge facilities. From advanced science laboratories to spacious classrooms, every space is
                  designed to inspire learning and creativity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="text-2xl font-bold text-blue-700">300+</p>
                  <p className="text-gray-600 font-medium">Students</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl">
                  <Award className="w-8 h-8 text-indigo-600 mb-3" />
                  <p className="text-2xl font-bold text-indigo-700">25+</p>
                  <p className="text-gray-600 font-medium">Classrooms</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
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
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Monday to Friday</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Camera className="w-5 h-5 mr-2" />
                  Virtual Tour
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl -z-10 opacity-60"></div>
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
                  <FlaskConical className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-2xl font-bold text-green-700">8</p>
                  <p className="text-gray-600 font-medium">Science Labs</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <Computer className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="text-2xl font-bold text-purple-700">5</p>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">+1 (555) 987-6543</p>
                    <p className="text-gray-600">North Campus Office</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
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

      {/* Facilities Showcase */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzlDOTJBQyIgZmlsbE9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold shadow-sm">
              🏗️ World-Class Facilities
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Everything Students Need to Excel</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive facilities support every aspect of student development, from academic excellence to
              physical fitness and creative expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Advanced Science Labs",
                description:
                  "Fully equipped chemistry, physics, and biology laboratories with modern equipment, safety features, and digital microscopes.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                icon: Computer,
                title: "Technology Centers",
                description:
                  "State-of-the-art computer labs with latest software, high-speed internet, and programming environments.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-indigo-500 to-indigo-600",
                bgGradient: "from-indigo-50 to-indigo-100",
              },
              {
                icon: Library,
                title: "Digital Library",
                description:
                  "Extensive collection of books, digital resources, quiet study spaces, and research facilities for all students.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Dumbbell,
                title: "Sports Complex",
                description:
                  "Indoor gymnasium, outdoor courts, swimming pool, fitness center, and facilities for various sports activities.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
              {
                icon: Utensils,
                title: "Modern Cafeteria",
                description:
                  "Nutritious meals prepared fresh daily with options for various dietary requirements and healthy eating programs.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100",
              },
              {
                icon: TreePine,
                title: "Green Spaces",
                description:
                  "Beautiful gardens, outdoor classrooms, recreational areas, and eco-friendly spaces for relaxation and learning.",
                image: "/placeholder.svg?height=200&width=300",
                gradient: "from-emerald-500 to-emerald-600",
                bgGradient: "from-emerald-50 to-emerald-100",
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${facility.bgGradient} opacity-20`}></div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${facility.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold">
              🎥 Virtual Experience
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Our Campus Online</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take immersive virtual tours of our beautiful campuses and see our world-class facilities in action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Main Campus Virtual Tour"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <Button size="lg" className="bg-white/90 text-gray-800 hover:bg-white shadow-xl">
                    <Play className="w-6 h-6 mr-2" />
                    Tour Main Campus
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">360° View</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Main Campus Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore our primary campus with classrooms, administrative offices, library, cafeteria, and
                  recreational facilities. See where learning comes to life every day.
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>15-minute interactive tour</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="North Campus Virtual Tour"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <Button size="lg" className="bg-white/90 text-gray-800 hover:bg-white shadow-xl">
                    <FlaskConical className="w-6 h-6 mr-2" />
                    Tour Innovation Center
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">STEM Focus</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation Center Tour</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover our cutting-edge North Campus with advanced laboratories, technology centers, maker spaces,
                  and innovation hubs designed for 21st-century learning.
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>12-minute guided experience</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Campus Map */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold">🗺️ Campus Locations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Your Way Around</h2>
            <p className="text-xl text-gray-600">
              Our campuses are conveniently located with easy access to public transportation and major highways.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Campus Information</h3>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Main Campus</h4>
                        <p className="text-gray-600 mb-2">123 Education Street, Learning City, LC 12345</p>
                        <p className="text-sm text-gray-500 mb-3">Primary education hub with administrative offices</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Grades K-12
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            300+ Students
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">North Campus</h4>
                        <p className="text-gray-600 mb-2">456 Innovation Drive, Tech Valley, TV 67890</p>
                        <p className="text-sm text-gray-500 mb-3">STEM-focused campus with advanced laboratories</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            STEM Programs
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            200+ Students
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                      <Navigation className="w-5 h-5 mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl h-full">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-200 h-96 lg:h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUM5MkFDIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTAgNDBsNDAtNDBoLTQweiIvPjxwYXRoIGQ9Im0wIDQwbDQwLTQwaC00MHoiLz48L2c+PC9zdmc+')]"></div>
                    <div className="text-center z-10">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <MapPin className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Campus Map</h3>
                      <p className="text-gray-600 mb-6 max-w-md">
                        Explore our campus locations with detailed maps, directions, and nearby amenities.
                      </p>
                      <Button className="bg-white text-blue-700 hover:bg-gray-50 shadow-lg">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Launch Interactive Map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzek0zNCA5MGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTI4LTY1YzEuNjU3IDAgMy0xLjM0MyAzLTRzLTEuMzQzLTQtNC00LTQgMS4zNDMtNCA0IDEuMzQzIDQgNCA0em0yMy0xMWMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6bS02IDYwYzEuNjU3IDAgMy0xLjM0MyAzLTRzLTEuMzQzLTQtNC00LTQgMS4zNDMtNCA0IDEuMzQzIDQgNCA0em0yOSAyMmMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6bTMyIDYzYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptMTItODZjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTI4LTY1YzEuNjU3IDAgMy0xLjM0MyAzLTRzLTEuMzQzLTQtNC00LTQgMS4zNDMtNCA0IDEuMzQzIDQgNCA0em0yMy0xMWMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTYwIDkxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi０\
