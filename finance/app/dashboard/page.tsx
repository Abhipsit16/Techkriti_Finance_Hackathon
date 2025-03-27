"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button onClick={() => signOut()} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Logout</button>
    </div>
  );
}
