const features = [
  {
    title: 'Same Design for Hot & Cold',
    description: 'One versatile solution for all beverage types',
    icon: '🎯',
  },
  {
    title: 'Easy & Fast to Fold',
    description: 'Quick assembly and space-efficient storage',
    icon: '⚡',
  },
  {
    title: 'Fits Under Most Machines',
    description: 'Compatible with standard coffee makers and fountains',
    icon: '🔧',
  },
  {
    title: 'Secure Locking',
    description: 'Spill-proof design prevents leaks and accidents',
    icon: '🔒',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Superior features that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
            >
              <div className="text-4xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
