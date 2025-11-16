import { motion } from 'framer-motion'

export default function Bridge() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Bridge section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1601568605995-47c3f2b772a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25uZWN0aW9uJTIwc29sdXRpb24lMjBwYXRoJTIwZm9yd2FyZCUyMGNhcnRvb24lMjBpbGx1c3RyYXRpb258ZW58MHwwfHx8MTc2MzMyOTI2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bridge to solution"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 sm:mb-8">
              The Bridge — How We Get You There
            </h2>
            
            <div className="space-y-6 text-lg text-gray-text leading-relaxed">
              <p className="text-white font-semibold text-xl mb-4">
                We don't sell tools.
              </p>
              
              <p className="text-white font-semibold text-xl mb-6">
                We build revenue systems that pay for themselves.
              </p>
              
              <p className="mb-6">
                Our process is simple and transparent:
              </p>
              
              <div className="space-y-6">
                <div className="bg-dark-gray-bg/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    Revenue Diagnostic Sprint
                  </h3>
                  <p>
                    We find exactly where your business is leaking money or wasting time.
                  </p>
                </div>
                
                <div className="bg-dark-gray-bg/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    Custom AI System Build
                  </h3>
                  <p>
                    We build the automations that fix those leaks and start generating results.
                  </p>
                </div>
                
                <div className="bg-dark-gray-bg/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    Ongoing Optimization
                  </h3>
                  <p>
                    We stay in your corner, tracking data and improving performance as you scale.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

