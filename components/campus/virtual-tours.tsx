const VirtualTours = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Explore Our Campus Virtually</h2>
          <p className="text-gray-600 mt-2">
            Take a virtual tour and discover our state-of-the-art facilities and vibrant campus life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Virtual Tour Card 1 */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="Campus Tour 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Science Labs</h3>
              <p className="text-gray-600 mb-3">
                Explore our cutting-edge science labs equipped with the latest technology.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-700 text-sm font-medium py-1 px-2 rounded-full">Featured</span>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Take a Tour
                </a>
              </div>
            </div>
          </div>

          {/* Virtual Tour Card 2 */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="Campus Tour 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Library & Learning Center</h3>
              <p className="text-gray-600 mb-3">Discover our extensive library and collaborative learning spaces.</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-700 text-sm font-medium py-1 px-2 rounded-full">New</span>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Take a Tour
                </a>
              </div>
            </div>
          </div>

          {/* Virtual Tour Card 3 */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="Campus Tour 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Union</h3>
              <p className="text-gray-600 mb-3">Experience the heart of campus life at our vibrant student union.</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-700 text-sm font-medium py-1 px-2 rounded-full">Popular</span>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Take a Tour
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-block text-green-600 hover:underline font-semibold">
            View All Virtual Tours
          </a>
        </div>
      </div>
    </section>
  )
}

export default VirtualTours
