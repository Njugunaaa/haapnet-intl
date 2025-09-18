"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { id: 1, number: 50, suffix: "+", label: "Communities Served", description: "Across Kenya" },
    { id: 2, number: 2500, suffix: "+", label: "People Trained", description: "In various skills" },
    { id: 3, number: 150, suffix: "+", label: "Projects Completed", description: "Sustainable impact" },
    { id: 4, number: 85, suffix: "%", label: "Success Rate", description: "Project sustainability" },
  ]

  const Counter = ({ number, suffix, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = number / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, [number, isVisible])

    return (
      <span className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

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
    <section className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 dotted-bg"></div>
      </div>

      <div className="max-w-container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Our Impact in Numbers</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Measurable results from our commitment to community empowerment and sustainable development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Counter number={stat.number} suffix={stat.suffix} isVisible={isInView} />

                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{stat.label}</h3>

                <p className="text-white/80 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/90 text-lg max-w-3xl mx-auto text-pretty">
            Every number represents real people, real communities, and real change. Join us in creating even greater
            impact together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
