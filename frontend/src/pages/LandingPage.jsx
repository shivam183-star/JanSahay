import { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProblemGrid from '../components/ProblemGrid'
import HowItWorks from '../components/HowItWorks'
import KeyFeatures from '../components/KeyFeatures'
import AIAssistant from '../components/AIAssistant'

const LandingPage = () => {
  const [language, setLanguage] = useState('en')

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <ProblemGrid language={language} />
      <HowItWorks language={language} />
      <KeyFeatures language={language} />
      <AIAssistant language={language} />
    </div>
  )
}

export default LandingPage
