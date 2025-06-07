import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, FlaskConical, Clock } from "lucide-react"

export function VirtualTours() {
  return (
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
                Explore our primary campus with classrooms, administrative offices, library, cafeteria, and recreational
                facilities. See where learning comes to life every day.
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
                Discover our cutting-edge North Campus with advanced laboratories, technology centers, maker spaces, and
                innovation hubs designed for 21st-century learning.
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
  )
}
