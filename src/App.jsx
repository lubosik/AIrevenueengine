import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StoryBegins from './components/StoryBegins'
import Vision from './components/Vision'
import Bridge from './components/Bridge'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

// Lazy load components that aren't immediately visible
const Services = lazy(() => import('./components/Services'))
const Pricing = lazy(() => import('./components/Pricing'))
const AIDemo = lazy(() => import('./components/AIDemo'))
const CaseStudies = lazy(() => import('./components/CaseStudies'))
const Resources = lazy(() => import('./components/Resources'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-purple/30 border-t-primary-purple rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-primary-black">
      <ScrollProgress />
      <Navigation />
      <section id="home"><Hero /></section>
      <StoryBegins />
      <Vision />
      <Bridge />
      <Suspense fallback={<SectionLoader />}>
        <section id="services"><Services /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="pricing"><Pricing /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="demo"><AIDemo /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="portfolio"><CaseStudies /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="resources"><Resources /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="about"><About /></section>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <section id="contact"><Contact /></section>
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}

export default App
