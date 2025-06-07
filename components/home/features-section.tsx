import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, MapPin, Star, Target } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum designed to challenge and inspire students to reach their full potential with personalized learning approaches.",
    color: "blue",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Highly qualified and passionate teachers committed to student success, growth, and individual development.",
    color: "indigo",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description:
      "Focus on character building, leadership skills, creativity, and comprehensive extracurricular activities.",
    color: "purple",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Modern Facilities",
    description:
      "State-of-the-art classrooms, advanced laboratories, digital library, and world-class sports facilities.",
    color: "cyan",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Star,
    title: "Individual Attention",
    description:
      "Small class sizes ensuring personalized attention, mentorship, and tailored learning for every student.",
    color: "emerald",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Target,
    title: "Future Ready",
    description:
      "Preparing students for tomorrow's challenges with 21st-century skills, technology integration, and global perspective.",
    color: "orange",
    gradient: "from-green-500 to-green-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge className="bg-green-100 text-green-700 mb-6 px-4 py-2 text-sm font-semibold">Why Choose Kadija</Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Excellence in Every Aspect</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive education that goes beyond academics, fostering creativity, critical thinking, and
            character development in every student.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:from-white hover:to-green-50/30 overflow-hidden"
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
