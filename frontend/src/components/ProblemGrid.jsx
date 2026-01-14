import { AlertCircle, FileQuestion, Languages } from 'lucide-react'

const ProblemGrid = ({ language }) => {
  const content = {
    en: {
      title: 'The Unseen Challenge',
      subtitle: 'Understanding the barriers to welfare access',
      problems: [
        {
          icon: AlertCircle,
          title: 'Lack of Awareness',
          description: 'Millions of eligible citizens remain unaware of schemes designed to help them, missing critical benefits.'
        },
        {
          icon: FileQuestion,
          title: 'Complex Eligibility',
          description: 'Confusing criteria and documentation requirements create barriers that prevent people from applying.'
        },
        {
          icon: Languages,
          title: 'Language Barriers',
          description: 'Information available only in select languages excludes a significant portion of the population.'
        }
      ]
    },
    hi: {
      title: 'अनदेखी चुनौती',
      subtitle: 'कल्याण पहुंच में बाधाओं को समझना',
      problems: [
        {
          icon: AlertCircle,
          title: 'जागरूकता की कमी',
          description: 'लाखों पात्र नागरिक उन योजनाओं से अनजान रहते हैं जो उनकी मदद के लिए डिज़ाइन की गई हैं, महत्वपूर्ण लाभों से चूक जाते हैं।'
        },
        {
          icon: FileQuestion,
          title: 'जटिल पात्रता',
          description: 'भ्रामक मानदंड और दस्तावेज़ीकरण आवश्यकताएं ऐसी बाधाएं बनाती हैं जो लोगों को आवेदन करने से रोकती हैं।'
        },
        {
          icon: Languages,
          title: 'भाषा की बाधाएं',
          description: 'केवल चुनिंदा भाषाओं में उपलब्ध जानकारी जनसंख्या के एक महत्वपूर्ण हिस्से को बाहर रखती है।'
        }
      ]
    }
  }

  const { title, subtitle, problems } = content[language]

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
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gov-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-gov-blue-700" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gov-blue-800 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemGrid
