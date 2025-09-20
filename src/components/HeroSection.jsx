import { motion } from "framer-motion";

const HeroSection = ({
  title = "Default Title",
  description = "Default description text goes here.",
  gradientFrom,
  gradientVia,
  gradientTo,
  titleSize = "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  descriptionSize = "text-lg md:text-xl lg:text-2xl"
}) => {
  return (
    <div className="py-12 md:py-5 px-3 sm:px-4 md:px-8">
      <section 
        className={`relative mx-auto max-w-6xl rounded-[3rem] overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} py-16 md:py-20`}
      >
        {/* Subtle 3D-like Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating square */}
          <div className="absolute top-16 right-20 w-32 h-32 bg-white/5 backdrop-blur-sm transform rotate-12 rounded-2xl shadow-lg border border-white/10"></div>

          {/* Medium circle with depth */}
          <div className="absolute bottom-24 left-16 w-24 h-24 bg-gradient-to-br from-white/8 to-white/3 rounded-full shadow-md"></div>

          {/* Diamond shape */}
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/4 backdrop-blur-sm transform rotate-45 shadow-sm border border-white/8"></div>

          {/* Small accent shapes */}
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/6 rounded-lg transform -rotate-12 shadow-md"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${titleSize} font-bold mb-6 text-balance text-white drop-shadow-lg`}>
              {title}
            </h1>
            <p className={`${descriptionSize} text-white/95 leading-relaxed text-pretty drop-shadow-md`}>
              {description}
            </p>
          </motion.div>
        </div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>
    </div>
  );
};

// Example usage with different configurations
const ExampleUsage = () => {
  return (
    <div className="space-y-8">
      {/* Default blue gradient */}
      <HeroSection
        title="About HAAPNET"
        description="Harvest-time Apostolic And Prophetic NETwork - Empowering communities through local leadership, sustainable development, and collaborative action."
      />

      {/* Green gradient */}
      <HeroSection
        title="Our Programs"
        description="Comprehensive training and development programs designed to empower communities and create sustainable change across Kenya."
        gradientFrom="green-600"
        gradientVia="green-500"
        gradientTo="emerald-400"
      />

      {/* Purple gradient */}
      <HeroSection
        title="Get Involved"
        description="Join our mission to create lasting positive change in communities across Kenya through collaboration and shared commitment."
        gradientFrom="purple-600"
        gradientVia="purple-500"
        gradientTo="pink-400"
      />

      {/* Orange gradient with custom sizes */}
      <HeroSection
        title="Contact Us"
        description="Ready to make a difference? Let's work together to empower communities and build a better future."
        gradientFrom="orange-600"
        gradientVia="orange-500"
        gradientTo="yellow-400"
        titleSize="text-2xl md:text-3xl lg:text-4xl"
        descriptionSize="text-base md:text-lg lg:text-xl"
      />

      {/* Red gradient */}
      <HeroSection
        title="Our Impact"
        description="Measuring success through community growth, sustainable livelihoods, and lasting positive transformation across Kenya."
        gradientFrom="red-600"
        gradientVia="red-500"
        gradientTo="rose-400"
      />
    </div>
  );
};

export default HeroSection;