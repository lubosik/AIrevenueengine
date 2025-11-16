import { motion } from 'framer-motion'

export default function StoryBegins() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-black relative overflow-hidden" aria-label="Story Begins section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple-glow/20 rounded-full blur-3xl"></div>
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
                src="https://images.unsplash.com/photo-1585984968562-1443b72fb0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM5NjB8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cnVnZ2xlJTIwc3RyZXNzJTIwb3ZlcndoZWxtZWQlMjBlbnRyZXByZW5ldXIlMjBjYXJ0b29uJTIwaWxsdXN0cmF0aW9ufGVufDB8MHx8fDE3NjMzMjkyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business struggle illustration"
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
              The Story Begins — The Struggle Every Business Faces
            </h2>
            
            <div className="space-y-6 text-lg text-gray-text leading-relaxed">
              <p>
                You didn't start your business to chase leads or babysit your inbox.
              </p>
              
              <p>
                You started it to grow, to serve customers, and to create freedom.
              </p>
              
              <p>
                But between missed calls, unqualified leads, and slow follow-ups, it feels like you're working harder without actually earning more.
              </p>
              
              <p>
                Every delay costs you money. Every missed opportunity leaves revenue on the table.
              </p>
              
              <p className="text-white font-semibold">
                Now imagine if every call, lead, and message was handled instantly and professionally.
              </p>
              
              <p className="text-white font-semibold">
                Imagine your calendar filling up automatically while you sleep.
              </p>
              
              <p className="text-primary-purple text-xl font-semibold">
                That's what we build — AI systems that bring in more business while you focus on running it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

