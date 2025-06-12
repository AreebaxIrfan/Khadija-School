import { CampusHero } from "@/components/campus/campus-hero"
import { CampusOverview } from "@/components/campus/campus-overview"
import { FacilitiesShowcase } from "@/components/campus/facilities-showcase"
import { VirtualTours } from "@/components/campus/virtual-tours"
import { InteractiveCampusMap } from "@/components/campus/interactive-campus-map"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/layout/footer"


export default function CampusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
     
      {/* Hero Section */}
      <CampusHero />

      {/* Campus Overview */}
      <CampusOverview />

      {/* Facilities Showcase */}
      <FacilitiesShowcase />

      {/* Virtual Tours */}
      <VirtualTours />

      {/* Interactive Campus Map */}
      <InteractiveCampusMap />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
