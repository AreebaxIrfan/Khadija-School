import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzek0zNCA5MGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMS42NTcgMCAzLTEuMzQzIDMtNHMtMS4zNDMtNC00LTQtNCAxLjM0My00IDQgMS4zNDMgNCA0IDR6bTI5IDIyYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptMzIgNjNjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTUtNSAyLjI0LTUgNSAyLjI0IDUgNSA1em01Ny0xM2MyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTYwIDkxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6TTEyIDYwYzEuMTA1IDAgMi0uODk1IDItMnMtLjg5NS0yLTItMi0yIC44OTUtMiAyIC44OTUgMiAyIDJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-300/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-pink-300/20 rounded-full animate-bounce delay-300"></div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-yellow-300 animate-spin" />
          </div>
          <h2 className="text-5xl font-bold mb-6 animate-pulse">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Take the first step towards your child's bright future. Experience the difference of quality education at
            Kadija Schooling System.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/campus">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                Schedule a Visit
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white bg-green-700 hover:text-green-700 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
              >
                Apply Now
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
