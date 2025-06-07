import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Mail, Phone } from "lucide-react"

export default function RegistrationSuccessPage({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  const applicationId = searchParams.id || "APP-UNKNOWN"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/school-logo.png"
                alt="Miss Khadija Schooling System Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Miss Khadija Schooling System</h1>
                <p className="text-xs text-gray-600">Guiding Young Minds</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <CardTitle className="text-2xl">Application Submitted Successfully!</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">Application ID: {applicationId}</p>
                  <p className="text-green-600 text-sm mt-1">Please save this ID for your records</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">What happens next?</h3>
                  <div className="text-left space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">1</span>
                      </div>
                      <p className="text-gray-600">You will receive a confirmation email within 24 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">2</span>
                      </div>
                      <p className="text-gray-600">
                        Our admissions team will review your application (3-5 business days)
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">3</span>
                      </div>
                      <p className="text-gray-600">We will contact you to schedule an interview and campus visit</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center space-x-2 text-blue-700">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-700">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">admissions@misskhadija.edu</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Application Copy</span>
                  </Button>
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      Return to Homepage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
