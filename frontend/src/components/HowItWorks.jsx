import { User, Cpu, Search, CheckCircle } from 'lucide-react'

const HowItWorks = ({ language }) => {
  const content = {
    en: {
      title: 'How It Works',
      subtitle: 'Four simple steps to discover your perfect scheme match',
      steps: [
        {
          icon: User,
          title: 'User Input',
          description: 'Share your basic details: age, income, location, and family information'
        },
        {
          icon: Cpu,
          title: 'Eligibility Engine',
          description: 'Our AI analyzes your profile against thousands of scheme criteria'
        },
        {
          icon: Search,
          title: 'Scheme Query',
          description: 'We search through comprehensive government databases instantly'
        },
        {
          icon: CheckCircle,
          title: 'Match & Display',
          description: 'Get personalized results with clear eligibility and application steps'
        }
      ]
    },
    hi: {
      title: 'यह कैसे काम करता है',
      subtitle: 'अपनी सही योजना से मिलान के लिए चार सरल चरण',
      steps: [
        {
          icon: User,
          title: 'उपयोगकर्ता इनपुट',
          description: 'अपना बुनियादी विवरण साझा करें: उम्र, आय, स्थान और पारिवारिक जानकारी'
        },
        {
          icon: Cpu,
          title: 'पात्रता इंजन',
          description: 'हमारी AI हजारों योजना मानदंडों के खिलाफ आपकी प्रोफ़ाइल का विश्लेषण करती है'
        },
        {
          icon: Search,
          title: 'योजना क्वेरी',
          description: 'हम तुरंत व्यापक सरकारी डेटाबेस खोजते हैं'
        },
        {
          icon: CheckCircle,
          title: 'मैच और प्रदर्शन',
          description: 'स्पष्ट पात्रता और आवेदन चरणों के साथ व्यक्तिगत परिणाम प्राप्त करें'
        }
      ]
    }
  }

  const { title, subtitle, steps } = content[language]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gov-blue-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gov-blue-200 via-gov-green-400 to-gov-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gov-blue-600 to-gov-blue-800 rounded-full flex items-center justify-center mb-6 shadow-lg relative">
                    <Icon className="text-white" size={32} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gov-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gov-blue-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
