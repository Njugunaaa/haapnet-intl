"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "training", name: "Skills Training" },
    { id: "income", name: "Income Generation" },
    { id: "community", name: "Community Projects" },
    { id: "infrastructure", name: "Infrastructure" },
  ]

  const projects = [
    {
      id: 1,
      title: "Nakuru Skills Training Center",
      category: "training",
      location: "Nakuru County",
      year: "2023",
      beneficiaries: 500,
      description:
        "A comprehensive training facility offering courses in agriculture, business development, and digital literacy.",
      longDescription:
        "The Nakuru Skills Training Center represents a milestone in our commitment to community empowerment. This state-of-the-art facility serves over 500 community members annually with programs designed to meet local economic needs. The center features modern classrooms, computer labs, and practical training areas for agricultural techniques. Since opening, 85% of graduates have either started their own businesses or found employment, demonstrating the real impact of skills-based development.",
      image: "https://via.placeholder.com/600x400?text=Nakuru+Training+Center",
      achievements: [
        "500+ people trained annually",
        "85% employment/entrepreneurship rate",
        "15 different skill programs offered",
        "Community-managed operations",
      ],
      impact: "Increased average household income by 40% for program participants",
    },
    {
      id: 2,
      title: "Kiambu Farming Cooperative",
      category: "income",
      location: "Kiambu County",
      year: "2022",
      beneficiaries: 200,
      description: "Supporting smallholder farmers through cooperative development and modern farming techniques.",
      longDescription:
        "The Kiambu Farming Cooperative project transformed agricultural practices for 200 smallholder farmers through cooperative development, modern farming techniques, and direct market access. By organizing farmers into a strong cooperative structure, we helped them achieve economies of scale, access better inputs, and negotiate fair prices for their produce. The project included training in sustainable farming practices, financial literacy, and cooperative management.",
      image: "https://via.placeholder.com/600x400?text=Kiambu+Cooperative",
      achievements: [
        "200 farmers organized into cooperative",
        "40% increase in crop yields",
        "Direct market access established",
        "Sustainable farming practices adopted",
      ],
      impact: "Generated $50,000 additional income for farming families in first year",
    },
    {
      id: 3,
      title: "Machakos Water Project",
      category: "infrastructure",
      location: "Machakos County",
      year: "2023",
      beneficiaries: 1000,
      description: "Community-led water infrastructure providing clean water access to rural families.",
      longDescription:
        "The Machakos Water Project addressed critical water scarcity affecting over 1,000 families in rural Machakos County. Through a community-led approach, local residents were trained in water system management, maintenance, and governance. The project included drilling boreholes, installing solar-powered pumps, and establishing a distribution network. A water committee was formed and trained to ensure long-term sustainability of the system.",
      image: "https://via.placeholder.com/600x400?text=Machakos+Water+Project",
      achievements: [
        "1,000 families with clean water access",
        "5 boreholes drilled and equipped",
        "Solar-powered pumping system",
        "Community water committee established",
      ],
      impact: "Reduced water collection time from 4 hours to 30 minutes daily",
    },
    {
      id: 4,
      title: "Youth Leadership Program",
      category: "training",
      location: "Multi-County",
      year: "2023",
      beneficiaries: 150,
      description: "Developing next-generation leaders through comprehensive leadership training.",
      longDescription:
        "Our Youth Leadership Program identifies and develops emerging leaders aged 18-30 from communities across Kenya. The program combines leadership theory with practical community project implementation. Participants learn project management, public speaking, conflict resolution, and community mobilization skills. Each cohort implements a community project as part of their graduation requirements, ensuring immediate practical application of their learning.",
      image: "https://via.placeholder.com/600x400?text=Youth+Leadership",
      achievements: [
        "150 young leaders trained",
        "25 community projects implemented",
        "90% program completion rate",
        "Leadership network established",
      ],
      impact: "Participants initiated 25 community projects benefiting 2,000+ people",
    },
    {
      id: 5,
      title: "Women's Microfinance Initiative",
      category: "income",
      location: "Kisumu County",
      year: "2022",
      beneficiaries: 300,
      description: "Empowering women entrepreneurs through microfinance and business training.",
      longDescription:
        "The Women's Microfinance Initiative provides financial services and business training to women entrepreneurs in Kisumu County. The program combines group lending methodology with comprehensive business skills training, financial literacy, and ongoing mentorship. Women form groups of 10-15 members who guarantee each other's loans and provide mutual support. The initiative has achieved a 98% loan repayment rate while helping women start and grow sustainable businesses.",
      image: "https://via.placeholder.com/600x400?text=Women+Microfinance",
      achievements: [
        "300 women entrepreneurs supported",
        "98% loan repayment rate",
        "$75,000 in loans disbursed",
        "Average business growth of 60%",
      ],
      impact: "Increased women's economic independence and household decision-making power",
    },
    {
      id: 6,
      title: "Community Health Program",
      category: "community",
      location: "Mombasa County",
      year: "2023",
      beneficiaries: 800,
      description: "Training community health volunteers and improving healthcare access.",
      longDescription:
        "The Community Health Program addresses healthcare challenges in underserved areas of Mombasa County through community health volunteer training and health system strengthening. The program trains local volunteers in basic health promotion, disease prevention, and health education. Volunteers conduct regular household visits, health screenings, and community health education sessions. The program also strengthens links between communities and formal health facilities.",
      image: "https://via.placeholder.com/600x400?text=Community+Health",
      achievements: [
        "40 community health volunteers trained",
        "800 households reached monthly",
        "50% increase in health facility visits",
        "Community health committees established",
      ],
      impact: "Reduced preventable disease incidence by 35% in target communities",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Achievements</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Discover the real impact of our community development programs across Kenya. Each project represents
              collaboration, innovation, and sustainable change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-container mx-auto px-4">
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
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      {project.location}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">{project.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-pretty">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-primary font-semibold">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                        {project.beneficiaries.toLocaleString()} beneficiaries
                      </div>

                      <span className="text-accent font-semibold text-sm">Learn More →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2 text-balance">{selectedProject.title}</h2>
                  <p className="text-white/90">
                    {selectedProject.location} • {selectedProject.year}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-pretty">
                      {selectedProject.longDescription}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                    <ul className="space-y-3 mb-6">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-gray-900 mb-2">Impact Highlight</h4>
                      <p className="text-gray-700 text-pretty">{selectedProject.impact}</p>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Project Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500">Location</span>
                          <p className="font-semibold text-gray-900">{selectedProject.location}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Year</span>
                          <p className="font-semibold text-gray-900">{selectedProject.year}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Beneficiaries</span>
                          <p className="font-semibold text-gray-900">
                            {selectedProject.beneficiaries.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Category</span>
                          <p className="font-semibold text-gray-900 capitalize">
                            {selectedProject.category.replace("-", " ")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/5 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Get Involved</h4>
                      <p className="text-sm text-gray-700 mb-4">
                        Interested in supporting similar projects? Learn how you can make a difference.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedProject(null)
                          window.location.href = "/get-involved"
                        }}
                        className="w-full px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Get Involved
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}

export default Achievements
