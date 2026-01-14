import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DiscoverPage from './pages/DiscoverPage'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <Routes>
      <Route path="/" element={<LandingPage language={language} setLanguage={setLanguage} />} />
      <Route path="/discover" element={<DiscoverPage language={language} setLanguage={setLanguage} />} />
    </Routes>
  )
}

export default App
