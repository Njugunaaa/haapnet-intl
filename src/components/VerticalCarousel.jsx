"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Define exactly the 4 slides you want
const heroSlides = [
  {
    id: 1,
    image: "/images/20.jpg",
    headline: "Building Resilient Communities Together",
    subheadline:
      "We strengthen families, leaders, and networks through skills, faith, and sustainable solutions.",
    cta: "Learn More",
    ctaLink: "/education",
  },
  {
    id: 2,
    image: "/images/19.jpg",
    headline: "Raising Apostolic and Prophetic Voices",
    subheadline:
      "Equipping leaders to transform communities with Kingdom values and practical action.",
    "cta": "View Projects",
    ctaLink: "/water",
  },
  {
    id: 3,
    image: "/images/22.jpg",
    headline: "Creating Pathways for Economic Growth",
    subheadline:
      "From small business support to agricultural innovation, we empower people to thrive.",
    cta: "Explore Impact",
    ctaLink: "/agriculture",
  },
  {
    id: 4,
    image: "/images/22.jpg",
    headline: "Connecting Faith, Action, and Impact",
    subheadline:
      "Together, we form a global family that uplifts communities and transforms nations.",
    cta: "See Results",
    ctaLink: "/healthcare",
  },
]

const ModernVerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)

  // Autoplay
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 6000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  // Keyboard control
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      } else if (e.key === " ") {
        e.preventDefault()
        setIsPlaying((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Enhanced slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth easing
      },
    },
    exit: (direction) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay * 0.1 + 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* 1. Full, beautiful background image */}
          <motion.img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].headline}
            className="w-full h-full object-cover object-top max-w-full max-h-full"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />

          {/* 2. Content positioned in the bottom left with its own darkening effect */}
          {/* Key Change: Added the background gradient directly to this div */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
              <div className="max-w-2xl">
                {/* Category Badge */}
                <motion.span
                  custom={0}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-sm font-medium rounded-full mb-4"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                  Featured Story
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                >
                  {heroSlides[currentSlide].headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 max-w-xl"
                >
                  {heroSlides[currentSlide].subheadline}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href={heroSlides[currentSlide].ctaLink}
                  custom={3}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="group inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {heroSlides[currentSlide].cta}
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute right-6 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`group relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full ${
              index === currentSlide
                ? "w-3 h-12"
                : "w-2 h-8 hover:w-2.5 hover:h-10"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/40 group-hover:bg-white/60"
            }`} />

            {/* Active slide progress animation */}
            {index === currentSlide && (
              <motion.div
                className="absolute top-0 left-0 w-full bg-blue-400 rounded-full"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Play/Pause Button */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isPlaying ? 0 : 90 }}
          transition={{ duration: 0.3 }}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Slide Counter */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-40 text-white">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm md:text-base font-medium"
        >
          <span className="text-xl md:text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/60 mx-2">/</span>
          <span className="text-white/80">{String(heroSlides.length).padStart(2, '0')}</span>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernVerticalCarousel