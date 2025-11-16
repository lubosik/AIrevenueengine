import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Vision section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 sm:mb-8">
              The Vision — What Life Looks Like With AI in Place
            </h2>
            
            <div className="space-y-6 text-lg text-gray-text leading-relaxed">
              <p className="text-white font-semibold text-xl mb-4">
                Picture this:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Every new lead is answered within seconds.</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Only qualified prospects make it to your calendar.</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your old leads start coming back on their own.</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>And your marketing pages actually convert instead of just looking good.</span>
                </li>
              </ul>
              
              <p className="text-white font-semibold mt-6">
                You start spending time where it matters most — with customers, closing deals, and planning your next move.
              </p>
              
              <p className="text-primary-purple text-xl font-semibold">
                That's what it feels like when your business runs on the AI Revenue Engine.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507162728832-5b8fdb5f99fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBncm93dGglMjBhdXRvbWF0aW9uJTIwcm9ib3QlMjBoZWxwaW5nJTIwY2FydG9vbiUyMGlsbHVzdHJhdGlvbnxlbnwwfDB8fHwxNzYzMzI5MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Successful business with AI automation"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

