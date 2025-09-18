"use client"

import { motion } from "framer-motion"
import { handleImageError } from "../utils/imagePlaceholder"

const GetInvolved = () => {
  const involvementOptions = [
    {
      id: 1,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in communities across Kenya.",
      longDescription:
        "Volunteering with HAAPNET offers meaningful opportunities to contribute your skills and time to community development. Whether you have a few hours a month or can commit to longer-term projects, there's a place for you in our volunteer network.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      opportunities: [
        "Skills training facilitation",
        "Community project support",
        "Event organization and coordination",
        "Administrative and office support",
        "Research and documentation",
        "Fundraising and outreach",
      ],
      commitment: "Flexible - from 4 hours/month to full-time",
      requirements: ["Passion for community development", "Reliability and commitment", "Basic communication skills"],
      image: "https://via.placeholder.com/400x300?text=Volunteer+Opportunities",
      ctaText: "Apply to Volunteer",
      ctaAction: "volunteer",
    },
    {
      id: 2,
      title: "Donate",
      description:
        "Support our programs with financial contributions that directly fund community development projects.",
      longDescription:
        "Your donations enable us to expand our reach, improve our programs, and create lasting change in communities across Kenya. Every contribution, no matter the size, makes a real difference in people's lives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      opportunities: [
        "One-time donations",
        "Monthly recurring support",
        "Project-specific funding",
        "Equipment and resource donations",
        "Scholarship sponsorships",
        "Emergency response funding",
      ],
      commitment: "Any amount - one-time or recurring",
      requirements: [
        "Secure online donation platform",
        "Tax-deductible receipts provided",
        "Transparent impact reporting",
      ],
      image: "https://via.placeholder.com/400x300?text=Donation+Impact",
      ctaText: "Make a Donation",
      ctaAction: "donate",
    },
    {
      id: 3,
      title: "Partner",
      description: "Collaborate with us as an organization, business, or institution to amplify our collective impact.",
      longDescription:
        "Strategic partnerships allow us to leverage complementary strengths, share resources, and create more comprehensive solutions to community challenges. We welcome partnerships with organizations that share our values and commitment to community-led development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      opportunities: [
        "Corporate social responsibility programs",
        "Technical expertise sharing",
        "Resource and equipment provision",
        "Joint program implementation",
        "Research and development collaboration",
        "Advocacy and policy influence",
      ],
      commitment: "Varies by partnership type and scope",
      requirements: [
        "Alignment with HAAPNET values",
        "Commitment to community-led development",
        "Transparent partnership agreements",
      ],
      image: "https://via.placeholder.com/400x300?text=Partnership+Opportunities",
      ctaText: "Explore Partnership",
      ctaAction: "partner",
    },
    {
      id: 4,
      title: "Share",
      description: "Spread awareness about our work and help us reach more communities and potential supporters.",
      longDescription:
        "Your voice and network can help us reach new communities, attract volunteers and donors, and build awareness about the importance of community-led development. Sharing our story is a powerful way to multiply our impact.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
          />
        </svg>
      ),
      opportunities: [
        "Social media sharing and engagement",
        "Word-of-mouth referrals",
        "Community presentations",
        "Blog posts and articles",
        "Newsletter subscriptions",
        "Event attendance and promotion",
      ],
      commitment: "As much or as little as you can",
      requirements: ["Genuine interest in our mission", "Access to social networks", "Willingness to share our story"],
      image: "https://via.placeholder.com/400x300?text=Share+Our+Story",
      ctaText: "Start Sharing",
      ctaAction: "share",
    },
  ]

  const impactStories = [
    {
      name: "Sarah Mwangi",
      role: "Volunteer Trainer",
      story:
        "Volunteering with HAAPNET has been incredibly rewarding. I've helped train over 100 women in business skills, and seeing their confidence grow is amazing.",
      image: "https://via.placeholder.com/150x150?text=Sarah+M",
    },
    {
      name: "Tech Solutions Ltd",
      role: "Corporate Partner",
      story:
        "Our partnership with HAAPNET has allowed us to contribute meaningfully to community development while building valuable relationships.",
      image: "https://via.placeholder.com/150x150?text=Tech+Solutions",
    },
    {
      name: "John Kamau",
      role: "Monthly Donor",
      story:
        "My monthly donation of $25 helps fund training programs. It's incredible to see the quarterly reports showing real impact in communities.",
      image: "https://via.placeholder.com/150x150?text=John+K",
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

  const handleCTA = (action, title) => {
    switch (action) {
      case "volunteer":
        alert(
          `Volunteer Application: ${title}\n\nThis would open the volunteer application form in a real implementation.`,
        )
        break
      case "donate":
        alert(
          `Donation Portal: ${title}\n\nThis would redirect to the secure donation platform in a real implementation.`,
        )
        break
      case "partner":
        alert(`Partnership Inquiry: ${title}\n\nThis would open the partnership inquiry form in a real implementation.`)
        break
      case "share":
        alert(`Share HAAPNET: ${title}\n\nThis would open social sharing options in a real implementation.`)
        break
      default:
        alert("Contact us for more information!")
    }
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Get Involved</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Join our mission to empower communities across Kenya. Whether through volunteering, donations,
              partnerships, or simply sharing our story, your involvement makes a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Choose the way that best fits your interests, skills, and availability. Every form of involvement
              contributes to our collective impact.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mr-4">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{option.title}</h3>
                      <p className="text-gray-600">{option.commitment}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-pretty">{option.longDescription}</p>

                  {/* Opportunities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Opportunities Include:</h4>
                    <ul className="space-y-2">
                      {option.opportunities.slice(0, 4).map((opportunity, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{opportunity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.requirements.map((req, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleCTA(option.ctaAction, option.title)}
                    className="w-full px-6 py-4 bg-accent hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                  >
                    {option.ctaText}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Hear from volunteers, partners, and supporters about their experience making a difference with HAAPNET.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-accent text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-pretty">"{story.story}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Don't wait to make a difference. Choose your preferred way to get involved and join our community of
              changemakers today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => handleCTA("volunteer", "Quick Volunteer")}
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Volunteering
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => handleCTA("donate", "Quick Donation")}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make a Donation
              </motion.button>

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

export default GetInvolved
