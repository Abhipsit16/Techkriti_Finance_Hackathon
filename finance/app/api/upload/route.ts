import { NextResponse } from "next/server";

export async function POST() {
  // In production, you'd handle the file parsing here
  // For now, let's just return a dummy response
  return NextResponse.json({ message: "File uploaded and processed successfully!" });
}
