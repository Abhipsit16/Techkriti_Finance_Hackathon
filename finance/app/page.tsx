"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-4 py-0 m-0">
      <div className="text-center mt-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-fade-in">
          FinSight AI
        </h1>
        <p className="text-gray-700 mb-6 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-slow">
          Upload financial statements and watch AI convert complexity into simple stories,
          powerful visuals, and actionable insights — all within seconds.
        </p>
        <a
          href="/upload"
          className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </a>
      </div>

      <div className="mt-6 w-full max-w-3xl">
        <Image
          src="/illustrations.webp"
          alt="AI Financial Insights Illustration"
          width={700}
          height={400}
          className="mx-auto rounded-md shadow-lg animate-float"
        />
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top right, #bfdbfe, #ffffff, #dbeafe);
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-slow {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s ease forwards;
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
