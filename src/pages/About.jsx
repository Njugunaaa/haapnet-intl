"use client"

import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const About = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      position: "Executive Director",
      bio: "15+ years in community development and nonprofit leadership across East Africa.",
      image: "https://via.placeholder.com/300x300?text=Sarah+Wanjiku",
    },
    {
      id: 2,
      name: "David Kimani",
      position: "Programs Manager",
      bio: "Expert in sustainable development with focus on agricultural and business training.",
      image: "https://via.placeholder.com/300x300?text=David+Kimani",
    },
    {
      id: 3,
      name: "Grace Achieng",
      position: "Community Outreach Coordinator",
      bio: "Passionate about grassroots engagement and community-led development initiatives.",
      image: "https://via.placeholder.com/300x300?text=Grace+Achieng",
    },
    {
      id: 4,
      name: "John Mwangi",
      position: "Training Specialist",
      bio: "Skilled educator with expertise in adult learning and capacity building programs.",
      image: "https://via.placeholder.com/300x300?text=John+Mwangi",
    },
    {
      id: 5,
      name: "Mary Njeri",
      position: "Finance & Operations",
      bio: "Ensures transparent financial management and efficient program operations.",
      image: "https://via.placeholder.com/300x300?text=Mary+Njeri",
    },
    {
      id: 6,
      name: "Peter Ochieng",
      position: "Project Coordinator",
      bio: "Manages community projects from conception to sustainable implementation.",
      image: "https://via.placeholder.com/300x300?text=Peter+Ochieng",
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">About HAAPNET</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Harvest-time Apostolic And Prophetic NETwork - Empowering communities through local leadership,
              sustainable development, and collaborative action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                To empower communities across Kenya through comprehensive skills training, sustainable livelihood
                programs, and collaborative development initiatives that strengthen local capacity and create lasting
                positive change.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Thriving, self-reliant communities across Kenya where every individual has access to opportunities for
                growth, sustainable livelihoods, and the tools needed to build a prosperous future for themselves and
                their families.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Community ownership, transparency, sustainability, inclusivity, and respect for local knowledge and
                traditions. We believe in collaborative approaches that honor the wisdom and strength of the communities
                we serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Our Story</h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-pretty">
                  HAAPNET was founded in 2015 with a simple but powerful belief: that every community has the potential
                  for transformation when given the right tools, training, and support. What started as a small
                  initiative in rural Kenya has grown into a comprehensive network serving communities across the
                  country.
                </p>

                <p className="text-pretty">
                  Our approach is rooted in the understanding that sustainable development must come from within
                  communities themselves. Rather than imposing external solutions, we work alongside community members
                  to identify their priorities, build on their existing strengths, and develop locally-appropriate
                  strategies for growth.
                </p>

                <p className="text-pretty">
                  Over the years, we've learned that the most effective programs are those that combine practical skills
                  training with leadership development, economic opportunities with social cohesion, and individual
                  growth with community-wide transformation.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://via.placeholder.com/600x400?text=Our+Story"
                  alt="HAAPNET team working with community members"
                  className="w-full h-96 object-cover"
                  onError={handleImageError}
                  loading="lazy"
                />

                {/* Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">9+</div>
                      <div className="text-sm">Years of Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm">Communities</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Dedicated professionals committed to empowering communities and creating sustainable change across Kenya.
            </p>
          </motion.div>

          {/* Staff Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {staffMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed text-pretty">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Join us in empowering communities and creating sustainable change across Kenya. Every contribution makes a
              real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/get-involved"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default About
