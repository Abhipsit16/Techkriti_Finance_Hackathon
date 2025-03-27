"use client"
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const handleSubmit = () => {
    console.log("Text:", text);
    console.log("Files:", files);
    alert("Data will be sent to AI (Backend integration pending)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Finance Advisor</h1>
        <div>
          <Link href="/about" className="mx-3 text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="mx-3 text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
          Welcome to The AI section
        </h1>
        <p className="mt-4 text-lg text-gray-600">Building the future, one project at a time.</p>
        <Link href="/projects">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
            Explore Projects
          </button>
        </Link>
      </header>

      {/* AI Input Interface */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10 flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-800 flex justify-center" >JARVIS</h2>

        {/* Text Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={1}
        ></textarea>

        {/* File Upload */}
        <div className="mt-4">
          <input
            type="file"
            multiple
            accept="image/*, application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        {/* Preview Uploaded Files */}
        <div className="mt-4">
          {files.length > 0 && (
            <ul className="list-disc pl-5 text-gray-700">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transition justify-center items-center"
        >
          Ask Jarvis
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center text-gray-600 mt-10">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </footer>
    </div>
  );
}
