"use client";
import React from "react";

export default function InsightsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md border w-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
