import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, TreePine, BookOpen, Wifi } from "lucide-react"

const campusStats = [
  { number: "2", label: "Modern Campuses", icon: MapPin },
  { number: "15", label: "Acres of Land", icon: TreePine },
  { number: "50+", label: "Specialized Rooms", icon: BookOpen },
  { number: "100%", label: "WiFi Coverage", icon: Wifi },
]

export function CampusHero() {
  return (
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
          {campusStats.map((stat, index) => (
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
  )
}
