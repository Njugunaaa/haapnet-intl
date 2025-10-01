"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const NewsPreview = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Skills Training in Nairobi by Live Connection",
      excerpt:
        "In partnership with life source church, our latest training was able to facilitate many pastors to get training on leadership, discipleship among many other things.",
      date: "2024-01-15",
      category: "News",
      image: "images/poster_1.jpg",
      slug: "skills-training-center-nakuru",
    },
    {
      id: 2,
      title: "Community Cooperative Achieves Record Harvest",
      excerpt:
        "The Kiambu farming cooperative supported by HAAPNET reports their most successful season, with 40% increase in yields.",
      date: "2024-01-10",
      category: "Success Story",
      image: "images/16.jpg",
      slug: "kiambu-cooperative-record-harvest",
    },
    {
      id: 3,
      title: "Youth Leadership Program Graduation",
      excerpt:
        "25 young leaders complete our comprehensive leadership development program, ready to drive change in their communities.",
      date: "2024-01-08",
      category: "Events",
      image: "images/16.jpg",
      slug: "youth-leadership-graduation",
    },
    {
      id: 4,
      title: "Water Project Brings Clean Access to 1,000 Families",
      excerpt:
        "Community-led water infrastructure project in Machakos provides sustainable clean water access to rural families.",
      date: "2024-01-05",
      category: "Projects",
      image: "images/16.jpg",
      slug: "machakos-water-project",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Health Workshop",
      date: "2024-02-15",
      location: "Mombasa Community Center",
      type: "Workshop",
    },
    {
      id: 2,
      title: "Annual Impact Conference",
      date: "2024-03-20",
      location: "Nairobi Convention Center",
      type: "Conference",
    },
    {
      id: 3,
      title: "Microfinance Training Session",
      date: "2024-02-28",
      location: "Kisumu Training Hub",
      type: "Training",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.4 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryStyle = (category) => {
    const styles = {
      "News": "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      "Success Story": "bg-gradient-to-r from-emerald-500 to-green-600 text-white",
      "Events": "bg-gradient-to-r from-purple-500 to-indigo-600 text-white",
      "Projects": "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    }
    return styles[category] || "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
  }

  const getEventTypeStyle = (type) => {
    const styles = {
      "Workshop": "bg-blue-50 text-blue-700 border-blue-200",
      "Conference": "bg-emerald-50 text-emerald-700 border-emerald-200",
      "Training": "bg-purple-50 text-purple-700 border-purple-200",
    }
    return styles[type] || "bg-gray-50 text-gray-700 border-gray-200"
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with decorative elements */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600">Stay Informed</span>
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our recent achievements, upcoming programs, and inspiring stories from communities we serve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main News Section */}
          <motion.div
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                Recent Updates
              </h3>
              <Link 
                href="/news" 
                className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300"
              >
                View All
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section with overlay */}
                    <div className="relative w-full sm:w-2/5 h-64 sm:h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`px-4 py-1.5 ${getCategoryStyle(item.category)} text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <time dateTime={item.date} className="flex items-center gap-1.5 font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(item.date)}
                          </time>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          <Link href={`/news/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h4>

                        <p className="text-gray-600 leading-relaxed line-clamp-2">{item.excerpt}</p>
                      </div>

                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                      >
                        Read Full Story
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Events Sidebar */}
          <motion.div
            className="lg:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Events
              </h3>
              <Link
                href="/events"
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 text-sm"
              >
                See All
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <span className={`px-3 py-1 ${getEventTypeStyle(event.type)} text-xs font-semibold rounded-lg border`}>
                      {event.type}
                    </span>
                    <time className="text-xs text-gray-500 font-medium whitespace-nowrap" dateTime={event.date}>
                      {formatDate(event.date)}
                    </time>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-snug">
                    {event.title}
                  </h4>

                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="leading-tight">{event.location}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Newsletter CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 text-white shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h4 className="font-bold text-xl mb-2">Stay Connected</h4>
                <p className="text-sm mb-5 text-blue-100 leading-relaxed">
                  Subscribe to receive inspiring stories and exclusive updates directly in your inbox
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Subscribe Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsPreview