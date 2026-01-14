import { ArrowRight, Volume2, Users, FileText, TrendingUp } from 'lucide-react'

const HeroSection = ({ language }) => {
  const content = {
    en: {
      heading: 'Bridging the Welfare Gap',
      subheading: 'Millions are left behind due to a lack of awareness. We simplify the journey',
      cta: 'Find My Schemes',
      voiceAssist: 'Voice Assistance Available'
    },
    hi: {
      heading: 'कल्याण की खाई को पाटना',
      subheading: 'जागरूकता की कमी के कारण लाखों लोग पीछे रह जाते हैं। हम यात्रा को सरल बनाते हैं',
      cta: 'मेरी योजनाएं खोजें',
      voiceAssist: 'वॉयस सहायता उपलब्ध'
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white pt-24 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gov-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gov-blue-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Volume2 className="text-gov-green-400" size={24} />
              <span className="text-sm text-gov-green-400 font-medium">
                {content[language].voiceAssist}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {content[language].heading}
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-md">
              {content[language].subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#find-schemes"
                className="group flex items-center gap-3 px-8 py-4 bg-gov-green-500 text-white rounded-lg hover:bg-gov-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
              >
                {content[language].cta}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gov-green-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform">
                    <Users className="text-gov-green-400 mb-3" size={40} />
                    <div className="text-2xl font-bold text-white mb-1">500K+</div>
                    <div className="text-sm text-gray-200">Users Served</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform">
                    <FileText className="text-gov-green-400 mb-3" size={40} />
                    <div className="text-2xl font-bold text-white mb-1">1000+</div>
                    <div className="text-sm text-gray-200">Schemes</div>
                  </div>
                  <div className="col-span-2 bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform">
                    <TrendingUp className="text-gov-green-400 mb-3" size={40} />
                    <div className="text-2xl font-bold text-white mb-1">95% Success Rate</div>
                    <div className="text-sm text-gray-200">Finding Eligible Schemes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { number: '1000+', label: language === 'en' ? 'Government Schemes' : 'सरकारी योजनाएं' },
            { number: '500K+', label: language === 'en' ? 'Users Helped' : 'उपयोगकर्ता मदद' },
            { number: '12+', label: language === 'en' ? 'Languages Supported' : 'भाषाएं समर्थित' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gov-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
