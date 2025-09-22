"use client"

import { motion } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"
import HeroSection from '../../components/HeroSection'

const About = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      position: "Executive Director",
      bio: "15+ years in community development and nonprofit leadership across East Africa.",
      image: "images/16.jpg",
    },
    {
      id: 2,
      name: "David Kimani",
      position: "Programs Manager",
      bio: "Expert in sustainable development with focus on agricultural and business training.",
      image: "images/16.jpg",
    },
    {
      id: 3,
      name: "Grace Achieng",
      position: "Community Outreach Coordinator",
      bio: "Passionate about grassroots engagement and community-led development initiatives.",
      image: "images/16.jpg",
    },
    {
      id: 4,
      name: "John Mwangi",
      position: "Training Specialist",
      bio: "Skilled educator with expertise in adult learning and capacity building programs.",
      image: "images/16.jpg",
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
      className="pt-16 md:pt-24"
    >
      {/* Hero Section */}
      <HeroSection 
        title="About HAAPNET"
        description="Harvest-time Apostolic And Prophetic NETwork - Empowering communities through local leadership, sustainable development, and collaborative action."
        gradientFrom="from-blue-600"
        gradientVia="via-blue-500"
        gradientTo="to-cyan-400"
      />

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="pt-8 md:pt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To empower communities across Kenya through comprehensive
                  skills training, sustainable livelihood programs, and
                  collaborative development initiatives that strengthen local
                  capacity and create lasting positive change.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
              </div>
              <div className="pt-8 md:pt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Thriving, self-reliant communities across Kenya where every
                  individual has access to opportunities for growth, sustainable
                  livelihoods, and the tools needed to build a prosperous future
                  for themselves and their families.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="pt-8 md:pt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Community ownership, transparency, sustainability,
                  inclusivity, and respect for local knowledge and traditions.
                  We believe in collaborative approaches that honor the wisdom
                  and strength of the communities we serve.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
                <span className="text-blue-300 text-sm font-medium">
                  Our Journey
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Our Story
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  HAAPNET was founded in 2015 with a simple but powerful belief:
                  that every community has the potential for transformation when
                  given the right tools, training, and support. What started as
                  a small initiative in rural Kenya has grown into a
                  comprehensive network serving communities across the country.
                </p>

                <p>
                  Our approach is rooted in the understanding that sustainable
                  development must come from within communities themselves.
                  Rather than imposing external solutions, we work alongside
                  community members to identify their priorities, build on their
                  existing strengths, and develop locally-appropriate strategies
                  for growth.
                </p>

                <p>
                  Over the years, we've learned that the most effective programs
                  are those that combine practical skills training with
                  leadership development, economic opportunities with social
                  cohesion, and individual growth with community-wide
                  transformation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Communities Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    People Trained
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">
                    150+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">
                    85%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Success Rate
                  </div>
                </div>
              </div>
            </motion.div>
            

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
                  <img
                    src="images/6.jpg"
                    alt="HAAPNET team working with community members"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Additional Info Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
    {/* Text Content */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Expanding Our Impact Across Africa
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        At Haapnet International, our mission goes beyond Kenya. 
        We are committed to fostering long-term transformation 
        in communities across Africa through collaboration, 
        empowerment, and innovation.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our teams actively work with local partners in{" "}
        <span className="font-semibold">Zambia, Tanzania, Uganda,</span> 
        and beyond — ensuring that solutions are community-driven, 
        sustainable, and impactful.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Strengthening local leadership & ownership</li>
        <li>Building partnerships for sustainable development</li>
        <li>Providing training & tools for economic resilience</li>
      </ul>
    </div>

    {/* Image Content */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/16.jpg"
          alt="Haapnet working in Africa"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Meet Our Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center">
              <img
                src="/images/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="font-semibold">Jane Doe</h3>
              <p className="text-sm text-gray-500">Project Lead</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/images/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="font-semibold">John Smith</h3>
              <p className="text-sm text-gray-500">Operations Manager</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/images/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="font-semibold">Mary Johnson</h3>
              <p className="text-sm text-gray-500">Field Coordinator</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/images/team4.jpg"
                alt="Team Member 4"
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="font-semibold">James Brown</h3>
              <p className="text-sm text-gray-500">Partnerships Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Our Partners
          </h2>
          <div className="overflow-hidden">
            <div className="animate-scroll space-x-12">
              <img src="/images/partner1.png" alt="Partner 1" className="h-16" />
              <img src="/images/partner2.png" alt="Partner 2" className="h-16" />
              <img src="/images/partner3.png" alt="Partner 3" className="h-16" />
              <img src="/images/partner4.png" alt="Partner 4" className="h-16" />
              <img src="/images/partner5.png" alt="Partner 5" className="h-16" />
              <img src="/images/partner1.png" alt="Partner 1" className="h-16" />
              <img src="/images/partner2.png" alt="Partner 2" className="h-16" />
              <img src="/images/partner3.png" alt="Partner 3" className="h-16" />
              <img src="/images/partner4.png" alt="Partner 4" className="h-16" />
              <img src="/images/partner5.png" alt="Partner 5" className="h-16" />
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>
    </motion.main>
  )
}

export default About
