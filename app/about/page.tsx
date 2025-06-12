import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Eye, Heart, Star} from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/home/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-100 ">
     
      {/* Hero Section */}
      <section className="pt-32 pb-2">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">About Us</Badge>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story & Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 3+ years, Kadija Schooling System has been dedicated to providing exceptional education that
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

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-green-100">
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
                name: "Umer Khan",
                role: "Founder & Principal",
                image: "/u.png",
                bio: "With over 20 years in education,Sir Umer Khan founded the school with a vision to transform learning.",
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
      <section className="py-20 bg-gradient-to-br from-blue-100 to-green-100">
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
     <CTASection/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
