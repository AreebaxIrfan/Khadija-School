import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/school-logo.png"
                alt="Miss Khadija Schooling System Logo"
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Miss Khadija Schooling System</h3>
                <p className="text-green-300 text-sm">Guiding Young Minds</p>
              </div>
            </div>
            <p className="text-green-200 text-sm">
              Empowering students through quality education and character development since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/campus" className="text-green-200 hover:text-white transition-colors">
                  Campus
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-green-200 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-green-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-green-200">info@misskhadija.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-green-200">123 Education Street, Learning City</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a
                  href="https://chat.whatsapp.com/your-community-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-green-300">© 2024 Miss Khadija Schooling System. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-green-300 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-green-300 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
