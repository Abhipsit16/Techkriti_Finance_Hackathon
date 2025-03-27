"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => window.location.href = "/login", 2000);
    } else {
      setError(data.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} 
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} 
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} 
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition">
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
