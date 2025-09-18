"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules"
import { heroSlides } from "../data/slides"
import { handleImageError } from "../utils/imagePlaceholder"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const HeroCarousel = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Preload images with fallback
    heroSlides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
      img.onerror = () => {
        console.log(`Failed to load image: ${slide.image}`)
      }
    })
  }, [])

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero carousel showcasing HAAPNET's mission and impact"
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
        }}
        loop={true}
        className="h-full"
        onSlideChange={() => {
          // Respect reduced motion preference
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
          }
        }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image with Fallback */}
            <div className="absolute inset-0 bg-gray-900">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`Hero image for ${slide.headline}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-container mx-auto px-4 w-full">
                <motion.div
                  className="max-w-3xl text-white"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  key={`slide-${slide.id}`}
                >
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
                    variants={slideVariants}
                  >
                    {slide.headline}
                  </motion.h1>

                  <motion.p
                    className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed text-pretty"
                    variants={slideVariants}
                  >
                    {slide.subheadline}
                  </motion.p>

                  <motion.div variants={slideVariants}>
                    <Link
                      to={slide.ctaLink}
                      className="inline-flex items-center px-8 py-4 bg-accent hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                      aria-label={`${slide.cta} - Learn more about ${slide.headline}`}
                    >
                      {slide.cta}
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Slide Indicator for Screen Readers */}
            <div className="sr-only">
              Slide {index + 1} of {heroSlides.length}: {slide.headline}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pause/Play Button for Accessibility */}
        <button
          className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          onClick={() => {
            if (swiperRef.current?.swiper.autoplay.running) {
              swiperRef.current.swiper.autoplay.stop()
            } else {
              swiperRef.current?.swiper.autoplay.start()
            }
          }}
          aria-label="Pause or play carousel autoplay"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroCarousel
