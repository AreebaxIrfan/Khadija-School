import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TreePine, BookOpen, Wifi } from "lucide-react";

const campusStats = [
  { number: "2", label: "Modern Campuses", icon: MapPin },
  { number: "15", label: "Acres of Land", icon: TreePine },
  { number: "50+", label: "Specialized Rooms", icon: BookOpen },
  { number: "100%", label: "WiFi Coverage", icon: Wifi },
];

export function CampusHero() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-100/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="bg-green-100 text-green-700 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
            🏫 Our Beautiful Campus
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            World-Class
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent block">
              Learning Environment
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mt-4 sm:mt-6 mx-auto leading-relaxed">
            Explore our state-of-the-art campuses designed to inspire learning, creativity, and personal growth. Every
            space is thoughtfully crafted to provide the best educational experience.
          </p>
        </div>

        {/* Campus Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {campusStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-2">{stat.number}</p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}