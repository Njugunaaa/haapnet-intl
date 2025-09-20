"use client"

import { motion } from "framer-motion"
import VerticalCarousel from "../components/VerticalCarousel"
import AboutTeaser from "../components/AboutTeaser"
import WhatWeDoList from "../components/WhatWeDoList"
import Stats from "../components/Stats"
import NewsPreview from "../components/NewsPreview"

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <VerticalCarousel />
      <AboutTeaser />
      <WhatWeDoList />
      <Stats />
      <NewsPreview />
    </motion.main>
  )
}

export default Home
