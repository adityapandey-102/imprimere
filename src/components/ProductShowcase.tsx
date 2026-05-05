import Image from 'next/image';

const products = [
  {
    title: 'Hot Drinks',
    description: 'Built-in spout for convenient hot beverage consumption',
    image: 'https://images.unsplash.com/photo-1511537190424-9a23f6ca9f1e?w=400&h=400&fit=crop',
    icon: '☕',
  },
  {
    title: 'Cold Drinks',
    description: 'Fits any straw with secure locking and spill-proof design',
    image: 'https://images.unsplash.com/photo-1625950515291-c0eed38a7f54?w=400&h=400&fit=crop',
    icon: '🥤',
  },
  {
    title: 'Food To Go',
    description: 'Perfect for takeaway and food delivery services',
    image: 'https://images.unsplash.com/photo-1585238341710-4b4e6784d0e0?w=400&h=400&fit=crop',
    icon: '🍱',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600">
            Versatile solutions for every beverage and food service need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-3">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
