"use client";
import React from "react";

export default function RecommendationBox({ recommendation }: { recommendation: string }) {
  return (
    <div className="bg-green-100 p-6 rounded-md mt-6 border border-green-300">
      <h2 className="text-xl font-bold mb-3">Recommendation</h2>
      <p className="text-gray-900">{recommendation}</p>
    </div>
  );
}
