import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="mb-5 text-9xl">404 - Not Found!</h1>
      <Link href="/" className="bg-blue-700 text-white p-3">
        Back To Home
      </Link>
    </div>
  );
}
