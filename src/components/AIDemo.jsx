import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function AIDemo() {
  useEffect(() => {
    // Load Vapi widget script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* AI Demo Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="AI Demo section">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
                Try Our AI In Action
              </h2>
              <p className="text-lg sm:text-xl text-gray-text mb-6 sm:mb-8 leading-relaxed">
                Chat with Stella's AI receptionist for her Scalp Micropigmentation clinic. This is the kind of system we build for businesses like yours.
              </p>

              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-heading font-bold text-white">
                  See What AI Can Do For Your Business
                </h3>
                <p className="text-lg text-gray-text leading-relaxed">
                  This AI assistant handles bookings, answers questions, and qualifies leads for Stella's clinic 24/7. It never sleeps, never forgets to follow up, and always sounds professional. Imagine this running for YOUR business.
                </p>

                <ul className="space-y-4">
                  {[
                    "Answers in seconds, any time",
                    "Books appointments automatically",
                    "Captures lead information",
                    "Sounds natural and helpful",
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-6 h-6 text-primary-purple mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-text text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="https://calendly.com/ai-poweredsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-purple-glow text-white font-semibold rounded-lg shadow-lg shadow-primary-purple/50 hover:shadow-primary-purple/70 transition-all duration-300 text-lg"
              >
                Build Your Own AI Assistant
              </motion.a>
            </motion.div>

            {/* Right Column: Widget Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-dark-gray-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="mb-6">
                    <svg
                      className="w-16 h-16 text-primary-purple mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      AI Demo Widget
                    </h3>
                    <p className="text-gray-text">
                      Look for the chat widget in the bottom right corner of your screen. Click it to start a conversation with Stella's AI assistant.
                    </p>
                  </div>
                  <p className="text-sm text-gray-text italic mt-4">
                    This is a demo. Your AI will be customized for your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Vapi Widget - Bottom Right Corner */}
      <vapi-widget
        public-key="462f73ea-ba32-416f-8dc0-0e08fda79f6d"
        assistant-id="9c7f933e-b312-4c8f-86a8-53c55da5b1db"
        mode="voice"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#9333EA"
        cta-button-color="#000000"
        cta-button-text-color="#ffffff"
        border-radius="large"
        size="full"
        position="bottom-right"
        title="Try Our AI Now"
        start-button-text="Start"
        end-button-text="End Call"
        chat-first-message="Hey, How can I help you today?"
        chat-placeholder="Type your message..."
        voice-show-transcript="true"
        consent-required="true"
        consent-title="Terms and conditions"
        consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
        consent-storage-key="vapi_widget_consent"
      ></vapi-widget>
    </>
  )
}
