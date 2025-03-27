"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";

export default function FileUploader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setLoading(true);
    // Simulate API processing delay
    setTimeout(() => {
      console.log("Files processed:", acceptedFiles.map((f) => f.name).join(", "));
      router.push("/analysis");
    }, 2000);
  }, [router]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "text/csv": [".csv"] },
    multiple: false,
  });

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-medium">Processing your file...</p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="border-4 border-dashed border-blue-500 rounded-xl p-12 text-center cursor-pointer hover:bg-blue-50 transition"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-700 font-semibold">Drop your file here...</p>
          ) : (
            <p className="text-gray-600">
              Drag & drop a financial statement (PDF or CSV), or click to select.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
