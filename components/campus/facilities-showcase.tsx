const FacilitiesShowcase = () => {
  const facilities = [
    {
      name: "Modern Classrooms",
      description: "Equipped with the latest technology for interactive learning.",
      icon: "fas fa-chalkboard-teacher",
    },
    {
      name: "Advanced Laboratories",
      description: "State-of-the-art labs for scientific research and experimentation.",
      icon: "fas fa-flask",
    },
    {
      name: "Extensive Library",
      description: "A vast collection of books and resources for academic pursuits.",
      icon: "fas fa-book",
    },
    {
      name: "Sports Complex",
      description: "Facilities for various sports and recreational activities.",
      icon: "fas fa-futbol",
    },
    {
      name: "Cafeteria",
      description: "A comfortable space to relax and enjoy meals.",
      icon: "fas fa-utensils",
    },
    {
      name: "Auditorium",
      description: "A large venue for events, performances, and presentations.",
      icon: "fas fa-theater-masks",
    },
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Facilities</h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-center">
          Explore our campus and discover the resources available to support your academic journey.
        </p>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {facilities.map((facility, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-700">
                    <i className={facility.icon + " fa-lg"}></i>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{facility.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{facility.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default FacilitiesShowcase
