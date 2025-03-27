// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";
import Footer from "./components/Footer";

export const metadata = {
  title: "Finance Story AI",
  description: "Simplifying financial statements into stories",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-15"></div>
        <main className="p-8">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
