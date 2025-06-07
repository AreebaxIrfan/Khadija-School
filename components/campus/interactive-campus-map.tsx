"use client"

import { useState } from "react"

const InteractiveCampusMap = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  const buildings = [
    { id: 1, name: "Main Building", description: "The central hub of the campus." },
    { id: 2, name: "Library", description: "A vast collection of books and resources." },
    { id: 3, name: "Science Hall", description: "Home to science labs and classrooms." },
  ]

  const handleBuildingClick = (buildingId) => {
    setSelectedBuilding(buildingId)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Campus Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Map Area */}
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Campus Overview</h2>
          {/* Placeholder for the actual map image or interactive component */}
          <div className="bg-gray-100 h-64 flex items-center justify-center">
            <span>Map Placeholder</span>
          </div>

          <div className="mt-4">
            {buildings.map((building) => (
              <button
                key={building.id}
                className="block w-full text-left py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:ring focus:ring-green-300"
                onClick={() => handleBuildingClick(building.id)}
              >
                {building.name}
              </button>
            ))}
          </div>
        </div>

        {/* Building Information */}
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Building Information</h2>
          {selectedBuilding ? (
            <div>
              {buildings
                .filter((building) => building.id === selectedBuilding)
                .map((building) => (
                  <div key={building.id}>
                    <h3 className="text-xl font-bold">{building.name}</h3>
                    <p className="text-gray-700">{building.description}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Open
                    </span>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-500">Select a building to view its information.</p>
          )}
        </div>
      </div>

      {/* Additional Features (Optional) */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Additional Features</h2>
        <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Find Route
        </button>
      </div>
    </div>
  )
}

export default InteractiveCampusMap
