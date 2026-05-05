import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sustainable Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium quality products designed with sustainability in mind. Reduce costs while protecting the planet.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=500&fit=crop"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
