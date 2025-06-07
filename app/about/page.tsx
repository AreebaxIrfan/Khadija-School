import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Eye, Heart, Star, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Kadija Schooling System</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-green-600 font-medium">
                About
              </Link>
              <Link href="/campus" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Campus
              </Link>
              <Link href="/register" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Register
              </Link>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">About Us</Badge>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story & Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, Kadija Schooling System has been dedicated to providing exceptional education that
              nurtures young minds and builds tomorrow's leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class education that empowers students to excel academically, develop strong
                  character, and become responsible global citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading educational institution that inspires lifelong learning, fosters innovation, and
                  creates future leaders who will shape a better world for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, Integrity, Compassion, Innovation, and Respect. These core values guide everything we do
                  and shape the character of our students and community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4">Our History</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">15+ Years of Educational Excellence</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2009
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Foundation</h4>
                    <p className="text-gray-600">
                      Kadija Schooling System was established with a vision to provide quality education to the
                      community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    2015
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expansion</h4>
                    <p className="text-gray-600">
                      Opened our second campus and introduced advanced STEM programs and modern facilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation</h4>
                    <p className="text-gray-600">
                      Pioneered digital learning initiatives and received accreditation for educational excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Present</h4>
                    <p className="text-gray-600">
                      Continuing to lead in educational innovation with 500+ students and 50+ dedicated faculty members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="School history and achievements"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team is committed to educational excellence and student success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Amina Kadija",
                role: "Founder & Principal",
                image: "/placeholder.svg?height=300&width=300",
                bio: "With over 20 years in education, Dr. Kadija founded the school with a vision to transform learning.",
              },
              {
                name: "Prof. Hassan Ahmed",
                role: "Academic Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Leading our academic programs with expertise in curriculum development and educational innovation.",
              },
              {
                name: "Ms. Sarah Johnson",
                role: "Student Affairs Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Dedicated to student welfare and creating a supportive learning environment for all students.",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Achievements</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Accomplishments</h2>
            <p className="text-xl text-gray-600">Recognition and awards that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Graduation Rate", icon: Award },
              { number: "15+", label: "Awards Won", icon: Star },
              { number: "500+", label: "Alumni Success", icon: Users },
              { number: "100%", label: "Teacher Certification", icon: BookOpen },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Educational Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference of quality education at Kadija Schooling System
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/campus">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Visit Our Campus
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
