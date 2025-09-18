"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const NewsPreview = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Skills Training Center Opens in Nakuru",
      excerpt:
        "Our latest training facility will serve over 500 community members with programs in agriculture, business, and technology.",
      date: "2024-01-15",
      category: "News",
      image: "https://via.placeholder.com/400x250?text=Training+Center",
      slug: "skills-training-center-nakuru",
    },
    {
      id: 2,
      title: "Community Cooperative Achieves Record Harvest",
      excerpt:
        "The Kiambu farming cooperative supported by HAAPNET reports their most successful season, with 40% increase in yields.",
      date: "2024-01-10",
      category: "Success Story",
      image: "https://via.placeholder.com/400x250?text=Harvest+Success",
      slug: "kiambu-cooperative-record-harvest",
    },
    {
      id: 3,
      title: "Youth Leadership Program Graduation",
      excerpt:
        "25 young leaders complete our comprehensive leadership development program, ready to drive change in their communities.",
      date: "2024-01-08",
      category: "Events",
      image: "https://via.placeholder.com/400x250?text=Youth+Leadership",
      slug: "youth-leadership-graduation",
    },
    {
      id: 4,
      title: "Water Project Brings Clean Access to 1,000 Families",
      excerpt:
        "Community-led water infrastructure project in Machakos provides sustainable clean water access to rural families.",
      date: "2024-01-05",
      category: "Projects",
      image: "https://via.placeholder.com/400x250?text=Water+Project",
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Latest News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Stay updated with our latest achievements, upcoming events, and community impact stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Recent News</h3>
              <Link to="/news" className="text-primary hover:text-accent font-semibold transition-colors duration-300">
                View All News →
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="sm:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        <Link to={`/news/${item.slug}`} className="text-balance">
                          {item.title}
                        </Link>
                      </h4>

                      <p className="text-gray-600 text-sm leading-relaxed text-pretty">{item.excerpt}</p>

                      <Link
                        to={`/news/${item.slug}`}
                        className="inline-flex items-center text-primary hover:text-accent font-medium text-sm mt-3 transition-colors duration-300"
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
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
              <Link
                to="/events"
                className="text-primary hover:text-accent font-semibold transition-colors duration-300"
              >
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-accent"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {event.type}
                    </span>
                    <time className="text-sm text-gray-500" dateTime={event.date}>
                      {formatDate(event.date)}
                    </time>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2 text-balance">{event.title}</h4>

                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-r from-primary to-accent rounded-xl text-white text-center"
            >
              <h4 className="font-bold mb-2">Join Our Newsletter</h4>
              <p className="text-sm mb-4 text-white/90">Get the latest updates on our programs and impact.</p>
              <Link
                to="/contact"
                className="inline-block px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
