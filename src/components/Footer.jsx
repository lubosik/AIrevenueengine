import { motion } from 'framer-motion'

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Resources', id: 'resources' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-dark-gray-bg border-t border-white/10 relative overflow-hidden" role="contentinfo">
      {/* Purple accent line at top */}
      <div className="h-1 bg-gradient-to-r from-primary-purple to-accent-purple-glow"></div>
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-purple to-accent-purple-light bg-clip-text text-transparent">
                AI REVENUE ENGINE
              </div>
            </div>
            <p className="text-gray-text text-sm mb-4 leading-relaxed">
              AI automation for businesses that want to grow
            </p>
            <p className="text-gray-text text-xs">
              © 2025 AI Revenue Engine. Built with AI (obviously).
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-gray-text hover:text-primary-purple transition-colors duration-200 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-gray-text hover:text-primary-purple transition-colors duration-200 text-sm relative group"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-text hover:text-primary-purple transition-colors duration-200 text-sm relative group"
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:lubosikongwa@icloud.com"
                className="flex items-center gap-2 text-gray-text hover:text-white transition-colors duration-200 text-sm group"
              >
                <svg className="w-4 h-4 text-primary-purple group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                lubosikongwa@icloud.com
              </a>
              
              <div className="flex items-center gap-4 pt-2">
                <motion.a
                  href="https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-primary-purple/20 border border-primary-purple/50 flex items-center justify-center hover:bg-primary-purple/30 transition-colors group"
                  aria-label="Lubosi Kongwa LinkedIn"
                >
                  <svg className="w-5 h-5 text-primary-purple group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://calendly.com/ai-poweredsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/50 transition-all"
                >
                  Book a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
