"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const AboutTeaser = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Empowering Communities Through
              <span className="text-accent"> Local Leadership</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
              HAAPNET works directly with communities across Kenya to build
              sustainable livelihoods, strengthen local capacity, and create
              lasting positive change. Our approach focuses on empowering local
              voices and supporting grassroots initiatives.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-pretty">
              Through skills training, business support, and community
              development projects, we help communities become self-reliant and
              resilient. Every program is designed with local input and
              ownership at its core.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                Read More About Us
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                to="/commitment"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                Our Commitment
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="images/5.jpg"
                alt="Community members participating in a HAAPNET training program"
                className="w-full h-96 object-cover object-top"
                onError={handleImageError}
                loading="lazy"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-2">Local Impact</h3>
                <p className="text-gray-700 text-sm">
                  Working with 50+ communities across Kenya to build sustainable
                  futures together.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTeaser
