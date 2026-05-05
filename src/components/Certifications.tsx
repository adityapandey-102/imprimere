const certifications = [
  {
    title: 'PEFC Paper',
    description: 'Sustainably sourced materials',
    icon: '🌲',
  },
  {
    title: 'FSC Paper',
    description: 'Responsible forest management',
    icon: '🌍',
  },
  {
    title: 'No Petroleum',
    description: 'Oil-free formulation',
    icon: '♻️',
  },
  {
    title: 'Recyclable',
    description: 'With paper recycling streams',
    icon: '📦',
  },
  {
    title: 'Compostable',
    description: 'Breaks down at home',
    icon: '🌱',
  },
  {
    title: 'Biodegradable',
    description: 'Natural decomposition in nature',
    icon: '🍃',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Certifications & Standards
          </h2>
          <p className="text-xl text-gray-600">
            Meeting the highest environmental and quality standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-3">{cert.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
