"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const WhatWeDoList = () => {
  const services = [
    {
      id: 1,
      title: "Skills Training",
      description:
        "Comprehensive training programs in agriculture, business, technology, and life skills to empower community members with practical knowledge.",
      image: "images/10.jpg",
      features: ["Agricultural techniques", "Business development", "Digital literacy", "Leadership skills"],
      link: "/achievements",
    },
    {
      id: 2,
      title: "Income Generation",
      description:
        "Supporting sustainable livelihood projects, microfinance initiatives, and cooperative development to create economic opportunities.",
      image: "images/9.jpg",
      features: ["Microfinance support", "Cooperative development", "Market linkages", "Financial literacy"],
      link: "/achievements",
    },
    {
      id: 3,
      title: "Community Projects",
      description:
        "Collaborative infrastructure and social development projects that address local needs and strengthen community bonds.",
      image: "images/13.jpg",
      features: ["Infrastructure development", "Health initiatives", "Education support", "Environmental projects"],
      link: "/achievements",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Our comprehensive approach to community development focuses on three key areas that create lasting,
            sustainable impact.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative h-[280px] sm:h-[320px] bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-200 group"
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - HAAPNET program`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay - Black at bottom fading to transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="space-y-3 md:space-y-4">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded">
                    Our Service
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-white hover:text-blue-200 font-medium transition-colors duration-200 text-sm sm:text-base"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/achievements"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
          >
            View All Our Work
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDoList