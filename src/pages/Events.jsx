"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const Events = () => {
  const [viewMode, setViewMode] = useState("list") // "list" or "calendar"
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Events" },
    { id: "workshop", name: "Workshops" },
    { id: "training", name: "Training" },
    { id: "conference", name: "Conferences" },
    { id: "community", name: "Community Events" },
  ]

  const events = [
    {
      id: 1,
      title: "Community Health Workshop",
      description:
        "Comprehensive training on community health promotion, disease prevention, and health education techniques for community health volunteers.",
      date: "2024-02-15",
      time: "09:00 - 16:00",
      location: "Mombasa Community Center",
      address: "Mombasa Road, Mombasa County",
      category: "workshop",
      capacity: 50,
      registered: 35,
      price: "Free",
      image: "https://via.placeholder.com/400x250?text=Health+Workshop",
      organizer: "HAAPNET Health Team",
      requirements: ["Basic literacy", "Community health interest"],
      agenda: [
        "09:00 - Registration and Welcome",
        "09:30 - Community Health Fundamentals",
        "11:00 - Disease Prevention Strategies",
        "12:30 - Lunch Break",
        "13:30 - Health Education Techniques",
        "15:00 - Practical Exercises",
        "16:00 - Closing and Certificates",
      ],
    },
    {
      id: 2,
      title: "Annual Impact Conference",
      description:
        "Join us for our flagship annual conference showcasing community achievements, sharing best practices, and planning for the future.",
      date: "2024-03-20",
      time: "08:00 - 17:00",
      location: "Nairobi Convention Center",
      address: "University Way, Nairobi",
      category: "conference",
      capacity: 300,
      registered: 180,
      price: "1,500 KES",
      image: "https://via.placeholder.com/400x250?text=Impact+Conference",
      organizer: "HAAPNET Leadership Team",
      requirements: ["Registration required", "Professional attire"],
      agenda: [
        "08:00 - Registration and Networking",
        "09:00 - Opening Ceremony",
        "10:00 - Keynote: Community-Led Development",
        "11:30 - Panel: Success Stories",
        "13:00 - Lunch and Networking",
        "14:00 - Workshops (Multiple tracks)",
        "16:00 - Planning for 2024",
        "17:00 - Closing Ceremony",
      ],
    },
    {
      id: 3,
      title: "Microfinance Training Session",
      description:
        "Intensive training for women entrepreneurs on business planning, financial management, and accessing microfinance services.",
      date: "2024-02-28",
      time: "10:00 - 15:00",
      location: "Kisumu Training Hub",
      address: "Kisumu-Kakamega Road, Kisumu",
      category: "training",
      capacity: 30,
      registered: 28,
      price: "Free",
      image: "https://via.placeholder.com/400x250?text=Microfinance+Training",
      organizer: "HAAPNET Women's Program",
      requirements: ["Women entrepreneurs", "Existing or planned business"],
      agenda: [
        "10:00 - Welcome and Introductions",
        "10:30 - Business Planning Basics",
        "12:00 - Financial Management",
        "13:00 - Lunch Break",
        "14:00 - Accessing Microfinance",
        "15:00 - Action Planning and Next Steps",
      ],
    },
    {
      id: 4,
      title: "Youth Leadership Bootcamp",
      description:
        "Intensive three-day leadership development program for young people aged 18-30, focusing on community organizing and project management.",
      date: "2024-03-05",
      time: "09:00 - 17:00",
      location: "Nakuru Youth Center",
      address: "Nakuru Town, Nakuru County",
      category: "training",
      capacity: 40,
      registered: 32,
      price: "500 KES",
      image: "https://via.placeholder.com/400x250?text=Youth+Leadership",
      organizer: "HAAPNET Youth Program",
      requirements: ["Age 18-30", "Community leadership interest", "3-day commitment"],
      agenda: ["Day 1: Leadership Foundations", "Day 2: Project Management", "Day 3: Community Organizing"],
    },
    {
      id: 5,
      title: "Sustainable Agriculture Field Day",
      description:
        "Hands-on demonstration of climate-smart agriculture techniques, organic farming methods, and sustainable land management practices.",
      date: "2024-03-12",
      time: "08:00 - 16:00",
      location: "HAAPNET Demo Farm, Kiambu",
      address: "Kiambu County",
      category: "workshop",
      capacity: 60,
      registered: 45,
      price: "Free",
      image: "https://via.placeholder.com/400x250?text=Agriculture+Field+Day",
      organizer: "HAAPNET Agriculture Team",
      requirements: ["Farming interest", "Outdoor activity suitable clothing"],
      agenda: [
        "08:00 - Registration and Farm Tour",
        "09:00 - Climate-Smart Agriculture",
        "11:00 - Organic Farming Methods",
        "12:30 - Lunch (Farm-to-table)",
        "13:30 - Soil Health Management",
        "15:00 - Q&A and Networking",
        "16:00 - Closing",
      ],
    },
    {
      id: 6,
      title: "Community Fundraising Gala",
      description:
        "Annual fundraising dinner celebrating community achievements and raising funds for upcoming development projects.",
      date: "2024-04-18",
      time: "18:00 - 22:00",
      location: "Safari Park Hotel",
      address: "Thika Road, Nairobi",
      category: "community",
      capacity: 200,
      registered: 120,
      price: "5,000 KES",
      image: "https://via.placeholder.com/400x250?text=Fundraising+Gala",
      organizer: "HAAPNET Board of Directors",
      requirements: ["Formal attire", "Advance registration required"],
      agenda: [
        "18:00 - Cocktail Reception",
        "19:00 - Welcome and Dinner",
        "20:00 - Impact Presentations",
        "21:00 - Fundraising Appeal",
        "22:00 - Networking and Close",
      ],
    },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatShortDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Events & Training</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Join our workshops, training sessions, and community events designed to build skills, share knowledge, and
              strengthen our network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-accent text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              className="flex bg-gray-100 rounded-lg p-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  viewMode === "list" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  viewMode === "calendar" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Calendar View
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          {viewMode === "list" ? (
            /* List View */
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Date & Image */}
                    <div className="lg:col-span-1">
                      <div className="relative h-64 lg:h-full overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-white rounded-lg p-3 text-center shadow-lg">
                          <div className="text-2xl font-bold text-accent">{new Date(event.date).getDate()}</div>
                          <div className="text-sm text-gray-600 uppercase">
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                          </div>
                        </div>
                        {isUpcoming(event.date) && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                              Upcoming
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full capitalize">
                              {event.category}
                            </span>
                            <span className="text-sm text-gray-500">{event.organizer}</span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-balance">{event.title}</h3>

                          <p className="text-gray-600 leading-relaxed mb-4 text-pretty">{event.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 mr-2 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {formatDate(event.date)}
                            </div>

                            <div className="flex items-center text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 mr-2 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {event.time}
                            </div>

                            <div className="flex items-center text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 mr-2 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              {event.location}
                            </div>

                            <div className="flex items-center text-sm text-gray-700">
                              <svg
                                className="w-4 h-4 mr-2 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                />
                              </svg>
                              {event.price}
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-gray-600">
                              <span className="font-semibold">{event.registered}</span> / {event.capacity} registered
                            </div>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-accent h-2 rounded-full"
                                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() =>
                              alert(
                                `Registration for: ${event.title}\n\nThis would open the registration form in a real implementation.`,
                              )
                            }
                            className="flex-1 px-6 py-3 bg-accent hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                            disabled={event.registered >= event.capacity}
                          >
                            {event.registered >= event.capacity ? "Event Full" : "Register Now"}
                          </button>
                          <button
                            onClick={() =>
                              alert(
                                `Event Details: ${event.title}\n\nAgenda:\n${event.agenda.join("\n")}\n\nRequirements:\n${event.requirements.join("\n")}`,
                              )
                            }
                            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Calendar View */
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Calendar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-accent font-bold">{formatShortDate(event.date)}</div>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded capitalize">
                        {event.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2 text-balance">{event.title}</h4>

                    <div className="text-sm text-gray-600 mb-2">
                      <div className="flex items-center mb-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      {event.registered}/{event.capacity} registered
                    </div>

                    <button
                      onClick={() => alert(`Quick registration for: ${event.title}`)}
                      className="w-full px-3 py-2 bg-accent hover:bg-red-700 text-white text-sm font-semibold rounded transition-colors duration-300"
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? "Full" : "Register"}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.main>
  )
}

export default Events
