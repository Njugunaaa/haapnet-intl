"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { handleImageError } from "../../utils/imagePlaceholder"

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All News" },
    { id: "news", name: "News" },
    { id: "success", name: "Success Stories" },
    { id: "updates", name: "Program Updates" },
    { id: "partnerships", name: "Partnerships" },
  ]

  const newsArticles = [
    {
      id: 1,
      title: "New Skills Training Center Opens in Nakuru",
      excerpt:
        "Our latest training facility will serve over 500 community members with programs in agriculture, business, and technology.",
      content: `
        HAAPNET is proud to announce the opening of our newest Skills Training Center in Nakuru County. This state-of-the-art facility represents a significant milestone in our commitment to community empowerment and sustainable development.

        The center features modern classrooms, computer labs, and practical training areas designed to meet the diverse learning needs of our community members. With capacity to serve over 500 people annually, the facility will offer comprehensive programs in:

        - Modern agricultural techniques and sustainable farming practices
        - Business development and entrepreneurship skills
        - Digital literacy and computer skills
        - Financial literacy and cooperative management
        - Leadership development and community organizing

        "This center represents the dreams and aspirations of our community," said Sarah Wanjiku, HAAPNET Executive Director. "It was designed with extensive input from local residents and will be managed by a community board to ensure it truly serves local needs."

        The opening ceremony was attended by over 200 community members, local leaders, and partners. The first cohort of 50 trainees has already begun their programs, with additional enrollment planned for the coming months.

        This project was made possible through the generous support of our partners and the dedicated work of community volunteers who contributed over 1,000 hours of labor during construction.
      `,
      date: "2024-01-15",
      category: "news",
      author: "HAAPNET Communications Team",
      image: "https://via.placeholder.com/800x400?text=Training+Center+Opening",
      slug: "skills-training-center-nakuru",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Community Cooperative Achieves Record Harvest",
      excerpt:
        "The Kiambu farming cooperative supported by HAAPNET reports their most successful season, with 40% increase in yields.",
      content: `
        The Kiambu Farming Cooperative has achieved remarkable success in their latest harvest season, reporting a 40% increase in crop yields compared to the previous year. This outstanding achievement demonstrates the power of collective action and modern farming techniques.

        The cooperative, which brings together 200 smallholder farmers, has been working with HAAPNET since 2022 to implement sustainable farming practices, improve market access, and strengthen their organizational capacity.

        Key factors contributing to this success include:

        - Implementation of climate-smart agriculture techniques
        - Use of improved seed varieties and organic fertilizers
        - Collective purchasing of inputs at reduced costs
        - Improved post-harvest handling and storage
        - Direct market linkages eliminating middlemen

        "We never imagined we could achieve such results," said Mary Wanjiru, the cooperative's chairperson. "The training and support from HAAPNET, combined with our commitment to working together, has transformed our farming and our lives."

        The increased yields have translated to significant income improvements for member families. The average household income has increased by 60%, enabling families to invest in children's education, improve their homes, and expand their farming operations.

        The cooperative has also established a savings and credit scheme, allowing members to access affordable loans for farm improvements and other investments. This financial inclusion component has been crucial in sustaining the gains achieved.

        Looking ahead, the cooperative plans to expand into value addition activities, including processing and packaging their produce for premium markets. They are also sharing their success model with other farming groups in neighboring areas.
      `,
      date: "2024-01-10",
      category: "success",
      author: "David Kimani",
      image: "https://via.placeholder.com/800x400?text=Record+Harvest",
      slug: "kiambu-cooperative-record-harvest",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Youth Leadership Program Graduation",
      excerpt:
        "25 young leaders complete our comprehensive leadership development program, ready to drive change in their communities.",
      content: `
        Twenty-five young leaders from across Kenya celebrated their graduation from HAAPNET's comprehensive Youth Leadership Program in a ceremony held at the Nairobi Community Center. The program, which ran for six months, equipped participants with essential leadership skills and practical experience in community development.

        The graduating cohort, aged between 18 and 30, represented diverse backgrounds and communities from eight counties. Throughout the program, they engaged in intensive training covering:

        - Leadership theory and practice
        - Project management and planning
        - Community mobilization and engagement
        - Conflict resolution and mediation
        - Public speaking and communication
        - Financial management and resource mobilization

        A unique feature of the program is the requirement for each participant to implement a community project as part of their graduation. This year's cohort initiated 25 different projects, including:

        - Youth mentorship programs in schools
        - Community clean-up and environmental conservation initiatives
        - Small business development groups
        - Health education campaigns
        - Digital literacy training for older adults

        "These young leaders represent the future of our communities," said Grace Achieng, HAAPNET's Community Outreach Coordinator. "Their energy, creativity, and commitment to positive change give us great hope for Kenya's development."

        The graduation ceremony featured presentations from each graduate about their community projects and their plans for continued leadership in their communities. Many have already been elected to leadership positions in their local organizations and are planning to expand their projects.

        The program maintains a strong alumni network, with graduates from previous cohorts serving as mentors for new participants. This peer-to-peer learning approach has proven highly effective in sustaining leadership development beyond the formal program period.

        Applications for the next cohort will open in March 2024, with the program continuing to expand its reach to more communities across Kenya.
      `,
      date: "2024-01-08",
      category: "news",
      author: "Grace Achieng",
      image: "https://via.placeholder.com/800x400?text=Youth+Graduation",
      slug: "youth-leadership-graduation",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Water Project Brings Clean Access to 1,000 Families",
      excerpt:
        "Community-led water infrastructure project in Machakos provides sustainable clean water access to rural families.",
      content: `
        Clean, safe water is now flowing to over 1,000 families in rural Machakos County, thanks to a community-led water infrastructure project supported by HAAPNET. The project, which took 18 months to complete, represents a transformative change for communities that previously spent hours each day collecting water from distant and often contaminated sources.

        The comprehensive water system includes:

        - Five strategically located boreholes
        - Solar-powered pumping systems
        - 15 kilometers of distribution pipeline
        - 20 community water points
        - Storage tanks with 50,000-liter capacity

        What makes this project particularly special is its community-led approach. From the initial planning stages, local residents were actively involved in decision-making, site selection, and implementation. Community members contributed over 2,000 hours of volunteer labor, significantly reducing project costs and ensuring local ownership.

        "Before this project, our women and children would walk up to 10 kilometers daily to fetch water," explained Peter Mutua, chairman of the community water committee. "Now, clean water is available within 500 meters of every household. This has changed everything for us."

        The impact extends far beyond convenience. Children, especially girls, can now attend school regularly instead of spending hours collecting water. Women have more time for income-generating activities and community participation. The incidence of waterborne diseases has dropped dramatically, reducing healthcare costs and improving overall community health.

        Sustainability was a key consideration throughout the project. A community water committee was established and trained in system management, maintenance, and financial management. The committee collects modest user fees that cover operational costs and create a fund for future repairs and expansions.

        The project also included training in water conservation, hygiene practices, and basic system maintenance. This capacity building ensures that the community can independently manage their water system for years to come.

        The success of the Machakos project has attracted attention from neighboring communities and government officials. Plans are underway to replicate the model in three additional locations, with communities already beginning their own planning processes.
      `,
      date: "2024-01-05",
      category: "success",
      author: "Peter Ochieng",
      image: "https://via.placeholder.com/800x400?text=Water+Project",
      slug: "machakos-water-project",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Partnership with Kenya Agricultural Research Institute",
      excerpt:
        "New collaboration will bring cutting-edge agricultural research and training to smallholder farmers across Kenya.",
      content: `
        HAAPNET is excited to announce a groundbreaking partnership with the Kenya Agricultural Research Institute (KARI) that will bring cutting-edge agricultural research and training directly to smallholder farmers across the country. This collaboration represents a significant step forward in our mission to improve agricultural productivity and food security.

        The three-year partnership will focus on:

        - Technology transfer and demonstration plots
        - Farmer field schools and practical training
        - Research on climate-resilient crop varieties
        - Soil health improvement programs
        - Integrated pest management training
        - Post-harvest technology and value addition

        "This partnership combines KARI's research expertise with HAAPNET's community engagement strengths," said Dr. Jane Mwangi, KARI's Director of Extension Services. "Together, we can ensure that scientific innovations reach the farmers who need them most."

        The collaboration will establish demonstration plots in 10 communities, where farmers can see new technologies in action and receive hands-on training. These plots will showcase climate-smart agriculture techniques, improved seed varieties, and sustainable farming practices adapted to local conditions.

        A key component of the partnership is the development of farmer field schools, where groups of 25-30 farmers will receive season-long training in specific agricultural techniques. The curriculum will be developed jointly by KARI researchers and HAAPNET's community development specialists, ensuring both scientific rigor and practical applicability.

        The partnership also includes a research component focused on developing crop varieties that are resilient to climate change impacts such as drought, flooding, and changing rainfall patterns. Farmers will participate directly in variety testing and selection, ensuring that new varieties meet their needs and preferences.

        "We're not just transferring technology; we're creating a two-way learning process," explained David Kimani, HAAPNET's Programs Manager. "Farmers' traditional knowledge and practical experience will inform research priorities and help develop more effective solutions."

        The first farmer field schools will begin in March 2024, with demonstration plots being established in time for the next planting season. The partnership is expected to directly benefit over 2,000 farmers in its first year, with impacts reaching many more through farmer-to-farmer knowledge sharing.

        This collaboration builds on HAAPNET's successful track record in agricultural development and KARI's reputation as a leading agricultural research institution in East Africa. Together, they aim to create a model for research-extension partnerships that can be replicated across the region.
      `,
      date: "2023-12-28",
      category: "partnerships",
      author: "HAAPNET Communications Team",
      image: "https://via.placeholder.com/800x400?text=KARI+Partnership",
      slug: "kari-partnership-announcement",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Microfinance Program Reaches 500 Women Entrepreneurs",
      excerpt:
        "Our women's microfinance initiative celebrates a major milestone with 500 active borrowers and 98% repayment rate.",
      content: `
        HAAPNET's Women's Microfinance Initiative has reached a significant milestone, now serving 500 women entrepreneurs across five counties with a remarkable 98% loan repayment rate. This achievement highlights the program's success in combining financial services with comprehensive business training and peer support.

        Launched in 2022, the program addresses the critical gap in financial services for women in rural and peri-urban areas. Traditional banks often require collateral and documentation that many women cannot provide, leaving them excluded from formal financial systems.

        The program's success is built on several key principles:

        - Group lending methodology with peer guarantee
        - Comprehensive business skills training
        - Financial literacy education
        - Ongoing mentorship and support
        - Flexible repayment schedules aligned with business cycles

        Women form groups of 10-15 members who guarantee each other's loans and provide mutual support. This approach not only reduces risk but also creates strong networks of women entrepreneurs who share knowledge, resources, and encouragement.

        "The program has transformed my life completely," said Agnes Wanjiku, a member from Kiambu County who started a vegetable trading business with her first loan of 10,000 shillings. "I've now taken three loans, each larger than the last, and my business employs two other women from my community."

        The impact extends beyond individual businesses. A recent evaluation found that participating women have:

        - Increased their average monthly income by 75%
        - Gained greater decision-making power in their households
        - Improved their children's school attendance and nutrition
        - Developed stronger social networks and community leadership skills

        The program also includes a savings component, with women's groups maintaining collective savings accounts that provide emergency funds and investment capital for group projects. These savings have funded community initiatives including water projects, school improvements, and group farming ventures.

        Mary Njeri, HAAPNET's Finance and Operations Manager, attributes the high repayment rate to the program's holistic approach. "We don't just give loans; we build capacity, create support systems, and ensure that women have the skills and knowledge they need to succeed."

        Looking ahead, the program plans to expand to three additional counties and introduce new financial products including agricultural loans and education financing. A partnership with a local bank is also being developed to provide a pathway for successful borrowers to access larger loans and more sophisticated financial services.

        The success of HAAPNET's microfinance program has attracted attention from other development organizations and government agencies. The model is being studied for potential replication in other regions, with several organizations expressing interest in adapting the approach for their own programs.
      `,
      date: "2023-12-20",
      category: "updates",
      author: "Mary Njeri",
      image: "https://via.placeholder.com/800x400?text=Microfinance+Milestone",
      slug: "microfinance-500-milestone",
      readTime: "4 min read",
    },
  ]

  const filteredArticles =
    selectedCategory === "all" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">News & Updates</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Stay informed about our latest achievements, program updates, and community impact stories from across
              Kenya.
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

      {/* News Articles */}
      <section className="py-20 bg-neutral">
        <div className="max-w-container mx-auto px-4">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? "lg:col-start-3" : ""}`}>
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full capitalize">
                        {article.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 p-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-balance">{article.title}</h2>

                    <p className="text-gray-600 leading-relaxed mb-6 text-pretty">{article.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          // In a real app, this would navigate to the full article
                          alert(
                            `Full article: ${article.title}\n\nThis would open the complete article in a real implementation.`,
                          )
                        }}
                        className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors duration-300"
                      >
                        Read Full Article
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>

                      <div className="flex items-center space-x-4">
                        <button
                          className="text-gray-400 hover:text-primary transition-colors"
                          aria-label="Share article"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                        </button>
                        <button
                          className="text-gray-400 hover:text-primary transition-colors"
                          aria-label="Bookmark article"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
              Subscribe to our newsletter to receive the latest news, updates, and impact stories directly in your
              inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default News
