import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary-purple/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-purple-glow/25 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple-light/20 rounded-full blur-3xl"
        />

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100
            const randomY = Math.random() * 100
            const randomDelay = Math.random() * 2
            const randomDuration = Math.random() * 3 + 2
            const randomOpacity = Math.random() * 0.5 + 0.2
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-purple/40 rounded-full"
                initial={{
                  x: `${randomX}%`,
                  y: `${randomY}%`,
                  opacity: randomOpacity,
                }}
                animate={{
                  y: [`${randomY}%`, `${randomY - 20}%`],
                  opacity: [randomOpacity, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "linear",
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center">
          
          {/* "New" Badge with Enhanced Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 relative"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 10px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.8)",
                  "0 0 10px rgba(147, 51, 234, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block px-4 py-1.5 bg-primary-purple/20 border border-primary-purple/50 rounded-full text-primary-purple text-sm font-semibold backdrop-blur-sm relative z-10"
            >
              New
            </motion.span>
          </motion.div>

          {/* Main Headline with Glow Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight relative z-10"
            style={{
              textShadow: '0 0 40px rgba(147, 51, 234, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)',
            }}
          >
            AI Automation That
            <br />
            <span className="bg-gradient-to-r from-primary-purple to-accent-purple-light bg-clip-text text-transparent">
              Actually Makes You Money
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-text max-w-3xl mb-4 sm:mb-6 leading-relaxed relative z-10 px-2 sm:px-0"
          >
            We build AI systems that qualify leads, book appointments, and follow up automatically. 
            So you can focus on closing deals, not chasing them.
          </motion.p>

          {/* 5 Star Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-2 mb-10 relative z-10"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">5.0</span>
            <span className="text-gray-text text-sm sm:text-base">(50+ businesses trust us)</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 relative z-10 w-full sm:w-auto"
          >
            <motion.a
              href="https://calendly.com/ai-poweredsolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2"
            >
              Get a Custom Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('demo')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-base sm:text-lg"
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust Badge Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full relative z-10"
          >
            <p className="text-gray-text text-sm sm:text-base mb-6">
              Trusted by businesses ready to grow
            </p>
            
            {/* Logo Carousel Placeholder */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {/* Placeholder logos - will be replaced with actual client logos */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="text-gray-text text-2xl font-semibold"
                >
                  Logo
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
