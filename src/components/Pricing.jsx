import { motion } from 'framer-motion'

const pricingTiers = [
  {
    name: "Quick Win",
    description: "Start with one system to solve your biggest bottleneck right now.",
    features: [
      "Single automation system",
      "Basic setup & integration",
      "2 weeks support",
      "Training documentation",
    ],
    badge: null,
  },
  {
    name: "Growth Engine",
    description: "Multiple systems working together to fill your pipeline and close more deals.",
    features: [
      "2-3 automation systems",
      "Full integration with your tools",
      "30 days support",
      "Training + optimization",
      "Monthly system check-ins",
    ],
    badge: "Most Popular",
  },
  {
    name: "Revenue Autopilot",
    description: "A complete revenue system that runs 24/7. We handle everything.",
    features: [
      "Full automation suite",
      "White-glove setup",
      "Ongoing optimization",
      "Priority support",
      "Quarterly strategy reviews",
      "Dedicated account manager",
    ],
    badge: null,
  },
]

export default function Pricing() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Pricing section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
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
            Flexible Packages For Every Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Every business is different. We build custom solutions that fit your needs and budget.
          </p>
        </motion.div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: tier.badge === "Most Popular" ? -12 : -8, scale: 1.02 }}
              className={`relative group ${tier.badge === "Most Popular" ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Most Popular Badge */}
              {tier.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                      "0 0 30px rgba(147, 51, 234, 0.8)",
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white text-sm font-bold rounded-full shadow-lg shadow-primary-purple/50">
                    {tier.badge}
                  </span>
                </motion.div>
              )}

              {/* Pricing Card */}
              <div
                className={`bg-dark-gray-bg/50 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 relative overflow-hidden ${
                  tier.badge === "Most Popular"
                    ? "border-primary-purple/70 shadow-2xl shadow-primary-purple/30"
                    : "border-white/10 hover:border-primary-purple/50 hover:shadow-lg hover:shadow-primary-purple/10"
                }`}
              >
                {/* Enhanced glow effect for Most Popular */}
                {tier.badge === "Most Popular" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/15 to-accent-purple-glow/15 rounded-2xl"></div>
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary-purple/20 to-accent-purple-glow/20 rounded-2xl blur-xl opacity-50"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}

                {/* Subtle glow for other cards on hover */}
                {!tier.badge && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
                )}

                <div className="relative z-10">
                  {/* Tier Name */}
                  <h3
                    className={`text-3xl font-heading font-bold mb-4 transition-colors duration-300 ${
                      tier.badge === "Most Popular"
                        ? "text-white"
                        : "text-white group-hover:text-primary-purple"
                    }`}
                  >
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-lg leading-relaxed mb-8">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.svg
                          className="w-6 h-6 text-primary-purple mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                        <span className="text-gray-text text-base leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="https://calendly.com/ai-poweredsolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full px-8 py-4 text-center font-semibold rounded-lg transition-all duration-300 ${
                      tier.badge === "Most Popular"
                        ? "bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70"
                        : "border-2 border-primary-purple/50 text-primary-purple hover:bg-primary-purple hover:text-white hover:border-primary-purple hover:shadow-md hover:shadow-primary-purple/30"
                    }`}
                  >
                    Request Custom Quote
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-dark-gray-bg/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-text text-lg leading-relaxed">
              All packages include: <span className="text-white font-semibold">Custom configuration</span>, integration with your existing tools, training, and ongoing support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
