import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseSection from './components/WhyChooseSection'
import WorkProcessSection from './components/WorkProcessSection'
import PortfolioSection from './components/PortfolioSection'
import AwardsSection from './components/AwardsSection'
import ContactSection from './components/ContactSection'
import TestimonialSection from './components/TestimonialSection'
import TeamSection from './components/TeamSection'
import BlogSection from './components/BlogSection'
import FaqSection from './components/FaqSection'
import NewsletterSection from './components/NewsletterSection'
import FooterSection from './components/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <WorkProcessSection />
      <PortfolioSection />
      <AwardsSection />
      <ContactSection />
      <TestimonialSection />
      <TeamSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
      <FooterSection />
     

     
    </>
  )
}

export default App
