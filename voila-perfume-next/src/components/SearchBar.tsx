import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 bg-transparent">
      <div className="relative flex items-center w-full max-w-md rounded-full shadow-xl bg-white">
        <div className="absolute left-4 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 pl-12 pr-4 rounded-full bg-white focus:outline-none text-gray-700 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;