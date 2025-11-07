import { motion } from 'framer-motion'

const resources = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "AI Sales Stack Blueprint",
    description: "Our complete Notion template showing how to set up an AI-powered sales system. Includes workflows, tool recommendations, and implementation checklists.",
    link: "https://www.notion.so/AI-Revenue-System-My-Tools-How-to-Use-Them-Free-25e6d05e192c8082a09fee60b1d89116",
    linkText: "Get Free Template",
    type: "notion",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Prompt Engineering Guide",
    description: "Learn how to write AI prompts that actually work. This guide covers the fundamentals and advanced techniques we use to build intelligent systems.",
    link: "https://www.notion.so/The-Prompt-Engineering-Playbook-2216d05e192c8064b3a5fa3d79a8fd1c?source=copy_link",
    linkText: "Download Guide",
    type: "notion",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "B2B Outreach System Breakdown",
    description: "Watch our complete B2B outreach system process. See exactly how we build automated systems that find prospects, send personalized messages, and book meetings.",
    link: "https://www.loom.com/embed/813195e75e9d4b0da06abda647bb644e",
    linkText: "Watch Video",
    type: "video",
  },
]

export default function Resources() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Resources section">
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
            Free Tools To Get Started
          </h2>
          <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            We believe in giving value first. Here are some resources to help you think about AI for your business.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-lg group-hover:shadow-primary-purple/20 relative overflow-hidden">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-primary-purple mb-6 inline-block"
                  >
                    {resource.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-base leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* CTA Button */}
                  {resource.type === "video" ? (
                    <motion.a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-sm group-hover:shadow-md group-hover:shadow-primary-purple/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {resource.linkText}
                    </motion.a>
                  ) : (
                    <motion.a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-sm group-hover:shadow-md group-hover:shadow-primary-purple/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {resource.linkText}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-text text-sm">
            More free stuff coming soon. Follow us on LinkedIn for updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
