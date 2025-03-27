import UploadBox from "@/components/UploadBox";

export default function UploadPage() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
        Upload Financial Statements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-10">
        <UploadBox
          title="Balance Sheet"
          endpoint="http://localhost:5000/api/upload/balance-sheet"
          context="balance-sheet"
        />
        <UploadBox
          title="Cash Flow Statement"
          endpoint="http://localhost:5000/api/upload/cashflow"
          context="cash-flow"
        />
        <UploadBox
          title="Income Statement"
          endpoint="http://localhost:5000/api/upload/income-statement"
          context="income-statement"
        />
      </div>
    </div>
  );
}
