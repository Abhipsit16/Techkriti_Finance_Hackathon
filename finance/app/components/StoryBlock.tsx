"use client";
import React from "react";

export default function StoryBlock({ story }: { story: string }) {
  return (
    <div className="bg-blue-50 p-6 rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Layman’s Story</h2>
      <p className="text-gray-800 leading-relaxed">{story}</p>
    </div>
  );
}
