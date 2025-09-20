"use client"

import { useEffect, useRef } from "react"
import Link from "next/link";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules"
import { heroSlides } from "../data/slides"
import { handleImageError } from "../utils/imagePlaceholder"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const VerticalCarousel = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference in communities across Kenya.
          </p>
        </motion.div> */}

        <div className="relative pt-7">
          {/* Carousel Container */}
          <div className="flex items-start gap-4 md:gap-8">
            {/* Left Navigation - Hidden on very small screens */}
            <div className="hidden sm:flex flex-col items-center space-y-4 pt-8">
              {/* Up Button (Previous) */}
              <button
                className="swiper-button-prev-custom w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label="Previous slide (up)"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              {/* Custom Pagination Dots
              <div className="swiper-pagination-custom flex flex-col items-center py-4"></div> */}

              {/* Down Button (Next) */}
              <button
                className="swiper-button-next-custom w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label="Next slide (down)"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Swiper Container */}
            <div className="flex-1 h-[400px] sm:h-[500px] overflow-hidden rounded-lg">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
                direction="vertical"
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                  el: window.innerWidth < 640 ? ".swiper-pagination-mobile" : ".swiper-pagination-custom",
                  renderBullet: function (index, className) {
                    return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`
                  },
                }}
                autoplay={{
                  delay: 5000,
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
              >
                {heroSlides.map((slide, index) => (
                  <SwiperSlide key={slide.id}>
                    <motion.div
                      className="relative h-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-200 group"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={`Background for ${slide.headline}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>

                      {/* Gradient Overlay - Black at bottom fading to transparent */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Content positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                        <div className="space-y-3 md:space-y-4">
                          {/* Category Badge */}
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded">
                            Featured Story
                          </span>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                            {slide.headline}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-200 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
                            {slide.subheadline}
                          </p>

                          {/* CTA Link */}
                          <Link
                            href={slide.ctaLink}
                            className="inline-flex items-center text-white hover:text-blue-200 font-medium transition-colors duration-200 text-sm sm:text-base"
                            aria-label={`${slide.cta} - Learn more about ${slide.headline}`}
                          >
                            {slide.cta}
                            <svg
                              className="ml-2 w-4 h-4"
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
                        </div>
                      </div>

                      {/* Slide Indicator for Screen Readers */}
                      <div className="sr-only">
                        Slide {index + 1} of {heroSlides.length}: {slide.headline}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Mobile Navigation - Visible only on small screens */}
          <div className="sm:hidden flex justify-center items-center space-x-4 mt-6">
            {/* Mobile Up Button */}
            <button
              className="swiper-button-prev-custom w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Mobile Pagination Dots
            <div className="swiper-pagination-mobile flex space-x-2"></div> */}

            {/* Mobile Down Button */}
            <button
              className="swiper-button-next-custom w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Pause/Play Button */}
          <button
            className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            onClick={() => {
              if (swiperRef.current?.swiper.autoplay.running) {
                swiperRef.current.swiper.autoplay.stop()
              } else {
                swiperRef.current?.swiper.autoplay.start()
              }
            }}
            aria-label="Pause or play carousel autoplay"
          >
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Styles for Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          display: block !important;
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          border: 2px solid transparent !important;
          margin: 6px 0 !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: #9ca3af !important;
          transform: scale(1.1) !important;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #2563eb !important;
          border-color: rgba(37, 99, 235, 0.3) !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet-active-custom:hover {
          transform: scale(1.25) !important;
        }
        
        .swiper-pagination-custom {
          position: static !important;
          width: auto !important;
          height: auto !important;
        }
        
        /* Mobile pagination styles */
        .swiper-pagination-mobile .swiper-pagination-bullet-custom {
          display: inline-block !important;
          margin: 0 4px !important;
        }
        
        @media (max-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 8px !important;
            height: 8px !important;
            margin: 0 3px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default VerticalCarousel