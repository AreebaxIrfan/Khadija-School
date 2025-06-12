"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Award } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/home/cta-section";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000); // Reset after 3s
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        {/* Decorative Floating Elements */}
        <div className="hidden sm:block absolute top-10 left-10 w-12 sm:w-16 h-12 sm:h-16 bg-green-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-10 sm:w-12 h-10 sm:h-12 bg-emerald-300 rounded-full opacity-50 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold animate-pulse">
              Contact Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
              We’d love to hear from you. Send us a message, and we’ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl animate-fade-in-up">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm sm:text-base">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="Enter your first name" required className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm sm:text-base">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Enter your last name" required className="text-sm sm:text-base" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required className="text-sm sm:text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="text-sm sm:text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">
                      Subject *
                    </Label>
                    <Input id="subject" placeholder="What is this regarding?" required className="text-sm sm:text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Message *
                    </Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} required className="text-sm sm:text-base" />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-sm sm:text-base animate-fade-in">
                      Message sent successfully! We’ll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  subtitle: "Call us during business hours",
                  details: [
                    "+1 (555) 123-4567",
                    "Monday - Friday: 8:00 AM - 5:00 PM",
                    "Saturday: 9:00 AM - 2:00 PM",
                  ],
                },
                {
                  icon: Mail,
                  title: "Email",
                  subtitle: "Send us an email anytime",
                  details: ["info@misskhadija.edu", "We respond within 24 hours"],
                },
                {
                  icon: MapPin,
                  title: "Address",
                  subtitle: "Visit our campus",
                  details: ["123 Education Street", "Learning City, LC 12345"],
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  subtitle: "Join our community",
                  details: [
                    <a
                      key="whatsapp"
                      href="https://chat.whatsapp.com/your-community-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors text-sm sm:text-base"
                    >
                      Miss Khadija’s Community
                    </a>,
                    "Connect with other parents and students",
                  ],
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm sm:text-base text-gray-600">
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm animate-pulse">
              Office Hours
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              When to Reach Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Our team is available during these hours to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Admissions Office",
                hours: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
              },
              {
                icon: Users,
                title: "Student Services",
                hours: ["Monday - Friday: 7:30 AM - 4:00 PM", "Saturday: By appointment", "Sunday: Closed"],
              },
              {
                icon: Award,
                title: "Academic Office",
                hours: ["Monday - Friday: 8:00 AM - 4:30 PM", "Saturday: 10:00 AM - 1:00 PM", "Sunday: Closed"],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-gray-600">
                    {item.hours.map((hour, i) => (
                      <p key={i}>{hour}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}