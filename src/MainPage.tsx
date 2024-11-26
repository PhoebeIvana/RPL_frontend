import React, { useState } from "react";

export default function MainPage() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { name: "Product A", rating: 4.5 },
    { name: "Product B", rating: 3.8 },
    { name: "Product C", rating: 4.0 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-tertiary-light min-h-screen w-screen flex flex-col relative">
      {/* Header */}
      <header className="bg-tertiary w-screen flex justify-between items-center p-4 h-14 z-30">
        {/* Menu Icon */}
        <div className="w-8 h-8 bg-white flex flex-col items-center justify-center space-y-0.5">
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
        </div>

        {/* Profile Icon */}
        <div
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-text-secondary cursor-pointer"
          onClick={() => setProfileOpen(true)}
        >
          <div className="flex flex-col items-center">
            {/* Head */}
            <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-3 bg-text-secondary mt-1 rounded-t-md"></div>
          </div>
        </div>
      </header>

      {/* Blur Background */}
      {isProfileOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
      )}

      {/* Profile Box */}
      {isProfileOpen && (
        <div className="absolute z-20 bg-tertiary-light w-full max-w-lg rounded-lg shadow-lg px-6 py-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Exit Icon */}
          <div
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setProfileOpen(false)}
          >
            <div className="w-6 h-6 flex items-center justify-center border-2 border-text-secondary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12H3m12 0l-4-4m4 4l-4 4"
                />
              </svg>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex flex-col items-center">
            {/* Profile Icon */}
            <div className="relative w-16 h-16 rounded-full border-2 border-text-secondary flex items-center justify-center">
              {/* Head */}
              <div className="absolute top-[15%] w-6 h-6 bg-text-secondary rounded-full"></div>
              {/* Body */}
              <div className="absolute bottom-[15%] w-8 h-4 bg-text-secondary rounded-t-md"></div>
            </div>

            {/* Username */}
            <h2
              className="text-lg font-bold text-text-primary mt-4"
              style={{ fontFamily: "Inter" }}
            >
              Username Anda
            </h2>

            {/* Created Date */}
            <p
              className="text-sm text-text-tertiary mt-4 mb-8"
              style={{ fontFamily: "Inter" }}
            >
              Created: 20/11/24
            </p>

            {/* Average Score Box */}
            <div className="bg-text-white rounded-lg shadow mt-8 mx-24 mb-10 p-6 border border-secondary-700">
              <h3
                className="text-sm font-medium text-text-secondary"
                style={{ fontFamily: "Inter" }}
              >
                Average Score
              </h3>
              <div className="flex flex-col items-center mt-3">
                <span
                  className="text-lg font-bold text-text-tertiary mt-5"
                  style={{ fontFamily: "Inter" }}
                >
                  3.2★
                </span>
                <button
                  className="px-4 py-1 mt-3 bg-tertiary-light border border-secondary-700 text-secondary rounded-md text-sm"
                  style={{ fontFamily: "Inter" }}
                >
                  Details
                </button>
              </div>
            </div>

            {/* Change Profile Button */}
            <button
              className="bg-secondary-700 text-text-white py-2 px-20 rounded-xl font-bold mt-8"
              style={{ fontFamily: "Inter" }}
            >
              Change Profile
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center w-screen px-0">
        {/* Search Bar */}
        <div className="w-full flex justify-center mt-7 px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="bg-tertiary-light text-text-secondary rounded-full h-12 flex items-center justify-center w-full max-w-lg shadow px-6 placeholder-text-secondary focus:outline-none"
          />
        </div>

        {/* Product List or No Result Message */}
        {filteredProducts.length > 0 ? (
          <div className="w-full max-w-lg mt-6 bg-white rounded-lg border border-secondary-500 divide-y divide-black">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4"
              >
                <div className="ml-6">
                  <h2 className="text-text-secondary font-semibold text-[1.5rem]">
                    {product.name}
                  </h2>
                  <div className="flex items-center text-text-secondary mt-1">
                    <span className="text-lg font-bold">{product.rating}</span>
                    <span className="ml-1 text-yellow-500">★</span>
                  </div>
                </div>
                <div className="w-24 h-14 rounded-2xl overflow-hidden bg-secondary-300">
                  <img
                    src="https://via.placeholder.com/64"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center border-t border-black mt-2 pt-4 pb-4">
              {/* Left Arrow */}
              <button
                className="w-10 h-10 bg-secondary-700 text-tertiary-light rounded-full flex justify-center items-center hover:bg-secondary-800"
                aria-label="Previous Page"
              >
                ←
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-4 mx-6">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className="px-2 text-secondary-500 border-b-2 border-transparent hover:border-secondary-500 focus:border-secondary-500"
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="w-10 h-10 bg-secondary-700 text-tertiary-light rounded-full flex justify-center items-center hover:bg-secondary-800"
                aria-label="Next Page"
              >
                →
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-secondary-500 mt-6 w-full max-w-lg flex flex-col items-center relative">
            <div className="pt-56 pb-56 text-text-secondary text-lg font-semibold my-4 text-[32px]">
              No Result
            </div>
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-screen py-4 flex justify-around mt-[28px] z-30">
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
      </footer>
    </div>
  );
}
