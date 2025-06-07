"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  Award,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

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
              <Link
                href="/contact"
                className="text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
              >
                Contact
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
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-4 py-2 text-sm font-semibold">📞 Get in Touch</Badge>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Contact
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have questions about admissions, programs, or campus life? We're here to help! Reach out to us and we'll
              get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                subInfo: "Monday - Friday, 8AM - 5PM",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@kadijaschool.edu",
                subInfo: "We respond within 24 hours",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Education Street",
                subInfo: "Learning City, LC 12345",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Clock,
                title: "Office Hours",
                info: "8:00 AM - 5:00 PM",
                subInfo: "Monday through Friday",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                  <p className="text-gray-800 font-semibold mb-2">{contact.info}</p>
                  <p className="text-gray-600 text-sm">{contact.subInfo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admissions">Admissions</SelectItem>
                            <SelectItem value="programs">Academic Programs</SelectItem>
                            <SelectItem value="campus-tour">Campus Tour</SelectItem>
                            <SelectItem value="tuition">Tuition & Fees</SelectItem>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Enter message subject"
                        required
                        className="border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                        className="border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-blue-600" />
                    Quick Contact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Admissions Office</h4>
                        <p className="text-gray-600 mb-2">For enrollment and application questions</p>
                        <p className="text-blue-600 font-medium">admissions@kadijaschool.edu</p>
                        <p className="text-blue-600 font-medium">+1 (555) 123-4567 ext. 101</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Academic Affairs</h4>
                        <p className="text-gray-600 mb-2">For curriculum and program information</p>
                        <p className="text-green-600 font-medium">academics@kadijaschool.edu</p>
                        <p className="text-green-600 font-medium">+1 (555) 123-4567 ext. 102</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Campus Tours</h4>
                        <p className="text-gray-600 mb-2">Schedule a visit to our campus</p>
                        <p className="text-purple-600 font-medium">tours@kadijaschool.edu</p>
                        <p className="text-purple-600 font-medium">+1 (555) 123-4567 ext. 103</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campus Locations */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Campus Locations</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-bold text-gray-900 mb-2">Main Campus</h4>
                      <p className="text-gray-600 mb-2">
                        123 Education Street
                        <br />
                        Learning City, LC 12345
                      </p>
                      <p className="text-sm text-gray-500">Primary campus with grades K-12</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-bold text-gray-900 mb-2">North Campus (STEM Center)</h4>
                      <p className="text-gray-600 mb-2">
                        456 Innovation Drive
                        <br />
                        Tech Valley, TV 67890
                      </p>
                      <p className="text-sm text-gray-500">Advanced STEM programs and laboratories</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                      <MapPin className="w-5 h-5 mr-2" />
                      View on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-gray-900 mb-1">What are the admission requirements?</h4>
                      <p className="text-sm text-gray-600">Learn about our admission process and requirements</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-gray-900 mb-1">What programs do you offer?</h4>
                      <p className="text-sm text-gray-600">Explore our comprehensive academic programs</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-gray-900 mb-1">How can I schedule a campus tour?</h4>
                      <p className="text-sm text-gray-600">Book a visit to see our facilities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our beautiful campuses and see why families choose Kadija</p>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 h-96 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUM5MkFDIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTAgNDBsNDAtNDBoLTQweiIvPjxwYXRoIGQ9Im0wIDQwbDQwLTQwaC00MHoiLz48L2c+PC9zdmc+')]"></div>
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Interactive Campus Map</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Explore our campus locations with detailed maps, directions, and nearby amenities.
                </p>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-50 shadow-xl">
                  <Sparkles className="w-6 h-6 mr-2" />
                  Launch Interactive Map
                </Button>
              </div>
            </div>
          </Card>
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
