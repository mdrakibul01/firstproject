export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>

        {/* Inner ring */}
        <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-b-purple-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute mt-32">
        <p className="text-indigo-600 font-medium animate-pulse" style={{ fontFamily: 'Inter, sans-serif' }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
