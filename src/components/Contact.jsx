import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
    service: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    'Lead Qualifying AI Voice Agent',
    'Follow-Up & Nurture Engine',
    'Cold Email Engine',
    'AI Appointment Setter',
    'AI Receptionist',
    'Lead Reactivation',
    'High-Converting Landing Pages',
    'Full Website Creation with AI',
    'Custom Automation Package',
    'Revenue Diagnostic Sprint',
    'Ongoing Consultancy Retainer',
    'Not sure yet',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.challenge.trim()) {
      newErrors.challenge = 'Please tell us about your biggest challenge'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Web3Forms submission
    const formDataToSubmit = new FormData()
    formDataToSubmit.append('access_key', 'c3b3af83-3b7d-434e-8fcd-37221aedd2f4')
    formDataToSubmit.append('name', formData.name)
    formDataToSubmit.append('email', formData.email)
    formDataToSubmit.append('phone', formData.phone || '')
    formDataToSubmit.append('company', formData.company || '')
    formDataToSubmit.append('message', formData.challenge)
    formDataToSubmit.append('service', formData.service || '')
    formDataToSubmit.append('subject', 'New Contact Form Submission - AI Revenue Engine')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit,
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          challenge: '',
          service: '',
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      // Log error in development only
      if (import.meta.env.DEV) {
        console.error('Form submission error:', error)
      }
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Contact section">
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
            Ready to Grow?
          </h2>
          <p className="text-lg sm:text-xl text-gray-text max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Book a call and we'll show you exactly how AI can make you more money.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-purple/30 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name <span className="text-primary-purple">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-gray-bg border rounded-lg text-white placeholder-gray-text focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:border-primary-purple focus:ring-primary-purple/50'
                    }`}
                    placeholder="Your name"
                    required
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email <span className="text-primary-purple">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-gray-bg border rounded-lg text-white placeholder-gray-text focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:border-primary-purple focus:ring-primary-purple/50'
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone <span className="text-gray-text text-sm font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-gray-bg border border-white/20 rounded-lg text-white placeholder-gray-text focus:outline-none focus:ring-2 focus:border-primary-purple focus:ring-primary-purple/50 transition-all"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-white font-semibold mb-2">
                    Company Name <span className="text-gray-text text-sm font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-gray-bg border border-white/20 rounded-lg text-white placeholder-gray-text focus:outline-none focus:ring-2 focus:border-primary-purple focus:ring-primary-purple/50 transition-all"
                    placeholder="Your company"
                  />
                </div>

                {/* Challenge */}
                <div>
                  <label htmlFor="challenge" className="block text-white font-semibold mb-2">
                    What's your biggest challenge right now? <span className="text-primary-purple">*</span>
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-dark-gray-bg border rounded-lg text-white placeholder-gray-text focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.challenge
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:border-primary-purple focus:ring-primary-purple/50'
                    }`}
                    placeholder="Tell us about your biggest challenge..."
                    required
                  />
                  {errors.challenge && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {errors.challenge}
                    </motion.p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">
                    Which service are you interested in? <span className="text-gray-text text-sm font-normal">(optional)</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-gray-bg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-primary-purple focus:ring-primary-purple/50 transition-all cursor-pointer"
                  >
                    <option value="" className="bg-dark-gray-bg">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-dark-gray-bg">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Get Your Custom Quote'
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thanks! We'll be in touch within 24 hours.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Something went wrong. Please try again or book a call directly.
                  </motion.div>
                )}

                {/* Trust Badge */}
                <p className="text-center text-gray-text text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  We respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:border-primary-purple/30 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/0 to-accent-purple-glow/0 group-hover:from-primary-purple/5 group-hover:to-accent-purple-glow/5 transition-all duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">
                  Or Book a Call Directly
                </h3>
                
                <p className="text-gray-text mb-8 leading-relaxed">
                  Skip the form and book a time that works for you. We'll show you exactly how AI can solve your biggest challenges.
                </p>

                <motion.a
                  href="https://calendly.com/ai-poweredsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-center mb-8 inline-block"
                >
                  Book a Call
                </motion.a>

                <div className="mt-auto space-y-4 pt-6 border-t border-white/10">
                  <p className="text-white font-semibold mb-4">Contact Us</p>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:lubosikongwa@icloud.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-text hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-purple/20 border border-primary-purple/50 flex items-center justify-center group-hover:bg-primary-purple/30 transition-colors">
                        <svg className="w-5 h-5 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span>lubosikongwa@icloud.com</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-text hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-purple/20 border border-primary-purple/50 flex items-center justify-center group-hover:bg-primary-purple/30 transition-colors">
                        <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span>Lubosi Kongwa - LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-text text-lg max-w-3xl mx-auto">
            Not ready for a call? That's okay. Grab the free resources above and reach out when you are.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
