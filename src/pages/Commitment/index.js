"use client"

import { motion } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"

const Commitment = () => {
  const commitments = [
    {
      id: 1,
      title: "Local Focus",
      description:
        "We prioritize community-led initiatives and local ownership, ensuring that every program is designed with and by the communities we serve.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Community-driven program design",
        "Local leadership development",
        "Cultural sensitivity and respect",
        "Grassroots decision-making processes",
      ],
      image: "https://via.placeholder.com/400x300?text=Local+Focus",
    },
    {
      id: 2,
      title: "Transparency",
      description:
        "We maintain open communication about our programs, finances, and impact, ensuring accountability to the communities and partners we serve.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      features: [
        "Regular impact reporting",
        "Open financial records",
        "Community feedback systems",
        "Public program evaluations",
      ],
      image: "https://via.placeholder.com/400x300?text=Transparency",
    },
    {
      id: 3,
      title: "Sustainability",
      description:
        "We focus on long-term solutions that communities can maintain and grow independently, building lasting capacity rather than creating dependency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      features: [
        "Self-sustaining program models",
        "Environmental responsibility",
        "Economic viability focus",
        "Knowledge transfer systems",
      ],
      image: "https://via.placeholder.com/400x300?text=Sustainability",
    },
    {
      id: 4,
      title: "Inclusivity",
      description:
        "We ensure that all community members, regardless of gender, age, background, or circumstances, have equal access to opportunities and resources.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      features: [
        "Gender equality initiatives",
        "Youth and elder engagement",
        "Disability accessibility",
        "Multi-cultural approaches",
      ],
      image: "https://via.placeholder.com/400x300?text=Inclusivity",
    },
  ]

  const principles = [
    {
      title: "Participatory Approach",
      description: "Communities are partners, not beneficiaries, in all our development initiatives.",
    },
    {
      title: "Capacity Building",
      description: "We focus on strengthening local skills and knowledge rather than providing temporary solutions.",
    },
    {
      title: "Holistic Development",
      description: "Our programs address economic, social, and environmental aspects of community wellbeing.",
    },
    {
      title: "Innovation & Learning",
      description: "We continuously adapt our methods based on community feedback and emerging best practices.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
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
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Commitment</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Four core values guide everything we do: Local Focus, Transparency, Sustainability, and Inclusivity. These
              principles ensure our work creates lasting, meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              These values shape our approach to community development and guide every decision we make.
            </p>
          </motion.div>

          <div className="space-y-20">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mr-4">
                      {commitment.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{commitment.title}</h3>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed text-pretty">{commitment.description}</p>

                  <div className="space-y-3">
                    {commitment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={commitment.image || "/placeholder.svg"}
                      alt={`${commitment.title} - HAAPNET commitment`}
                      className="w-full h-80 object-cover"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              These principles inform our methodology and ensure our programs create meaningful, lasting impact.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed text-pretty">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accountability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
                Accountability & Measurement
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-pretty">
                  We believe that transparency and accountability are essential to effective development work. That's
                  why we maintain rigorous monitoring and evaluation systems that track not just outputs, but real
                  outcomes and long-term impact.
                </p>

                <p className="text-pretty">
                  Our community-centered approach to measurement means that success is defined by the communities
                  themselves. We use participatory evaluation methods that give community members a voice in assessing
                  program effectiveness and identifying areas for improvement.
                </p>

                <p className="text-pretty">
                  Regular impact reports, financial transparency, and open communication channels ensure that all
                  stakeholders - from community members to donors - have access to clear, honest information about our
                  work and its results.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <h4 className="font-bold text-gray-900 mb-2">Our Promise</h4>
                <p className="text-gray-700 text-pretty">
                  Every program we implement will be evaluated not just by us, but by the communities we serve. Their
                  feedback drives our continuous improvement and ensures we remain accountable to our mission.
                </p>
              </div>
            </motion.div>

            {/* Stats/Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Accountability Metrics</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Community Satisfaction</span>
                  <span className="text-2xl font-bold">94%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Program Sustainability</span>
                  <span className="text-2xl font-bold">85%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Financial Transparency</span>
                  <span className="text-2xl font-bold">100%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Impact Reporting</span>
                  <span className="text-2xl font-bold">Quarterly</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/90 text-sm">
                  All metrics are independently verified and updated quarterly based on community feedback and external
                  evaluations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Commitment
