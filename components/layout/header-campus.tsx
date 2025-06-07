import Link from "next/link"

const HeaderCampus = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mr-3">
                {/* Logo Placeholder */}
              </div>
              <span className="font-semibold text-xl text-gray-800">CampusConnect</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="text-green-600 hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-green-600 hover:text-green-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-green-600 hover:text-green-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link
              href="/apply"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-green-100" />
    </header>
  )
}

export default HeaderCampus
