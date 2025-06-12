"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Sparkles, Building, BookOpen, FlaskRoundIcon as Flask } from "lucide-react";

export function InteractiveCampusMap() {
  const [selectedBuilding, setSelectedBuilding] = useState<number | null>(null);

  const buildings = [
    { id: 1, name: "Main Building", description: "The central hub of the campus.", icon: Building },
    { id: 2, name: "Library", description: "A vast collection of books and resources.", icon: BookOpen },
    { id: 3, name: "Science Hall", description: "Home to science labs and classrooms.", icon: Flask },
  ];

  // Google Maps directions URL for Gulshan e Noor Taiser Town, Karachi
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Gulshan+e+Noor+Taiser+Town,+Karachi";

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="bg-green-100 text-green-700 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
            🗺️ Campus Locations
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Find Your Way Around
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            Our campuses are conveniently located with easy access to public transportation and major highways.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl h-full">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Campus Information
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                        Main Campus
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base mb-2">
                        Gulshan e Noor Taiser Town, Karachi
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        Primary education hub with administrative offices
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Grades K-12
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          300+ Students
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                        North Campus
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base mb-2">
                        456 Innovation Drive, Tech Valley, TV 67890
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        STEM-focused campus with advanced laboratories
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          STEM Programs
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          200+ Students
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                    onClick={() => window.open(googleMapsUrl, "_blank")}
                    aria-label="Get directions to Gulshan e Noor Taiser Town campus"
                  >
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-green-200 text-green-700 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                    onClick={() => window.location.href = "tel:+923XXXXXXXXX"} // Replace with actual phone number
                    aria-label="Call for campus information"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    Call for Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl h-full">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-100 to-emerald-200 h-64 sm:h-80 md:h-96 lg:h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUM5MkFDIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTAgNDBsNDAtNDBoLTQweiIvPjxwYXRoIGQ9Im0wIDQwbDQwLTQwaC00MHoiLz48L2c+PC9zdmc+')] sm:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUM5MkFDIiBmaWxsT3BhY2l0eT0iMC4xIiBmaWxsUnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTAgNDBsNDAtNDBoLTQweiIvPjxwYXRoIGQ9Im0wIDQwbDQwLTQwaC00MHoiLz48L2c+PC9zdmc+')]"></div>
                  <div className="text-center z-10 px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Interactive Campus Map
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-sm sm:max-w-md mx-auto">
                      Explore our campus locations with detailed maps, directions, and nearby amenities.
                    </p>
                    <Button
                      className="bg-white text-green-700 hover:bg-gray-50 shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                      onClick={() => window.open(googleMapsUrl, "_blank")}
                      aria-label="Launch interactive map for Gulshan e Noor Taiser Town campus"
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      Launch Interactive Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}