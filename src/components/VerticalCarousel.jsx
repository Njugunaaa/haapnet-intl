"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Define exactly the 4 slides you want
const heroSlides = [
  {
    id: 1,
    image: "/images/19.jpg",
    headline: "Building Resilient Communities Together",
    subheadline:
      "We strengthen families, leaders, and networks through skills, faith, and sustainable solutions.",
    cta: "Learn More",
    ctaLink: "/education",
  },
  {
    id: 2,
    image: "/images/20.jpg",
    headline: "Raising Apostolic and Prophetic Voices",
    subheadline:
      "Equipping leaders to transform communities with Kingdom values and practical action.",
    cta: "View Projects",
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
    image: "/images/21.jpg",
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

  // Autoplay - increased time to 10 seconds
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 10000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  // Keyboard control - horizontal navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      } else if (e.key === "ArrowRight") {
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

  // HORIZONTAL slide transition variants (left to right)
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
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
          {/* Fixed: Mobile shows full image, Desktop uses cover */}
          <motion.img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].headline}
            className="w-full h-full object-contain md:object-cover md:object-top bg-black"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />

          {/* Content positioned in the bottom left with its own darkening effect */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-8 sm:pb-12 md:pb-16">
              <div className="max-w-2xl">
                {/* Category Badge */}
                <motion.span
                  custom={0}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mr-1.5 md:mr-2 animate-pulse" />
                  Featured Story
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 md:mb-4"
                >
                  {heroSlides[currentSlide].headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 md:mb-6 max-w-xl"
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
                  className="group inline-flex items-center px-4 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm md:text-base"
                >
                  {heroSlides[currentSlide].cta}
                  <motion.svg
                    className="ml-1.5 md:ml-2 w-3 h-3 md:w-4 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators - moved to bottom center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row gap-3 md:gap-4 z-40">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`group relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full ${
              index === currentSlide
                ? "h-2.5 w-10 md:h-3 md:w-12"
                : "h-2 w-6 md:h-2 md:w-8 hover:h-2.5 hover:w-8 md:hover:h-2.5 md:hover:w-10"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white shadow-lg"
                  : "bg-white/40 group-hover:bg-white/60"
              }`}
            />

            {/* Active slide progress animation - updated to 10 seconds */}
            {index === currentSlide && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Play/Pause Button */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 z-40 group"
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
            <svg
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Slide Counter */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-40 text-white">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs md:text-sm lg:text-base font-medium"
        >
          <span className="text-lg md:text-xl lg:text-2xl font-bold">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="text-white/60 mx-1 md:mx-2">/</span>
          <span className="text-white/80">
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernVerticalCarousel
