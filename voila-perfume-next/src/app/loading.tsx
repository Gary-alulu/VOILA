export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <p className="ml-4 text-xl text-gray-700">Loading products...</p>
    </div>
  );
}