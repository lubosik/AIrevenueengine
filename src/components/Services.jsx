import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "🧩 AI Receptionist & Lead Qualification Systems",
    description: "Your business should never miss another lead. Our AI receptionist answers calls instantly, qualifies prospects, and books appointments directly into your calendar.",
    features: [
      "Instant AI call answering",
      "Lead qualification by budget, timeline, and fit",
      "Calendar booking and reminders",
      "CRM logging and follow-up workflows"
    ],
    setupPrice: "from $2,500",
    monthlyPrice: "from $750–1,000",
    setupNote: "one-time",
    monthlyNote: "depending on call volume and channels",
    offer: "New Client Offer: Setup Credit Back",
    offerDetails: "Launch your AI receptionist and hit your agreed usage targets in the first 30 days. You'll get up to $1,000 back as account credit for your next month(s) of service.",
    result: "Increase qualified bookings by up to 50% and recover lost revenue from missed calls."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "💌 Cold Email & B2B Outreach Engine",
    description: "Most outreach campaigns fail because they sound robotic. Ours don't. We build smart, compliant systems that send short, personalized messages and keep your pipeline full of warm leads.",
    features: [
      "Domain and inbox setup",
      "Prospect list building",
      "Personalized email copy",
      "Automation, reply handling, and booking"
    ],
    setupPrice: "$3,000",
    monthlyPrice: "Optional: pay-per-qualified-lead or pay-per-booked-call",
    setupNote: "one-time (Build & launch)",
    monthlyNote: "",
    offer: "New Client Offer: Win Your Build Fee Back (As Credit)",
    offerDetails: "If you don't hit your agreed number of qualified booked calls in the first 30 days, we convert your $3,000 build fee into account credit for any of our systems.",
    result: "Increase booked calls by up to 45% with hands-free B2B outreach."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: "🌐 High-Converting Landing Pages & Websites",
    description: "Your website should make you money, not just sit there looking pretty. We use AI coders to build fast, SEO-optimized, and conversion-focused websites that turn visitors into paying customers.",
    features: [
      "Conversion-focused page design",
      "AI-built websites and funnels",
      "Copy, design, tracking, and integrations",
      "Optional calculators and booking flows"
    ],
    setupPrice: "$1 for first page, $999 for second",
    monthlyPrice: "Funnels (3 pages): from $2,500",
    setupNote: "Landing pages (minimum 2 pages required)",
    monthlyNote: "Full websites: custom builds, priced per project",
    specialPricing: "New Client Offer: $1 Launch Lock-In",
    specialPricingDetails: "Pay $1 today to secure our new-client launch rate. After your strategy call, if you move forward, the $1 applies to your discounted build price.",
    result: "Improve ad ROI and on-page conversion rates by up to 40%."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.982 9h0M4 16h0a8.001 8.001 0 0015.356-2m-15.356 0h15.356m0 0V9m0 7v-7m0 0H9m6 0H9" />
      </svg>
    ),
    title: "🔁 Old Lead Reactivation Campaigns",
    description: "You already paid for those leads — now let's wake them up. We audit your old lists, write new reactivation sequences, and bring those prospects back into your booking flow automatically.",
    features: [
      "Audit of your lead lists",
      "SMS, email, and voice reactivation scripts",
      "Automated sequences",
      "CRM integration and handoff"
    ],
    setupPrice: "from $1,000–1,500",
    monthlyPrice: "Optional: pay-per-show or pay-per-sale pricing",
    setupNote: "Setup & build",
    monthlyNote: "",
    offer: "New Client Offer: Performance-First Reactivation",
    offerDetails: "We start small with one segment. You pay the setup fee, and then only pay for actual results — shows or sales.",
    result: "Win back old leads and recover up to 30% of dormant revenue."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "📊 Revenue Diagnostic Sprint",
    description: "Sometimes the problem isn't effort — it's visibility. This sprint gives you a clear view of where your business is losing money and how to fix it fast.",
    features: [
      "Deep-dive interviews across sales, marketing, and ops",
      "Interactive AI dashboard to map revenue leaks",
      "System blueprints and SOPs",
      "Video walkthrough and action plan"
    ],
    setupPrice: "from $2,000",
    monthlyPrice: "",
    setupNote: "Sprint",
    monthlyNote: "",
    offer: "New Client Offer: Found Money or Credit",
    offerDetails: "If we don't show at least $10,000 in clear revenue opportunities, we convert your sprint fee into account credit for system builds.",
    result: "Improve ROI visibility and campaign efficiency by up to 70%."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "🔧 Ongoing AI Revenue Engine Retainers",
    description: "For businesses that want us in their corner every month, not just for one-off projects.",
    features: [
      "Monthly implementation and support",
      "System reviews and optimization",
      "Upgrades to existing automations",
      "Priority guidance and accountability",
      "Full automation suite for leads, follow-ups, and bookings",
      "White-glove setup and optimization",
      "Quarterly reviews and dedicated manager"
    ],
    setupPrice: "from $997–1,500/month",
    monthlyPrice: "Custom monthly pricing based on scope",
    setupNote: "Ongoing Consultancy Retainer",
    monthlyNote: "Revenue Autopilot",
    offer: "",
    offerDetails: "",
    result: "Maintain consistent growth while your systems work 24/7."
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
            What We Build — And How It Makes You Money
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              {/* Card with Glassmorphism */}
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative overflow-hidden">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-primary-purple flex-shrink-0"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white group-hover:text-primary-purple transition-colors duration-300 flex-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-text text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What it includes */}
                  <div className="mb-6">
                    <p className="text-white font-semibold mb-3">What it includes:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-text">
                          <svg className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment */}
                  <div className="mb-6 bg-primary-purple/10 border border-primary-purple/30 rounded-xl p-6">
                    <p className="text-white font-semibold mb-2">Investment:</p>
                    {service.setupPrice && (
                      <p className="text-gray-text mb-1">
                        <span className="text-white font-semibold">Setup:</span> {service.setupPrice} {service.setupNote && `(${service.setupNote})`}
                      </p>
                    )}
                    {service.monthlyPrice && (
                      <p className="text-gray-text">
                        <span className="text-white font-semibold">Monthly:</span> {service.monthlyPrice} {service.monthlyNote && `(${service.monthlyNote})`}
                      </p>
                    )}
                    {service.specialPricing && (
                      <div className="mt-4 pt-4 border-t border-primary-purple/30">
                        <p className="text-primary-purple font-semibold mb-2">{service.specialPricing}</p>
                        <p className="text-gray-text text-sm">{service.specialPricingDetails}</p>
                      </div>
                    )}
                  </div>

                  {/* New Client Offer */}
                  {service.offer && (
                    <div className="mb-6 bg-accent-purple-glow/10 border border-accent-purple-glow/30 rounded-xl p-6">
                      <p className="text-accent-purple-light font-semibold mb-2">{service.offer}</p>
                      <p className="text-gray-text text-sm">{service.offerDetails}</p>
                    </div>
                  )}

                  {/* Result */}
                  <div className="mb-6">
                    <p className="text-white font-semibold mb-2">What you get:</p>
                    <p className="text-primary-purple font-semibold">{service.result}</p>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://calendly.com/ai-poweredsolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block w-full text-center px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300"
                  >
                    Request Custom Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section: Why Businesses Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-white mb-6">
              Why Businesses Choose Us
            </h3>
            <p className="text-lg text-gray-text leading-relaxed mb-4">
              We don't do cookie-cutter setups or "AI gimmicks."
            </p>
            <p className="text-lg text-gray-text leading-relaxed mb-4">
              Every system we build is designed to directly increase your conversions, lifetime value, and overall profit.
            </p>
            <p className="text-lg text-gray-text leading-relaxed mb-4">
              We partner with business owners who want real results — not just more tools to manage.
            </p>
            <p className="text-xl text-primary-purple font-semibold">
              When you work with us, your systems don't just run. They earn.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
