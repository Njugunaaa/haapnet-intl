"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"
import HeroSection from '../../components/HeroSection'

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: "all", name: "All Impact" },
    { id: "seminars", name: "Seminars & Training" },
    { id: "partnerships", name: "Strategic Partnerships" },
    { id: "community", name: "Community Development" },
    { id: "empowerment", name: "Economic Empowerment" },
  ]

  const projects = [
    {
      id: 1,
      title: "Nairobi Leadership & Development Seminar 2024",
      category: "seminars",
      location: "Nairobi, Kenya",
      date: "September 12-13, 2024",
      year: "2024",
      beneficiaries: 100,
      featured: true,
      description:
        "A transformative two-day seminar bringing together community leaders, change-makers, and development professionals across Africa.",
      longDescription:
        "On September 12th and 13th, 2024, we hosted a landmark seminar in Nairobi that brought together over 100 participants from across the region. In partnership with LifeSource Church and Live Connection, this intensive two-day program focused on sustainable community development, leadership excellence, and innovative approaches to social impact. Participants engaged in interactive workshops, panel discussions with industry experts, and collaborative sessions that fostered cross-organizational learning. The seminar created a powerful network of change-makers committed to transforming their communities through evidence-based practices and servant leadership.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      partners: ["LifeSource Church", "Live Connection"],
      achievements: [
        "100+ leaders and development professionals in attendance",
        "2 days of intensive training and collaboration",
        "15+ expert-led sessions on community development",
        "Established ongoing Pan-African leadership network",
        "Launched 8 new collaborative community initiatives",
      ],
      impact: "Created lasting partnerships and equipped leaders with tools to impact over 50,000 community members across their respective regions",
      testimonial: {
        quote: "This seminar transformed my approach to community development. The connections made here will benefit our communities for years to come.",
        author: "Community Development Officer, Nairobi"
      }
    },
    {
      id: 2,
      title: "Pan-African Women's Empowerment Initiative",
      category: "empowerment",
      location: "Multi-Country Program",
      year: "2023-2024",
      beneficiaries: 1200,
      featured: true,
      description:
        "Empowering women entrepreneurs across six African nations through microfinance, training, and mentorship programs.",
      longDescription:
        "Our Pan-African Women's Empowerment Initiative represents our most ambitious economic development program to date. Operating across Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and Ghana, this comprehensive program provides women entrepreneurs with access to microfinance, business skills training, digital literacy, and ongoing mentorship. We've created a robust support ecosystem that addresses the unique challenges women face in starting and scaling businesses. The program combines group lending methodology with peer support networks, ensuring both financial sustainability and emotional resilience. To date, we've supported over 1,200 women entrepreneurs, with a remarkable 96% loan repayment rate and average business revenue increases of 75%.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      achievements: [
        "1,200+ women entrepreneurs across 6 African nations",
        "96% loan repayment rate demonstrating program sustainability",
        "$250,000+ in microloans disbursed",
        "75% average increase in business revenue",
        "450 new jobs created in local communities",
        "Regional trade networks established between countries",
      ],
      impact: "Transformed economic independence for women and their families, with 78% reporting increased decision-making power in their households",
    },
    {
      id: 3,
      title: "Strategic Partnership with WaterAid Africa",
      category: "partnerships",
      location: "East Africa Region",
      year: "2023-2024",
      beneficiaries: 15000,
      description: "Collaborative water infrastructure program bringing clean water to remote communities across East Africa.",
      longDescription:
        "Through our strategic partnership with WaterAid Africa, we've scaled our water access initiatives to reach underserved communities across Kenya, Uganda, and Tanzania. This partnership combines our community mobilization expertise with WaterAid's technical capabilities to deliver sustainable water solutions. Together, we've implemented solar-powered water systems, trained local water committees in governance and maintenance, and established community health programs focused on water, sanitation, and hygiene (WASH). The partnership model emphasizes local ownership, ensuring long-term sustainability beyond our direct involvement.",
      image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=800&q=80",
      partners: ["WaterAid Africa", "Local Government Authorities"],
      achievements: [
        "15,000+ people gained access to clean water",
        "25 solar-powered water systems installed",
        "50 local water committees trained and operational",
        "85% reduction in waterborne diseases in target areas",
        "Community-managed maintenance funds established",
      ],
      impact: "Reduced average water collection time from 4 hours to 20 minutes, freeing women and girls for education and economic activities",
    },
    {
      id: 4,
      title: "Agricultural Innovation & Food Security Program",
      category: "community",
      location: "Kenya, Uganda, Tanzania",
      year: "2022-2024",
      beneficiaries: 3500,
      description: "Transforming smallholder farming through climate-smart agriculture, cooperative development, and market access.",
      longDescription:
        "Our Agricultural Innovation & Food Security Program addresses the dual challenges of food security and climate change affecting smallholder farmers across East Africa. We've introduced climate-smart agricultural practices including drought-resistant crops, water conservation techniques, and sustainable farming methods. Farmers are organized into cooperatives that provide collective bargaining power, access to quality inputs, and direct market linkages. The program includes training in financial literacy, cooperative management, and agribusiness development. We've partnered with agricultural research institutions to ensure farmers access the latest innovations suited to their specific contexts.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      achievements: [
        "3,500 smallholder farmers trained in climate-smart agriculture",
        "45 agricultural cooperatives established",
        "60% average increase in crop yields",
        "Direct market access reducing middleman exploitation",
        "$1.2M additional income generated for farming families",
        "1,000+ hectares converted to sustainable farming practices",
      ],
      impact: "Improved food security for over 20,000 family members while building climate resilience in vulnerable farming communities",
    },
    {
      id: 5,
      title: "Youth Skills & Technology Training Centers",
      category: "seminars",
      location: "Multiple Urban Centers",
      year: "2023-2024",
      beneficiaries: 2500,
      description: "Equipping African youth with digital skills, entrepreneurship training, and 21st-century competencies.",
      longDescription:
        "Recognizing that youth are Africa's greatest asset, our Youth Skills & Technology Training Centers provide comprehensive programs in digital literacy, coding, graphic design, digital marketing, and entrepreneurship. We've established centers in Nairobi, Kampala, Dar es Salaam, and Kigali, each equipped with modern computer labs and high-speed internet. The curriculum combines technical skills with soft skills training in leadership, communication, and professional development. We partner with tech companies to provide internship opportunities and job placements. Our graduates are launching tech startups, securing remote work opportunities, and becoming change agents in their communities.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      partners: ["Microsoft Africa", "Google Developer Groups", "Local Tech Hubs"],
      achievements: [
        "2,500+ youth trained in digital and entrepreneurial skills",
        "4 state-of-the-art training centers operational",
        "82% employment or entrepreneurship rate within 6 months",
        "150+ tech startups launched by program graduates",
        "Partnerships with 40+ companies for internships and jobs",
      ],
      impact: "Creating pathways to economic opportunity for youth while building Africa's digital economy workforce",
    },
    {
      id: 6,
      title: "Community Health Systems Strengthening",
      category: "community",
      location: "Rural Kenya, Uganda, Tanzania",
      year: "2022-2024",
      beneficiaries: 25000,
      description: "Building resilient community health systems through volunteer training, health infrastructure, and preventive care.",
      longDescription:
        "Our Community Health Systems Strengthening program takes a comprehensive approach to improving healthcare access in underserved rural areas. We train community health volunteers who provide primary health education, conduct screenings, and connect families with healthcare facilities. The program strengthens the link between communities and formal health systems while emphasizing preventive care and health promotion. We've renovated existing health facilities, provided essential medical equipment, and established medicine supply chains. Our approach includes maternal and child health, nutrition education, disease prevention, and management of chronic conditions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      achievements: [
        "25,000+ community members receiving regular health services",
        "200 community health volunteers trained and equipped",
        "15 health facilities renovated and equipped",
        "45% reduction in preventable diseases",
        "80% increase in antenatal care attendance",
        "Community health insurance schemes established",
      ],
      impact: "Dramatically improved health outcomes while building sustainable, community-owned health systems that will serve generations",
    },
    {
      id: 7,
      title: "Education Infrastructure & Quality Learning Program",
      category: "partnerships",
      location: "Kenya, Uganda, Rwanda",
      year: "2023-2024",
      beneficiaries: 8000,
      description: "Partnering with communities and governments to build schools, train teachers, and improve learning outcomes.",
      longDescription:
        "Quality education is the foundation for sustainable development. Our Education Infrastructure & Quality Learning Program partners with local communities, governments, and international organizations to build and renovate schools in underserved areas. Beyond infrastructure, we focus on teacher training, curriculum development, and learning materials provision. We've introduced innovative teaching methods, established school libraries, provided digital learning tools, and created safe, inclusive learning environments. The program includes community engagement components that encourage parental involvement and address barriers to education such as child labor and early marriage.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      partners: ["Ministry of Education - Kenya, Uganda, Rwanda", "UNICEF", "Local Community Organizations"],
      achievements: [
        "8,000+ children benefiting from improved learning environments",
        "12 schools built or renovated",
        "300 teachers trained in modern teaching methods",
        "25% improvement in student learning outcomes",
        "School dropout rates reduced by 40%",
        "Gender parity achieved in all program schools",
      ],
      impact: "Creating opportunities for children to reach their full potential while building educated, empowered communities",
    },
    {
      id: 8,
      title: "Quarterly Leadership Development Seminars",
      category: "seminars",
      location: "Regional Rotation",
      year: "2023-2024",
      beneficiaries: 400,
      description: "Ongoing capacity building through quarterly seminars for community leaders, nonprofit managers, and development professionals.",
      longDescription:
        "Our Quarterly Leadership Development Seminars provide continuous professional development for community leaders and development practitioners across Africa. Each quarter, we host intensive three-day seminars that rotate between different cities, making them accessible to diverse participants. Topics include strategic planning, resource mobilization, project management, monitoring and evaluation, community mobilization, and adaptive leadership. We bring in expert facilitators, successful practitioners, and thought leaders who share cutting-edge approaches to community development. The seminars create valuable networking opportunities and foster a community of practice where leaders support each other's growth and success.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      achievements: [
        "400+ leaders trained across four quarterly seminars",
        "Rotating locations ensuring regional accessibility",
        "90% of participants implementing new strategies in their organizations",
        "Established Pan-African leaders network with 500+ members",
        "Resource library developed and shared across network",
      ],
      impact: "Building leadership capacity that multiplies impact across hundreds of organizations and thousands of communities",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const stats = [
    { number: "50,000+", label: "Lives Impacted", icon: "👥" },
    { number: "8 Countries", label: "Across Africa", icon: "🌍" },
    { number: "25+", label: "Active Partnerships", icon: "🤝" },
    { number: "98%", label: "Project Success Rate", icon: "📈" },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <HeroSection 
        title="Transforming Communities Across Africa"
        description="Through strategic partnerships, innovative programs, and unwavering commitment, we're creating lasting change in communities across the African continent. Every project represents lives transformed, futures brightened, and communities empowered."
        gradientFrom="from-orange-600"
        gradientVia="via-orange-500"
        gradientTo="to-yellow-400"
      />

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building a Brighter Future Together
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe sustainable development happens when communities are empowered to lead their own transformation. 
              Through capacity building, strategic partnerships, and innovative programs, we work alongside communities across 
              Africa to create lasting positive change. Our approach combines grassroots engagement with professional expertise, 
              ensuring every initiative is culturally relevant, sustainable, and truly impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-neutral border-y border-gray-200">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
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
                    ? "bg-accent text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                    project.featured ? 'lg:col-span-2' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -8 }}
                >
                  <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${project.featured ? 'h-80 lg:h-auto' : 'h-64'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {project.featured && (
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                            <span className="text-yellow-300">⭐</span>
                            FEATURED
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 ${project.featured ? 'flex flex-col justify-center' : ''}`}>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                      <h3 className={`font-bold text-gray-900 mb-4 text-balance ${project.featured ? 'text-3xl' : 'text-xl'}`}>
                        {project.title}
                      </h3>

                      <p className={`text-gray-600 leading-relaxed mb-6 text-pretty ${project.featured ? 'text-base' : 'text-sm'}`}>
                        {project.description}
                      </p>

                      {project.partners && (
                        <div className="mb-6">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            In Partnership With
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.partners.map((partner, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-primary font-semibold">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          {project.beneficiaries.toLocaleString()} Lives Impacted
                        </div>

                        <span className="text-accent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Full Story
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Creating Change
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Every achievement you see here started with people like you who believed in the power of community. 
              Whether through partnership, volunteering, or support, there's a place for you in this movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/get-involved"}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Involved Today
              </button>
              <button
                onClick={() => window.location.href = "/partnerships"}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Partnerships
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-5xl w-full my-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {selectedProject.featured && (
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <span className="text-yellow-300">⭐</span>
                      FEATURED PROJECT
                    </span>
                  </div>
                )}
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h2 className="text-4xl font-bold mb-3 text-balance">{selectedProject.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/90">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedProject.location}
                    </span>
                    <span>•</span>
                    <span>{selectedProject.date || selectedProject.year}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-10 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The Story</h3>
                      <p className="text-lg text-gray-700 leading-relaxed text-pretty">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {selectedProject.partners && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Partners</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.partners.map((partner, idx) => (
                            <div
                              key={idx}
                              className="px-5 py-3 bg-primary/10 text-primary font-semibold rounded-lg border border-primary/20"
                            >
                              {partner}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-5">Key Achievements</h3>
                      <div className="space-y-3">
                        {selectedProject.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 flex-1">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-l-4 border-primary">
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">💫</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">Transformative Impact</h4>
                          <p className="text-gray-700 text-pretty leading-relaxed">{selectedProject.impact}</p>
                        </div>
                      </div>
                    </div>

                    {selectedProject.testimonial && (
                      <div className="p-6 bg-white rounded-xl border-2 border-gray-100 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl text-accent">"</div>
                          <div>
                            <p className="text-gray-700 italic mb-3 text-pretty leading-relaxed">
                              {selectedProject.testimonial.quote}
                            </p>
                            <p className="text-sm text-gray-500 font-semibold">
                              — {selectedProject.testimonial.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-5 text-lg">Project Overview</h4>
                      <div className="space-y-4">
                        <div className="pb-4 border-b border-gray-200">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</span>
                          <p className="font-semibold text-gray-900 mt-1">{selectedProject.location}</p>
                        </div>
                        <div className="pb-4 border-b border-gray-200">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Timeline</span>
                          <p className="font-semibold text-gray-900 mt-1">{selectedProject.date || selectedProject.year}</p>
                        </div>
                        <div className="pb-4 border-b border-gray-200">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">People Impacted</span>
                          <p className="font-semibold text-gray-900 mt-1 text-2xl">
                            {selectedProject.beneficiaries.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Category</span>
                          <p className="font-semibold text-gray-900 mt-1 capitalize">
                            {selectedProject.category.replace("-", " ")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent to-red-700 rounded-xl p-6 text-white shadow-lg">
                      <h4 className="font-bold mb-3 text-lg">Support This Cause</h4>
                      <p className="text-white/90 text-sm mb-5 leading-relaxed">
                        Your support can help us expand programs like this to reach more communities across Africa.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedProject(null)
                          window.location.href = "/get-involved"
                        }}
                        className="w-full px-4 py-3 bg-white text-accent font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        Get Involved
                      </button>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                      <h4 className="font-bold text-gray-900 mb-3">Share This Story</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Help us inspire others by sharing this impact story.
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                          Facebook
                        </button>
                        <button className="flex-1 px-3 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-semibold">
                          Twitter
                        </button>
                        <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                          WhatsApp
                        </button>
                      </div>
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