"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const WhatWeDoList = () => {
  const services = [
    {
      id: 1,
      title: "Skills Training",
      description:
        "Comprehensive training programs in agriculture, business, technology, and life skills to empower community members with practical knowledge.",
      image: "https://via.placeholder.com/400x300?text=Skills+Training",
      features: ["Agricultural techniques", "Business development", "Digital literacy", "Leadership skills"],
      link: "/achievements",
    },
    {
      id: 2,
      title: "Income Generation",
      description:
        "Supporting sustainable livelihood projects, microfinance initiatives, and cooperative development to create economic opportunities.",
      image: "https://via.placeholder.com/400x300?text=Income+Generation",
      features: ["Microfinance support", "Cooperative development", "Market linkages", "Financial literacy"],
      link: "/achievements",
    },
    {
      id: 3,
      title: "Community Projects",
      description:
        "Collaborative infrastructure and social development projects that address local needs and strengthen community bonds.",
      image: "https://via.placeholder.com/400x300?text=Community+Projects",
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
      <div className="max-w-container mx-auto px-4">
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - HAAPNET program`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-pretty">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
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
            to="/achievements"
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
