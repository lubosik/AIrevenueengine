import { motion } from 'framer-motion'
import { useState } from 'react'

const caseStudies = [
  {
    title: "Interactive Consultancy Dashboard",
    industry: "Business Consulting",
    description: "Built an interactive AI dashboard that analyzes revenue leaks across sales, marketing, and operations. Shows exactly where businesses are losing money and provides actionable solutions.",
    videoEmbed: "https://www.loom.com/embed/8d081d46ed384015a73f1d4d87cf632f",
    features: [
      "Real-time revenue analysis",
      "Interactive AI assistant",
      "Identifies money leaks instantly",
      "Actionable improvement plans",
    ],
    impact: "Helps businesses find 3-5 revenue leaks they didn't know existed",
    type: "video",
  },
  {
    title: "AI Lead Qualification Agent",
    industry: "B2B SaaS",
    description: "Built an AI voice agent that calls new leads within 60 seconds, asks qualifying questions, and books only high-intent prospects into the sales calendar.",
    videoEmbed: "https://www.loom.com/embed/07a614b895544172bb911cafc531a590",
    features: [
      "Answers inbound inquiries 24/7",
      "Qualifies based on budget and need",
      "Books directly into calendar",
      "Logs everything in CRM",
    ],
    impact: "Reduced sales team time spent on unqualified leads by 60%",
    type: "video",
  },
  {
    title: "LinkedIn Outreach System",
    industry: "B2B Sales",
    description: "Created an automated LinkedIn outreach system that finds prospects, sends personalized messages, and books discovery calls on autopilot.",
    videoEmbed: "https://www.loom.com/embed/0ff575c4eb3746a482748344c8d529d1",
    features: [
      "Automated prospect discovery",
      "Personalized connection requests",
      "Follow-up message sequences",
      "Books qualified calls automatically",
    ],
    impact: "Generating 15-20 qualified meetings per month",
    type: "video",
  },
  {
    title: "File Easy Accountancy Website",
    industry: "Accounting Services",
    description: "Built a complete SEO-optimized website with AI coders (Cursor & Claude). Features custom IR35 calculator tool, modern design, and high conversion rates.",
    websiteUrl: "https://fileeasyaccountancy.co.uk",
    images: [
      "/images/File Easy Home Page.jpg",
      "/images/IR35 Calculator.jpg",
    ],
    imageAlt: "File Easy Accountancy website screenshots",
    features: [
      "SEO-optimized pages",
      "Custom IR35 calculator tool",
      "Modern, professional design",
      "Built with AI coders in days",
    ],
    impact: "Professional website that converts visitors into clients",
    type: "website",
  },
  {
    title: "Miami Septic Pros Website",
    industry: "Septic Services",
    description: "Created a complete website with built-in Septic Tank Pumping Schedule Calculator. Fast, responsive, and designed to generate leads.",
    websiteUrl: "https://miamisepticpros.com",
    images: [
      "/images/Miami Septic Pros Homepage.jpg",
      "/images/Free Septic Tank Pumping Schedule Calculator.jpg",
    ],
    imageAlt: "Miami Septic Pros website screenshots",
    features: [
      "Custom calculator tool",
      "Lead generation focused",
      "Mobile-responsive design",
      "Fast loading times",
    ],
    impact: "Professional website that drives qualified leads",
    type: "website",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Case studies section">
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
            See What We've Built
          </h2>
          <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Real systems, real results. Here's what AI automation looks like in action.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group"
            >
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>

                {/* Media Container */}
                {study.type === "video" ? (
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.426%' }}>
                    <iframe
                      src={study.videoEmbed}
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      className="rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-full overflow-hidden">
                    {/* Image Gallery */}
                    <div className="grid grid-cols-2 gap-2 p-2 bg-dark-gray-bg/30">
                      {study.images.map((image, imgIndex) => {
                        const ImageWithPlaceholder = () => {
                          const [imageError, setImageError] = useState(false)
                          const [imageLoaded, setImageLoaded] = useState(false)
                          
                          return (
                            <motion.div
                              whileHover={{ scale: 1.05, zIndex: 10 }}
                              className="relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-dark-gray-bg to-primary-black"
                              style={{ paddingBottom: '75%' }}
                            >
                              {!imageError ? (
                                <>
                                  {!imageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center">
                                        <svg className="w-12 h-12 text-primary-purple/50 mx-auto mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-gray-text text-xs">Loading...</p>
                                      </div>
                                    </div>
                                  )}
                                  <img
                                    src={image}
                                    alt={`${study.title} screenshot ${imgIndex + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onError={() => setImageError(true)}
                                    onLoad={() => setImageLoaded(true)}
                                    loading="lazy"
                                    decoding="async"
                                    fetchPriority={imgIndex === 0 ? "high" : "low"}
                                  />
                                </>
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <svg className="w-12 h-12 text-primary-purple/50 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-gray-text text-xs">Image not found</p>
                                    <p className="text-gray-text/60 text-xs mt-1">Please add image to /public/images/</p>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )
                        }
                        
                        return <ImageWithPlaceholder key={imgIndex} />
                      })}
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-8 relative z-10">
                  {/* Industry Tag */}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-3 py-1 bg-primary-purple/20 border border-primary-purple/50 rounded-full text-primary-purple text-xs font-semibold mb-4"
                  >
                    {study.industry}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-base leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-white font-semibold text-sm mb-3">What it does:</p>
                    <ul className="space-y-2">
                      {study.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <motion.svg
                            className="w-5 h-5 text-primary-purple mt-0.5 flex-shrink-0"
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
                          <span className="text-gray-text text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Website Link or Impact */}
                  {study.websiteUrl ? (
                    <div className="pt-4 border-t border-white/10">
                      <motion.a
                        href={study.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 text-primary-purple font-semibold text-sm hover:text-accent-purple-light transition-colors"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>
                  ) : study.impact ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="pt-4 border-t border-white/10"
                    >
                      <p className="text-primary-purple font-semibold text-sm">
                        Impact: <span className="text-white">{study.impact}</span>
                      </p>
                    </motion.div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-text text-lg mb-6">
            Want to see the full demos? Book a call and we'll walk you through everything.
          </p>
          <motion.a
            href="https://calendly.com/ai-poweredsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-lg"
          >
            Get Your Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
