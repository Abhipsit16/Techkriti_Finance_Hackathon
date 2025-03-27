"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const sampleData = [
  { year: "2019", revenue: 120, profit: 25 },
  { year: "2020", revenue: 150, profit: 30 },
  { year: "2021", revenue: 180, profit: 50 },
  { year: "2022", revenue: 140, profit: 10 },
  { year: "2023", revenue: 200, profit: 70 },
];

export default function AnalysisPage() {
  const [activeTab, setActiveTab] = useState("key");

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-8">Analysis Summary</h1>

      <div className="flex gap-4 mb-8">
        {["key", "story", "visuals", "comparison"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } transition`}
          >
            {tab === "key" && "Key Indicators"}
            {tab === "story" && "Story"}
            {tab === "visuals" && "Visual Graphs"}
            {tab === "comparison" && "Comparison"}
          </button>
        ))}
      </div>

      {activeTab === "key" && (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Revenue Growth</h3>
            <p className="text-green-600 text-lg mt-2">+15% YoY</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Net Profit</h3>
            <p className="text-green-600 text-lg mt-2">₹50 Cr (↑ 40%)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Debt Ratio</h3>
            <p className="text-red-600 text-lg mt-2">0.9 (High)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">NPA Increase</h3>
            <p className="text-red-600 text-lg mt-2">+20% (Warning)</p>
          </div>
        </div>
      )}

      {activeTab === "story" && (
        <div className="bg-white p-8 rounded-xl shadow-md text-lg leading-relaxed">
          <p>
            Once a rapidly growing enterprise, this company expanded its loan
            portfolio aggressively. But beneath this success was a hidden risk
            — a concentration of corporate loans and underreported NPAs. While
            public communications portrayed steady growth and stability, the
            financial statements hinted at rising stress, increasing bad loans,
            and a deteriorating asset quality. The future trajectory suggests
            caution unless corrective measures are taken.
          </p>
        </div>
      )}

      {activeTab === "visuals" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl mb-4">Revenue Over Years (Line Chart)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleData}>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl mb-4">Profit Over Years (Bar Chart)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sampleData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === "comparison" && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Aspect</th>
                <th className="border px-4 py-2">Company's Projected Story</th>
                <th className="border px-4 py-2">Actual Story (Financials)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Loan Growth</td>
                <td className="border px-4 py-2">Healthy, sustainable growth</td>
                <td className="border px-4 py-2">Aggressive, high-risk lending</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Asset Quality</td>
                <td className="border px-4 py-2">Stable and improving</td>
                <td className="border px-4 py-2">Deteriorating, rising NPAs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Future Outlook</td>
                <td className="border px-4 py-2">Positive growth trajectory</td>
                <td className="border px-4 py-2">Uncertain, needs correction</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
