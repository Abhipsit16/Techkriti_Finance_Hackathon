"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface UploadBoxProps {
  title: string;
  endpoint: string;
  context: string;
}

export default function UploadBox({ title, endpoint, context }: UploadBoxProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      router.push(`/ask?context=${context}`);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col gap-4 items-center animate-float">
      <h2 className="text-xl font-semibold">{title}</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 w-full rounded-lg"
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-2 rounded-full hover:scale-105 transition-transform"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
