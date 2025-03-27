import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ answer: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ answer: "⚠️ Error generating response." });
  }
}
