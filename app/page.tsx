import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Play,
  Calendar,
  Bell,
  Sparkles,
  Target,
  Send,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
                className="text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
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
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all"
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

      {/* Announcement Banner */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold">Why Choose Kadija</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Excellence in Every Aspect</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive education that goes beyond academics, fostering creativity, critical thinking,
              and character development in every student.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description:
                  "Rigorous curriculum designed to challenge and inspire students to reach their full potential with personalized learning approaches.",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Highly qualified and passionate teachers committed to student success, growth, and individual development.",
                color: "indigo",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Award,
                title: "Holistic Development",
                description:
                  "Focus on character building, leadership skills, creativity, and comprehensive extracurricular activities.",
                color: "purple",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: MapPin,
                title: "Modern Facilities",
                description:
                  "State-of-the-art classrooms, advanced laboratories, digital library, and world-class sports facilities.",
                color: "cyan",
                gradient: "from-cyan-500 to-cyan-600",
              },
              {
                icon: Star,
                title: "Individual Attention",
                description:
                  "Small class sizes ensuring personalized attention, mentorship, and tailored learning for every student.",
                color: "emerald",
                gradient: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Target,
                title: "Future Ready",
                description:
                  "Preparing students for tomorrow's challenges with 21st-century skills, technology integration, and global perspective.",
                color: "orange",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:from-white hover:to-blue-50/30 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzlDOTJBQyIgZmlsbE9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold shadow-sm">
              Student & Parent Voices
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from parents, students, and alumni about their transformative experience at Kadija
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Parent of Grade 8 Student",
                content:
                  "Kadija School has transformed my daughter's learning experience. The teachers are exceptional and truly care about each student's success. The holistic approach to education is remarkable.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Ahmed Hassan",
                role: "Alumni, Class of 2020",
                content:
                  "The foundation I received at Kadija prepared me excellently for university and beyond. The values, knowledge, and confidence I gained continue to guide me in all my endeavors.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Maria Rodriguez",
                role: "Current Grade 11 Student",
                content:
                  "I love the supportive environment and diverse learning opportunities. The school feels like a second home where I can explore my interests and grow as a person.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzek0zNCA5MGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTI5IDIyYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptMzIgNjNjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTUtNSAyLjI0LTUgNSAyLjI0IDUgNSA1em01Ny0xM2MyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTYwIDkxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTEyIDYwYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Take the first step towards your child's bright future. Experience the difference of quality education at
              Kadija Schooling System.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/campus">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Calendar className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                  Schedule a Visit
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Apply Now
                  <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4wMyIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* School Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Kadija Schooling System</h3>
                    <p className="text-blue-300 text-sm font-medium">Excellence in Education</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Empowering students to achieve their dreams through quality education, character development, and
                  holistic growth since 2009.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">yt</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Academic Programs", href: "/programs" },
                    { name: "Campus Life", href: "/campus" },
                    { name: "Admissions", href: "/register" },
                    { name: "Faculty", href: "/faculty" },
                    { name: "News & Events", href: "/news" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Contact Info
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Monday - Friday, 8AM - 5PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">info@kadijaschool.edu</p>
                      <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">123 Education Street</p>
                      <p className="text-gray-400 text-sm">Learning City, LC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Stay Connected
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Subscribe to our newsletter for the latest updates, events, and educational insights.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-l-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition-all"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-l-none rounded-r-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800" />
                    <span>I agree to receive newsletters and updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">© 2024 Kadija Schooling System. All rights reserved.</p>
                <p className="text-gray-500 text-sm mt-1">Made with ❤️ for education and excellence</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
