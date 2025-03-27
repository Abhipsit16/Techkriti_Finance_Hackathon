import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white">FinSight AI</h2>
          <p className="mt-2 text-gray-400 text-sm text-center md:text-left">
            Unlock AI-powered financial insights to make smarter decisions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-2">
          <Link href="/" className="hover:text-white transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-white transition duration-300">About</Link>
          <Link href="/servicee" className="hover:text-white transition duration-300">Services</Link>
          <Link href="/contact" className="hover:text-white transition duration-300">Contact Us</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="hover:scale-110 transition duration-300">
            <i className="fab fa-twitter text-xl text-gray-400 hover:text-white"></i>
          </a>
          <a href="#" className="hover:scale-110 transition duration-300">
            <i className="fab fa-facebook text-xl text-gray-400 hover:text-white"></i>
          </a>
          <a href="#" className="hover:scale-110 transition duration-300">
            <i className="fab fa-github text-xl text-gray-400 hover:text-white"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FinSight AI. All rights reserved.
      </div>
    </footer>
  );
}
