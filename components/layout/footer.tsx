import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4wMyIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* School Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Kadija Schooling System</h3>
                  <p className="text-blue-300 text-sm font-medium">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering students to achieve their dreams through quality education, character development, and
                holistic growth since 2009.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold">yt</span>
                </div>
              </div>
            </div>

            {/* Quick Links - Removed bullet points */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Academic Programs", href: "/programs" },
                  { name: "Campus Life", href: "/campus" },
                  { name: "Admissions", href: "/register" },
                  { name: "Faculty", href: "/faculty" },
                  { name: "News & Events", href: "/news" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Monday - Friday, 8AM - 5PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">info@kadijaschool.edu</p>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">123 Education Street</p>
                    <p className="text-gray-400 text-sm">Learning City, LC 12345</p>
                  </div>
                </div>

                {/* WhatsApp Community Link */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <a
                      href="https://chat.whatsapp.com/your-community-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-green-400 transition-colors"
                    >
                      Miss Khadija's WhatsApp Community
                    </a>
                    <p className="text-gray-400 text-sm">Join our educational community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Subscribe to our newsletter for the latest updates, events, and educational insights.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition-all"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-l-none rounded-r-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <input type="checkbox" className="rounded border-gray-600 bg-gray-800" />
                  <span>I agree to receive newsletters and updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2024 Kadija Schooling System. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">Made with ❤️ for education and excellence</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
