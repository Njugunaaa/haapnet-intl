"use client"
import React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { handleImageError } from "../../utils/imagePlaceholder"

const GetInvolved = () => {
  const [activeCard, setActiveCard] = useState(null)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [impactStats] = useState({
    volunteers: 250,
    communities: 45,
    projects: 120,
    beneficiaries: 15000
  })

  // Handle window dimensions for SSR
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })

      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const involvementOptions = [
    {
      id: 1,
      title: "Volunteer",
      subtitle: "Be the Change",
      description: "Join hands-on community projects and see direct impact",
      benefits: [
        "Gain valuable skills & experience",
        "Build meaningful connections",
        "Create lasting community impact",
        "Flexible time commitment"
      ],
      icon: "👥",
      formUrl: "https://forms.google.com/volunteer-form", // Replace with your form URL
      image: "images/11.jpg",
      stats: { label: "Active Volunteers", number: 250 }
    },
    {
      id: 2,
      title: "Donate",
      subtitle: "Fund the Future",
      description: "Power programs that transform lives across Kenya",
      benefits: [
        "100% transparency on fund usage",
        "Quarterly impact reports",
        "Tax-deductible contributions",
        "Choose specific programs to support"
      ],
      icon: "💝",
      formUrl: "", // Will use Paystack integration
      image: "images/10.jpg",
      stats: { label: "Communities Reached", number: 45 }
    }
  ]

  const quickImpactFacts = [
    { icon: "⚡", fact: "$25", detail: "Trains one person in business skills" },
    { icon: "🎯", fact: "$100", detail: "Funds a complete workshop" },
    { icon: "🌟", fact: "$500", detail: "Supports a community project" },
    { icon: "🚀", fact: "$1000", detail: "Launches a new program" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0)
    
    React.useEffect(() => {
      let startTime = null
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [end, duration])
    
    return count
  }

  // Paystack integration
  const payWithPaystack = () => {
    if (typeof window !== 'undefined' && window.PaystackPop) {
      const handler = window.PaystackPop.setup({
        key: 'pk_test_xxxxx', // Replace with your actual public key
        email: "customer@example.com", 
        amount: 5000 * 100, // amount in kobo (KES 5000)
        currency: "KES",
        channels: ["mobile_money"], // enables mpesa
        callback: function(response){
          alert("Payment successful. Ref: " + response.reference);
        },
        onClose: function(){
          alert('Transaction cancelled.');
        }
      });
      handler.openIframe();
    } else {
      alert('Paystack is not loaded. Please refresh the page and try again.');
    }
  }

  const handleCTA = (option) => {
    if (option.title === "Donate") {
      payWithPaystack();
    } else {
      window.open(option.formUrl, '_blank');
    }
  }

  return (
    <>
      {/* Paystack Script */}
      <script src="https://js.paystack.co/v1/inline.js" async></script>
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 overflow-hidden"
      >
        {/* Hero Section with Animated Background */}
        <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          {/* Animated Background Elements */}
          {windowDimensions.width > 0 && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  initial={{ 
                    x: Math.random() * windowDimensions.width, 
                    y: Math.random() * windowDimensions.height 
                  }}
                  animate={{ 
                    x: Math.random() * windowDimensions.width,
                    y: Math.random() * windowDimensions.height,
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{ 
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          )}
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Join the Movement
              </motion.h1>
              <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Choose your path to empower communities across Kenya
              </p>
              
              {/* Impact Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Object.entries(impactStats).map(([key, value], index) => (
                  <motion.div key={key} variants={itemVariants} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
                      <Counter end={value} />
                      {key === 'beneficiaries' ? 'K+' : '+'}
                    </div>
                    <div className="text-blue-200 capitalize text-lg">
                      {key === 'beneficiaries' ? 'Lives Impacted' : key}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Main Involvement Options */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Two Ways to Make Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every contribution matters. Choose the approach that fits your passion and availability.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {involvementOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onHoverStart={() => setActiveCard(option.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  whileHover={{ y: -10 }}
                >
                  {/* Subtle gradient border container */}
                  <div className="p-1 rounded-3xl bg-gradient-to-r from-blue-100 via-purple-50 to-blue-100 shadow-lg">
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                      {/* Image Section - Made larger */}
                      <div className="relative h-80 overflow-hidden">
                        <motion.img
                          src={option.image}
                          alt={`${option.title} program`}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          animate={activeCard === option.id ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="text-6xl mb-2">{option.icon}</div>
                          <div className="text-white">
                            <div className="text-3xl font-bold">{option.stats.number}+</div>
                            <div className="text-sm opacity-90">{option.stats.label}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section - Made larger */}
                      <div className="p-10">
                        <div className="mb-8">
                          <h3 className="text-4xl font-bold text-gray-900 mb-3">{option.title}</h3>
                          <p className="text-xl text-gray-600 font-medium">{option.subtitle}</p>
                          <p className="text-gray-700 mt-4 text-lg">{option.description}</p>
                        </div>

                        {/* Benefits */}
                        <div className="mb-10">
                          <h4 className="font-bold text-gray-900 mb-5 text-xl">Why Choose This Path?</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {option.benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <span className="text-gray-700 text-lg">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button - Solid blue */}
                        <motion.button
                          onClick={() => handleCTA(option)}
                          className="block w-full px-8 py-5 bg-blue-600 hover:bg-red-700 text-white font-bold rounded-2xl text-center text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {option.title === "Donate" ? "Donate Now →" : "Get Started Now →"}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Impact Facts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact in Numbers</h2>
              <p className="text-xl text-gray-600">See exactly how your contribution creates change</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickImpactFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{fact.icon}</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{fact.fact}</div>
                  <div className="text-gray-700">{fact.detail}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Join thousands of changemakers creating lasting impact across Kenya
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  onClick={() => payWithPaystack()}
                  className="inline-flex items-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 text-xl shadow-2xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold rounded-full transition-all duration-300 text-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Have Questions?
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  )
}

export default GetInvolved