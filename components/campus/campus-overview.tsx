import { AcademicCapIcon, BuildingOfficeIcon, UserGroupIcon, LibraryIcon } from "@heroicons/react/24/outline"

const CampusOverview = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Campus Overview</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Information about the campus and its facilities.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Students</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">5,000+</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Number of Departments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">15</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Faculty</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">300+</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Campus Size</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">100 Acres</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 px-4 py-5 sm:px-6">
        <h4 className="text-md font-semibold text-gray-700">Key Features</h4>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-100 text-green-600">
                <AcademicCapIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Academic Excellence</p>
                <p className="text-sm text-gray-500 truncate">Top-ranked programs and faculty.</p>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-100 text-green-600">
                <BuildingOfficeIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Modern Facilities</p>
                <p className="text-sm text-gray-500 truncate">State-of-the-art buildings and labs.</p>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-100 text-green-600">
                <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Vibrant Community</p>
                <p className="text-sm text-gray-500 truncate">Diverse student body and active clubs.</p>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-100 text-green-600">
                <LibraryIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Extensive Library</p>
                <p className="text-sm text-gray-500 truncate">Vast collection of books and resources.</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:px-6 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 bg-gradient-to-r"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default CampusOverview
