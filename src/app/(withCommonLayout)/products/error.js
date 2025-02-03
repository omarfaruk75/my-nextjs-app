"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-4xl text-red-600   ">Something went Wrong</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-red-700 text-white py-1 px-4 rounded hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
