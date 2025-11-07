import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Lead Qualification That Never Sleeps",
    description: "Your sales team spends hours calling people who aren't ready to buy. Our AI agent answers every call instantly, asks the right questions, and only books qualified leads into your calendar. No more tire-kickers.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.982 9h0M4 16h0a8.001 8.001 0 0015.356-2m-15.356 0h15.356m0 0V9m0 7v-7m0 0H9m6 0H9" />
      </svg>
    ),
    title: "Automatic Follow-Ups That Actually Work",
    description: "Leads forget. People ghost. No-shows happen. Our system automatically nudges prospects across SMS, voice, and email for 30 days. If they're not ready now, we'll nurture them until they are.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cold Emails That Don't Feel Cold",
    description: "Most cold emails hit spam or feel generic. We build targeted lists, set up safe domains, write short personalized emails, and handle replies to book meetings. Your pipeline stays full.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Book Appointments While You Sleep",
    description: "Hot leads go cold in an hour. Our AI calls new leads within 30 seconds of them filling a form, qualifies them, and books the appointment instantly. If they don't pick up, it sends a booking link via SMS.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Never Miss Another Call",
    description: "Every missed call is lost money. Our AI receptionist answers immediately, handles FAQs, books appointments, and updates your CRM. Complex calls? It transfers to your team.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.982 9h0M4 16h0a8.001 8.001 0 0015.356-2m-15.356 0h15.356m0 0V9m0 7v-7m0 0H9m6 0H9" />
      </svg>
    ),
    title: "Wake Up Old Leads",
    description: "You have a list of old leads gathering dust. We'll reactivate them with AI-powered calls, emails, and texts. Some of those people are ready to buy now.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: "Landing Pages That Convert",
    description: "Running Google Ads but your landing page isn't converting? We build SEO-optimized, high-converting pages designed to turn clicks into customers.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Professional Websites, Built Fast",
    description: "We use AI coders like Cursor and Claude to build beautiful, functional websites in days, not months. Custom designs, no templates.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Build Your Own Solution",
    description: "Got a unique problem? Describe your ideal automation and we'll tell you if it's possible. Then we'll build it specifically for your business.",
  },
]

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Services section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
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
            How We Help You Make More Money
          </h2>
          <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Most businesses waste time on manual tasks that AI can handle. We build systems that work 24/7 so you can focus on what actually grows revenue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card with Glassmorphism */}
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative overflow-hidden">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-primary-purple mb-6 inline-block"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href="https://calendly.com/ai-poweredsolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2.5 border border-primary-purple/50 text-primary-purple rounded-lg hover:bg-primary-purple hover:text-white hover:border-primary-purple transition-all duration-300 text-sm font-semibold group-hover:shadow-md group-hover:shadow-primary-purple/30"
                  >
                    Request Custom Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultancy Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
              Done-For-You Strategy & Implementation
            </h2>
            <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Not just tools. We give you a complete system and stick around to make sure it works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Package 1: Revenue Diagnostic Sprint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 h-full transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-primary-purple">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white">
                      Revenue Diagnostic Sprint
                    </h3>
                  </div>

                  <p className="text-gray-text text-lg leading-relaxed mb-6">
                    We interview your team across sales, marketing, and ops. Then we build you an interactive dashboard showing exactly where you're losing money and how to fix it. You get an AI assistant trained on your business, video walkthrough, and clear action plan.
                  </p>

                  <div className="mb-6">
                    <p className="text-white font-semibold mb-3">What you get:</p>
                    <ul className="space-y-2 text-gray-text">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Stakeholder interviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Interactive AI dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>AI assistant (ask your consultant anytime)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>System blueprints & SOPs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Video walkthrough</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">Starting at £2,000</p>
                    <p className="text-gray-text text-sm">One-time payment</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="https://calendly.com/ai-poweredsolutions/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-center"
                    >
                      Request Custom Quote
                    </motion.a>
                    <motion.a
                      href="https://comfy-truffle-f26340.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-center"
                    >
                      View Demo Dashboard
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Package 2: Ongoing Consultancy Retainer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 h-full transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-primary-purple">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white">
                      Ongoing Consultancy Retainer
                    </h3>
                  </div>

                  <p className="text-gray-text text-lg leading-relaxed mb-6">
                    We don't just hand you a plan and leave. We stick around monthly to implement, review, upgrade systems, and make sure the money actually shows up.
                  </p>

                  <div className="mb-6">
                    <p className="text-white font-semibold mb-3">What you get:</p>
                    <ul className="space-y-2 text-gray-text">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Monthly implementation support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>System reviews and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Upgrade existing systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Priority support and guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Accountability to hit your goals</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">£997 - £1,500/month</p>
                    <p className="text-gray-text text-sm">Monthly retainer</p>
                  </div>

                  <motion.a
                    href="https://calendly.com/ai-poweredsolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-8 py-3 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-center"
                  >
                    Request Custom Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
