'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could post to an API or service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-pink-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text mb-4">
        Contact Us
      </h1>
      <p className="text-gray-700 text-center mb-10 text-lg md:text-xl max-w-2xl">
        Have questions or feedback? Fill out the form below and we’ll get back to you soon!
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-500">✅ Thank you!</h2>
          <p className="text-gray-700 text-lg">We’ve received your message and will get back to you soon.</p>
        </div>
      )}
    </div>
  );
}
