import React from "react";

export default function CheckHistory() {
  const products = [
    { name: "Product A", rating: 4.5, date: "24/11/2025" },
    { name: "Product B", rating: 3.8, date: "24/11/2025" },
    { name: "Product C", rating: 4.0, date: "24/11/2025" },
  ];

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
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-text-secondary cursor-pointer">
          <div className="flex flex-col items-center">
            {/* Head */}
            <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-3 bg-text-secondary mt-1 rounded-t-md"></div>
          </div>
        </div>
      </header>

      {/* Title */}
      <h1
        className="text-[32px] font-normal text-center mt-8 mx-[91px] text-text-primary"
        style={{ fontFamily: "Inter" }}
      >
        Your History
      </h1>

      {/* Info Section */}
      <div className="mx-auto mt-6 bg-white rounded-lg border border-secondary-500 flex items-center w-[400px] h-[80px]">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center pl-4 pr-2 py-2 border-r border-gray-300 w-1/2">
          <div
            className="text-[20px] font-normal text-text-secondary text-center"
            style={{ fontFamily: "Inter" }}
          >
            Nama Akun Anda
          </div>
          <div
            className="text-[16px] font-normal mt-1 text-text-secondary text-center"
            style={{ fontFamily: "Inter" }}
          >
            Created: 20/11/2024
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center pl-2 pr-4 py-2 w-1/2">
          <div
            className="text-[16px] font-normal text-text-secondary text-center"
            style={{ fontFamily: "Inter" }}
          >
            Average Score
          </div>
          <div
            className="text-[20px] font-medium text-text-secondary flex items-center mt-1 text-center"
            style={{ fontFamily: "Inter" }}
          >
            3.2 <span className="ml-1 text-yellow-500">★</span>
          </div>
        </div>
      </div>

      {/* Product List */}
      <main className="flex-grow flex flex-col items-center w-screen px-4 mt-7">
        <div className="w-full max-w-lg bg-white rounded-lg border border-secondary-500 divide-y divide-black mt-7">
          {products.map((product, index) => (
            <div key={index} className="flex justify-between items-center p-4">
              <div className="ml-6">
                <h2 className="text-text-secondary font-semibold text-[1.5rem]">
                  {product.name}
                </h2>
                <div className="flex items-center text-text-secondary mt-1">
                  <span className="text-lg font-bold">{product.rating}</span>
                  <span className="ml-1 text-yellow-500">★</span>
                  <span className="ml-4 text-sm">{product.date}</span>
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
