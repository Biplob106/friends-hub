import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
