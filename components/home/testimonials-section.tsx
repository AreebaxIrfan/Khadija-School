import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
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
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
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
          {testimonials.map((testimonial, index) => (
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-green-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
