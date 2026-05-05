'use client';

import { useState } from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: 'Case Study 1',
    description: 'Successful implementation increasing efficiency by 30%',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Case Study 2',
    description: 'Leading brand reduces carbon footprint significantly',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Case Study 3',
    description: 'International expansion with our solutions',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
];

export default function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how our solutions transform businesses worldwide
          </p>
        </div>

        <div className="relative">
          <div className="relative h-96 md:h-96 bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={caseStudies[currentIndex].image}
              alt={caseStudies[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {caseStudies[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-100">
                {caseStudies[currentIndex].description}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-0 md:left-4 bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full shadow-lg transition"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 md:right-4 bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full shadow-lg transition"
            aria-label="Next slide"
          >
            →
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
