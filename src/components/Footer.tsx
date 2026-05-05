import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Your Brand</h3>
            <p className="text-sm">
              Sustainable solutions for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Story & Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Product Range
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  How to Use
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Custom Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@yourbrand.com" className="hover:text-white transition">
                  info@yourbrand.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    className="hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    className="hover:text-white transition"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://youtube.com"
                    className="hover:text-white transition"
                    aria-label="YouTube"
                  >
                    YouTube
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-sm text-gray-400">
          <p>
            Copyright © {currentYear} Your Brand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
