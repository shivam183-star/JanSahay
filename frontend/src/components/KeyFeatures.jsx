import { Target, Globe, Smartphone } from 'lucide-react'

const KeyFeatures = ({ language }) => {
  const content = {
    en: {
      title: 'Key Features',
      subtitle: 'Everything you need to access government benefits',
      features: [
        {
          icon: Target,
          title: 'Personalized Recommendations',
          description: 'AI-powered matching engine that understands your unique situation and finds schemes tailored specifically for you.',
          color: 'from-gov-blue-600 to-gov-blue-700'
        },
        {
          icon: Globe,
          title: 'Multi-language & Voice Support',
          description: 'Access information in 12+ Indian languages with built-in voice assistance for those who prefer speaking over typing.',
          color: 'from-gov-green-500 to-gov-green-600'
        },
        {
          icon: Smartphone,
          title: 'Mobile-Friendly Design',
          description: 'Optimized for smartphones with simple navigation, ensuring accessibility even on low-end devices with limited internet.',
          color: 'from-gov-blue-500 to-gov-green-500'
        }
      ]
    },
    hi: {
      title: 'मुख्य विशेषताएं',
      subtitle: 'सरकारी लाभों तक पहुंचने के लिए आपको जो कुछ भी चाहिए',
      features: [
        {
          icon: Target,
          title: 'व्यक्तिगत सिफारिशें',
          description: 'AI-संचालित मिलान इंजन जो आपकी अनूठी स्थिति को समझता है और विशेष रूप से आपके लिए तैयार योजनाएं ढूंढता है।',
          color: 'from-gov-blue-600 to-gov-blue-700'
        },
        {
          icon: Globe,
          title: 'बहु-भाषा और वॉयस समर्थन',
          description: '12+ भारतीय भाषाओं में अंतर्निहित वॉयस सहायता के साथ जानकारी प्राप्त करें उन लोगों के लिए जो टाइपिंग से बोलना पसंद करते हैं।',
          color: 'from-gov-green-500 to-gov-green-600'
        },
        {
          icon: Smartphone,
          title: 'मोबाइल-अनुकूल डिजाइन',
          description: 'सरल नेविगेशन के साथ स्मार्टफोन के लिए अनुकूलित, सीमित इंटरनेट वाले कम अंत उपकरणों पर भी सुलभता सुनिश्चित करना।',
          color: 'from-gov-blue-500 to-gov-green-500'
        }
      ]
    }
  }

  const { title, subtitle, features } = content[language]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gov-blue-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gov-blue-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
