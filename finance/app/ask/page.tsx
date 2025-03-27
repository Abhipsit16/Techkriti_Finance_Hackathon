"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AskPage() {
  const searchParams = useSearchParams();
  const context = searchParams.get("context") || "financial statement";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question) {
      alert("Please enter a question.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/ask-ai", {
        method: "POST",
        body: JSON.stringify({ context, question }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error("Error asking AI:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
          Ask AI Insights
        </h1>
        <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto">
          You're asking questions about your <span className="font-semibold text-purple-700">{context.replace("-", " ")}</span>.  
          Get clear and actionable AI-powered answers below.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl animate-float">
        <textarea
          placeholder={`Ask something about your ${context.replace("-", " ")}...`}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-4 text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={askAI}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-full text-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          {loading ? "Generating answer..." : "Ask AI"}
        </button>
      </div>

      {answer && (
        <div className="w-full max-w-3xl bg-white p-8 mt-10 rounded-2xl shadow-2xl border-t-4 border-blue-500 animate-fade-in-slow">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">AI Answer:</h2>
          <p className="text-gray-800 text-lg leading-relaxed">{answer}</p>
        </div>
      )}

      <style jsx global>{`
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
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
