"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const NewsPreview = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Skills Training in NAirobi by Live Connection",
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
      transition: { staggerChildren: 0.05, duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      "News": "bg-blue-600",
      "Success Story": "bg-green-600",
      "Events": "bg-purple-600",
      "Projects": "bg-orange-600",
    }
    return colors[category] || "bg-gray-600"
  }

  const getEventTypeColor = (type) => {
    const colors = {
      "Workshop": "bg-blue-50 text-blue-700 border-blue-200",
      "Conference": "bg-green-50 text-green-700 border-green-200",
      "Training": "bg-purple-50 text-purple-700 border-purple-200",
    }
    return colors[type] || "bg-gray-50 text-gray-700 border-gray-200"
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest achievements, upcoming events, and community impact stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Recent News</h3>
              <Link 
                href="/news" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View All →
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Mobile-Optimized Image - Larger container */}
                    <div className="w-full sm:w-1/3 h-64 sm:h-40 md:h-48 relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-contain sm:object-cover object-center"
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 ${getCategoryColor(item.category)} text-white text-xs font-medium rounded`}>
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full sm:w-2/3 p-4 sm:p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                        <Link href={`/news/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h4>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>

                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                      >
                        Read More
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
              <Link
                href="/events"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <span className={`self-start px-3 py-1 ${getEventTypeColor(event.type)} text-xs font-medium rounded border`}>
                      {event.type}
                    </span>
                    <time className="text-sm text-gray-500 font-medium" dateTime={event.date}>
                      {formatDate(event.date)}
                    </time>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">{event.title}</h4>

                  <p className="text-sm text-gray-600 flex items-start sm:items-center">
                    <svg className="w-4 h-4 mr-2 mt-0.5 sm:mt-0 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <span className="leading-tight">{event.location}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 sm:p-6 bg-blue-600 rounded-lg text-white"
            >
              <h4 className="font-semibold text-lg mb-2">Join Our Newsletter</h4>
              <p className="text-sm mb-4 text-blue-100">
                Get the latest updates on our programs and impact.
              </p>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-white text-blue-600 font-medium rounded hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
              >
                Subscribe Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsPreview