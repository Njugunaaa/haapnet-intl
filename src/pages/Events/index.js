"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"
import HeroSection from '../../components/HeroSection'

const Events = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [selectedYear, setSelectedYear] = useState("all")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
      const diff = endOfYear - now

      setTimeRemaining({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const events2025 = [
    {
      id: 1,
      title: "Women's Leadership Forum - Empowering Change",
      excerpt:
        "Successfully conducted our inaugural Women's Leadership Forum with 180 women leaders from across Africa.",
      date: "2025-09-12",
      image: "images/IMG-20250923-WA0011.jpg",
    },
  ]

  const events2024 = [
    {
      id: 2,
      title: "Nairobi Leadership & Development Seminar",
      excerpt:
        "Over 100 participants gathered for our transformative two-day seminar in partnership with LifeSource Church.",
      date: "2024-09-13",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      id: 3,
      title: "Pan-African Agricultural Innovation Conference",
      excerpt:
        "Convened 300+ smallholder farmers and policymakers to showcase climate-smart farming innovations.",
      date: "2024-05-22",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    },
  ]

  const events2023 = [
    {
      id: 4,
      title: "Community Health Workers Graduation Ceremony",
      excerpt:
        "Celebrated the graduation of 200 community health volunteers across East Africa.",
      date: "2023-11-10",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      id: 5,
      title: "Water Infrastructure Partnership Launch with WaterAid",
      excerpt:
        "Launched strategic partnership to bring clean water access to 15,000 people with solar-powered systems.",
      date: "2023-04-15",
      image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=800&q=80",
    },
  ]

  const allEvents = [
    ...events2025.map(e => ({ ...e, year: "2025" })),
    ...events2024.map(e => ({ ...e, year: "2024" })),
    ...events2023.map(e => ({ ...e, year: "2023" })),
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Filter events
  const filteredEvents =
    selectedYear === "all"
      ? allEvents
      : allEvents.filter(event => event.year === selectedYear)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <HeroSection 
        title="News & Events"
        description="Celebrating our journey of impact, transformation, and community empowerment across Africa."
        gradientFrom="from-red-600"
        gradientVia="via-red-500"
        gradientTo="to-rose-400"
      />

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="inline-block px-6 py-3 bg-gray-100 text-gray-600 rounded-lg mb-8">
            No upcoming events scheduled at this time
          </div>

          {/* Live Timer */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
            <p className="text-sm uppercase tracking-wider mb-4 text-white/80">Time Remaining in 2025</p>
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["days","hours","minutes","seconds"].map((key) => (
                <div key={key} className="bg-white/10 rounded-xl p-6">
                  <div className="text-5xl font-bold">{timeRemaining[key]}</div>
                  <div className="text-sm text-white/80 capitalize">{key}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70 mt-4">Stay tuned for our 2026 event calendar</p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events & Milestones</h2>

          {/* Sticky Filter Bar */}
          <div className="sticky top-20 z-10 flex justify-center mb-12 gap-4 bg-neutral py-3">
            {["all", "2025", "2024", "2023"].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  selectedYear === year
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {year === "all" ? "All Years" : year}
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-primary font-semibold">{formatDate(event.date)}</time>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{event.title}</h3>
                  <p className="text-gray-600 mt-3">{event.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Events
