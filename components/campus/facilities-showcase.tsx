import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Computer, Library, Dumbbell, Utensils, TreePine } from "lucide-react"

const facilities = [
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
]

export function FacilitiesShowcase() {
  return (
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
  )
}
