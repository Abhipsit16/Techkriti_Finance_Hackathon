"use client";

import React, { ReactNode,useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const sampletext=`
*Comprehensive Financial Analysis Report*

*Overview:*

This report analyzes the financial performance of the company based on the provided data. The analysis focuses on sales, expenses, operating profit, and net profit, with an emphasis on identifying trends and calculating growth rates.

*Key Trends and Patterns:*

*   *Sales:* Sales figures show relative stability over the analyzed period, with average sales around 34,332.
*   *Operating Profit:* Operating profit averages 7,945.
*   *OPM (Operating Profit Margin):* The average OPM is 23.15%, indicating the company's profitability from its core operations. OPM shows variability, ranging from 13% to 38%.
*   *Sales Growth:* The sales growth rate varies, with an average near 0%. It fluctuates between -10.34% and 10.82%.
*   *Net Profit Growth:* Net profit growth is highly volatile, with an average of -36.52%. This large negative average and wide range (-483.34% to 98.77%) require further investigation.

*Important Metrics:*

*   *Sales Growth Rate:* Provides insight into the company's ability to increase revenue.
*   *Net Profit Growth Rate:* Indicates the growth in the company's bottom line.
*   *Operating Profit Margin (OPM):* A key profitability metric, showing how much profit the company makes from each dollar of sales after accounting for operating expenses.

*Simplified Insights:*

*   *Sales Stability:* Sales are relatively consistent.
*   *Profitability Fluctuations:* While profitable, the company experiences significant swings in net profit growth.
*   *OPM Health:* OPM is a good indicator of profitability.

*Recommendations:*

1.  *Investigate Net Profit Volatility:* Determine the causes behind the large fluctuations in net profit. This could be due to factors such as changes in tax rates, one-time gains or losses, or changes in interest expenses.

2.  *Monitor OPM:* Track OPM closely to ensure the company maintains healthy profitability from its core operations.

3.  *Focus on Sustainable Growth:* While sales are stable, explore strategies to achieve consistent and sustainable sales growth.

This simplified report provides a starting point for a deeper dive into the company's financial performance.`

type MarkdownComponentProps = {
  children?: ReactNode
  node?: any
  className?: string
  [key: string]: any
}
export default function AnalysisPage() {
  const [content,setcontent]=useState(sampletext);
  const [images,setimages]=useState(['C:/Users/abhip/Desktop/Techy/Techkriti_Finance_Hackathon/finance/public/illustrations.webp'])
  if (content===""){
    return (
      <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
        Sorry but nothing has been analysed yet!
      </h1>
      </div>
    )
  }else{
    return (
      <div>
      <div className="w-screen h-auto bg-gradient-to-tr from-blue-100 via-white to-blue-50 px-4 py-6">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
          Analysis
        </h1>
      </div>
      <div className="p-6 bg-white border rounded-md shadow-md">
      <ReactMarkdown
           remarkPlugins={[remarkGfm]} // Order matters
          components={{
            h1: ({ children }: MarkdownComponentProps) => (
              <h1 className="text-4xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{children}</h1>
            ),
            h2: ({ children }: MarkdownComponentProps) => (
              <h2 className="text-3xl font-semibold text-gray-700 mt-8 mb-4">{children}</h2>
            ),
            h3: ({ children }: MarkdownComponentProps) => (
              <h3 className="text-2xl font-medium text-gray-600 mt-6 mb-3">{children}</h3>
            ),
            h4: ({ children }: MarkdownComponentProps) => (
              <h4 className="text-xl font-medium text-gray-600 mt-4 mb-2">{children}</h4>
            ),
            blockquote: ({ children }: MarkdownComponentProps) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 italic text-gray-600 bg-blue-50 rounded-r-md">
                {children}
              </blockquote>
            ),
            ul: ({ children }: MarkdownComponentProps) => (
              <ul className="list-disc pl-6 text-lg my-4 space-y-2">{children}</ul>
            ),
            ol: ({ children }: MarkdownComponentProps) => (
              <ol className="list-decimal pl-6 text-lg my-4 space-y-2">{children}</ol>
            ),
            li: ({ children }: MarkdownComponentProps) => <li className="text-lg text-gray-700">{children}</li>,
            table: ({ children }: MarkdownComponentProps) => (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-300 rounded-md">{children}</table>
              </div>
            ),
            thead: ({ children }: MarkdownComponentProps) => <thead className="bg-gray-100">{children}</thead>,
            th: ({ children }: MarkdownComponentProps) => (
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{children}</th>
            ),
            td: ({ children }: MarkdownComponentProps) => (
              <td className="border border-gray-300 px-4 py-2">{children}</td>
            ),
            a: ({ href, children }: MarkdownComponentProps) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            img: ({ src, alt }: MarkdownComponentProps) => (
              <img
                src={src || "/placeholder.svg"}
                alt={alt || ""}
                className="max-w-full h-auto rounded-lg my-4 mx-auto shadow-md"
                loading="lazy"
              />
            ),
            code: ({ className, children }: MarkdownComponentProps) => {
              const match = /language-(\w+)/.exec(className || "")
              return match ? (
                <div className="my-4 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-800 text-gray-200 text-xs px-4 py-1 flex items-center">
                    <span>{match[1]}</span>
                  </div>
                  <pre className="p-4 bg-gray-900 text-white overflow-auto">
                    <code className={className}>{children}</code>
                  </pre>
                </div>
              ) : (
                <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded font-mono text-sm">{children}</code>
              )
            },
            p: ({ children, node }: MarkdownComponentProps) => {
              if (node?.children[0]?.type === "element" && node.children[0].tagName === "span") {
                return <span>{children}</span> // Fixes inline math issues
              }
              return <p className="text-lg text-gray-700 my-4 leading-relaxed">{children}</p>
            },
            hr: () => <hr className="my-8 border-t-2 border-gray-200" />,
          }}
        >
          {content}
        </ReactMarkdown>
    </div>
    {images.length > 0 && (
  <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 p-8">
    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text text-center mb-8">
      Some Important Graphs
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((src, index) => (
        <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">View</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    
    </div>
    )
  }

}
