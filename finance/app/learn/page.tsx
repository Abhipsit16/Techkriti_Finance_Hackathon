"use client";
import React from "react";
import Image from "next/image";

export default function LearnPage() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white p-10 rounded-3xl shadow-2xl animate-float">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-fade-in">
          Learn Financial Analysis
        </h1>
        <p className="text-gray-700 mb-8 text-center text-xl animate-fade-in-slow">
          Master the art of interpreting financial statements and making smarter business decisions.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg pl-4">
          <li className="animate-fade-in-slow">✅ Understanding Balance Sheets</li>
          <li className="animate-fade-in-slow delay-100">✅ Reading Income Statements</li>
          <li className="animate-fade-in-slow delay-200">✅ Cash Flow Statements Explained</li>
          <li className="animate-fade-in-slow delay-300">✅ Key Ratios and What They Mean</li>
          <li className="animate-fade-in-slow delay-400">✅ Red Flags to Watch Out For</li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-6 animate-fade-in-slow">
            Want to go deeper? Our AI-powered insights will help you understand any financial report in seconds.
          </p>
          <a
            href="/ask"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-slow"
          >
            Ask AI Now
          </a>
        </div>

        <div className="mt-12 flex justify-center animate-fade-in-slow">
          <Image
            src="/illustrations.webp"
            alt="Learn financial analysis illustration"
            width={600}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
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
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-slow {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.9s ease forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
