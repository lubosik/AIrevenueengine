import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="About section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Who We Are
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Founders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-8">
              Meet the Team
            </h3>

            <div className="space-y-8">
              {/* Lubosi Kongwa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-purple/50 hover:shadow-lg hover:shadow-primary-purple/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  {/* Photo Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary-purple/40 to-accent-purple-glow/40 border-2 border-primary-purple/70 flex items-center justify-center shadow-lg shadow-primary-purple/30">
                        <span className="text-3xl sm:text-4xl font-bold text-white">LK</span>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(147, 51, 234, 0.4)",
                            "0 0 30px rgba(147, 51, 234, 0.6)",
                            "0 0 20px rgba(147, 51, 234, 0.4)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary-purple transition-colors duration-300">
                      Lubosi Kongwa
                    </h4>
                    <p className="text-primary-purple font-semibold mb-4">
                      Co-Founder & AI Systems Architect
                    </p>
                    <p className="text-gray-text leading-relaxed mb-4">
                      I got into AI because I saw businesses struggling with manual tasks that could be automated. I've spent years building systems that actually make companies money, not just look cool in demos. When I'm not building automations, I'm probably coding or thinking about the next system that can help a business grow.
                    </p>
                    <motion.a
                      href="https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-primary-purple hover:text-accent-purple-light transition-colors font-semibold"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Stella */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="group bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-purple/50 hover:shadow-lg hover:shadow-primary-purple/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  {/* Photo Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary-purple/40 to-accent-purple-glow/40 border-2 border-primary-purple/70 flex items-center justify-center shadow-lg shadow-primary-purple/30">
                        <span className="text-3xl sm:text-4xl font-bold text-white">S</span>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(147, 51, 234, 0.4)",
                            "0 0 30px rgba(147, 51, 234, 0.6)",
                            "0 0 20px rgba(147, 51, 234, 0.4)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary-purple transition-colors duration-300">
                      Stella
                    </h4>
                    <p className="text-primary-purple font-semibold mb-4">
                      Co-Founder & Client Success Lead
                    </p>
                    <p className="text-gray-text leading-relaxed">
                      I run a Scalp Micropigmentation clinic and lived through the chaos of missed calls, no-shows, and manual follow-ups. Now I help other business owners avoid that stress by showing them what AI can do. I've been on the client side, so I know what actually matters.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:border-primary-purple/50 transition-all duration-300">
              {/* Purple accent border on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-purple to-accent-purple-glow"></div>
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-bold text-white mb-6">
                  Why We Do This
                </h3>
                
                <div className="space-y-6 text-lg text-gray-text leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Most businesses don't need another tool. They need systems that work while they sleep. We're here to prove that AI isn't just for tech companies - it's for every business that wants to grow without burning out.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    We've seen too many business owners stuck doing $10/hour work when they should be closing deals. That's why we build automations that handle the boring stuff so you can focus on what you're actually good at.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white font-semibold"
                  >
                    AI is for everyone. If you're serious about growth, we'll show you how.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
