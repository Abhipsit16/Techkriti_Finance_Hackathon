'use client';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-4 py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-transparent bg-clip-text text-center">
        Our Services
      </h1>
      <p className="text-gray-700 text-xl md:text-2xl mb-12 text-center max-w-3xl">
        We're working hard to bring you amazing services that will help you analyze financial statements effortlessly, generate insights, and make smarter decisions.
      </p>
      <div className="relative w-full max-w-xl h-64 md:h-80 flex items-center justify-center rounded-3xl bg-gradient-to-r from-pink-300 via-purple-300 to-orange-200 shadow-2xl overflow-hidden">
        <span className="text-4xl md:text-5xl font-bold text-white animate-pulse">
          Coming Soon 🚀
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-xl" />
      </div>
      <p className="mt-12 text-gray-500 text-lg text-center">
        Stay tuned for updates!  
        <br />Follow us on social media or sign up to get notified.
      </p>
    </div>
  );
}
