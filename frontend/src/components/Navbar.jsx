import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const content = {
    en: {
      title: 'JanSahay',
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      findSchemes: 'Find My Schemes'
    },
    hi: {
      title: 'जनसहाय',
      home: 'होम',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      findSchemes: 'मेरी योजनाएं खोजें'
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gov-blue-700">
              {content[language].title}
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gov-blue-600 transition-colors">
              {content[language].home}
            </a>
            <a href="#about" className="text-gray-700 hover:text-gov-blue-600 transition-colors">
              {content[language].about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gov-blue-600 transition-colors">
              {content[language].contact}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe size={20} />
              <span className="font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
            <a
              href="#find-schemes"
              className="px-6 py-2 bg-gov-green-500 text-white rounded-lg hover:bg-gov-green-600 transition-colors font-medium shadow-md"
            >
              {content[language].findSchemes}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-gov-blue-600 py-2">
              {content[language].home}
            </a>
            <a href="#about" className="block text-gray-700 hover:text-gov-blue-600 py-2">
              {content[language].about}
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-gov-blue-600 py-2">
              {content[language].contact}
            </a>
            <a
              href="#find-schemes"
              className="block text-center px-6 py-3 bg-gov-green-500 text-white rounded-lg hover:bg-gov-green-600 transition-colors font-medium"
            >
              {content[language].findSchemes}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
