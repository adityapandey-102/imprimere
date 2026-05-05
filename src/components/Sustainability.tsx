import Image from 'next/image';

const sustainabilityItems = [
  {
    title: 'Biodegradable in Nature',
    description: 'Naturally breaks down in the environment',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop',
  },
  {
    title: 'Compostable at Home',
    description: 'Can be composted in home composting systems',
    image: 'https://images.unsplash.com/photo-1574958269340-fa5ecefcc2f7?w=400&h=300&fit=crop',
  },
  {
    title: 'Recyclable with Paper',
    description: 'Compatible with existing paper recycling processes',
    image: 'https://images.unsplash.com/photo-1559123409-66cf57b9cd35?w=400&h=300&fit=crop',
  },
];

export default function Sustainability() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Environmental Impact
          </h2>
          <p className="text-xl text-gray-600">
            Multiple pathways to a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sustainabilityItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Cost Savings & Efficiency
          </h3>
          <p className="text-gray-700 mb-4">
            Beyond environmental benefits, our solutions deliver significant cost savings:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>30% space saving in storage and transportation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>Reduced material costs through innovative design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>Improved customer satisfaction and brand loyalty</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <span>Meets growing sustainability regulations</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
