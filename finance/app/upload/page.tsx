"use client";
import { useState, ChangeEvent } from "react";

export default function UploadPage() {
  const [companyName, setCompanyName] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text text-center">
        Enter the Company Name
      </h1>
      <input
        className="w-full max-w-lg px-4 py-3 text-lg text-gray-900 placeholder-gray-500 bg-white border-2 border-gray-300 rounded-xl shadow-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
        type="text"
        placeholder="Type here..."
        value={companyName}
        onChange={handleInputChange}
      />
    </div>
  );
}
