import React from "react";

export default function AlternativeProducts() {
  return (
    <div className="bg-tertiary-light min-h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="bg-tertiary w-screen flex justify-between items-center p-4 h-14">
        {/* Menu Icon */}
        <div className="w-8 h-8 bg-white flex flex-col items-center justify-center space-y-0.5">
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
        </div>

        {/* Profile Icon */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-text-secondary">
          <div className="flex flex-col items-center">
            {/* Head */}
            <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-3 bg-text-secondary mt-1 rounded-t-md"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center w-screen">
        {/* Alternative Text */}
        <div className="mt-8 w-full text-center text-text-primary font-semibold text-[32px]">
          Alternatives
        </div>

        {/* Product List */}
        <div className="w-full max-w-lg mt-6 bg-white rounded-lg border border-secondary-500 divide-y divide-black">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex justify-between items-center p-4">
              {/* Product Info */}
              <div className="ml-6">
                <h2 className="text-text-primary font-semibold text-[1.5rem]">
                  Product Title
                </h2>
                <div className="flex items-center text-text-secondary">
                  <span className="text-[1.5rem]">3.2★</span>
                </div>
              </div>
              {/* Product Image */}
              <div className="w-24 h-14 rounded-2xl overflow-hidden bg-secondary-300">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Product"
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
              {[1, 2, 3, 4, 5].map((page) => (
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
      </main>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-full py-4 flex justify-around mt-[28px]">
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
      </footer>
    </div>
  );
}
