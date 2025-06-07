import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Computer, BookOpen, Microscope, Calculator, Wifi } from "lucide-react"

const facilities = [
  {
    icon: FlaskConical,
    title: "Advanced Science Laboratories",
    description:
      "Fully equipped chemistry, physics, and biology laboratories with modern equipment, safety features, fume hoods, and digital microscopes for hands-on scientific learning.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    features: ["Chemistry Lab", "Physics Lab", "Biology Lab", "Safety Equipment"],
  },
  {
    icon: Computer,
    title: "Modern Computer Laboratories",
    description:
      "State-of-the-art computer labs with latest hardware, high-speed internet, programming software, and multimedia tools for digital literacy and technology education.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    features: ["Latest Computers", "High-Speed Internet", "Programming Software", "Multimedia Tools"],
  },
  {
    icon: Microscope,
    title: "Research & Innovation Lab",
    description:
      "Dedicated space for student research projects with advanced microscopes, measurement tools, and equipment for scientific investigation and innovation.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-teal-500 to-teal-600",
    bgGradient: "from-teal-50 to-teal-100",
    features: ["Digital Microscopes", "Research Tools", "Project Space", "Innovation Hub"],
  },
  {
    icon: BookOpen,
    title: "Digital Library & Resource Center",
    description:
      "Comprehensive library with extensive book collection, digital resources, quiet study areas, and research facilities supporting academic excellence.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    features: ["Book Collection", "Digital Resources", "Study Areas", "Research Support"],
  },
  {
    icon: Calculator,
    title: "Mathematics Learning Center",
    description:
      "Specialized mathematics classroom with interactive whiteboards, mathematical tools, calculators, and visual aids for enhanced mathematical understanding.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-50 to-amber-100",
    features: ["Interactive Boards", "Math Tools", "Calculators", "Visual Aids"],
  },
  {
    icon: Wifi,
    title: "Smart Classrooms",
    description:
      "Technology-integrated classrooms with projectors, smart boards, audio systems, and wireless connectivity for modern interactive learning experiences.",
    image: "/placeholder.svg?height=200&width=300",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    features: ["Smart Boards", "Projectors", "Audio Systems", "WiFi Access"],
  },
]

export function FacilitiesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzlDOTJBQyIgZmlsbE9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge className="bg-white/80 text-green-700 mb-6 px-4 py-2 text-sm font-semibold shadow-sm">
            🏗️ World-Class Facilities
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Advanced Learning Environments</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive facilities across both campuses support every aspect of student development, featuring
            modern science laboratories, computer labs, and technology-integrated learning spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{facility.description}</p>

                {/* Features List */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-green-700 mb-2">Key Features:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence in Education Infrastructure</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Both our campuses are equipped with modern facilities designed to provide students with hands-on learning
              experiences in science, technology, and academic research.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                <div className="text-gray-600">Science Labs</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <div className="text-gray-600">Computer Labs</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">35+</div>
                <div className="text-gray-600">Smart Classrooms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
