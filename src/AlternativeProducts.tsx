import React from "react";

export default function MainPage() {
  return (
    <main className="bg-tertiary-light min-h-screen flex flex-col items-center w-screen">
      {/* Header */}
      <header className="bg-tertiary w-full flex justify-between items-center p-4 h-14">
        {/* Menu Icon */}
        <div className="w-8 h-8 bg-white flex flex-col items-center justify-center space-y-0.5">
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
        </div>

        {/* Profile Icon */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="border border-text-secondary w-3 h-3 rounded-full"></div>
        </div>
      </header>

      {/* Product Alternatives Section */}
      <div className="w-full max-w-lg mt-6 px-4">
        {/* Title */}
        <h2 className="text-text-primary font-bold text-center text-2xl mb-6">
          Alternatives
        </h2>

        {/* Product List */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center bg-white rounded-lg shadow-md mb-4 p-4"
          >
            {/* Product Info */}
            <div>
              <h2 className="text-text-primary font-medium text-lg">
                {item === 1
                  ? "Indomie Goreng"
                  : item === 2
                  ? "Indomie Rasa Buah"
                  : "Product Title"}
              </h2>
              <div className="flex items-center text-text-secondary mt-1">
                <span className="text-sm">3.2 ★</span>
              </div>
            </div>
            {/* Product Image */}
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/64"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="w-full flex justify-center items-center mt-4">
        {[1, 2, 3, 4, 5].map((page) => (
          <span
            key={page}
            className={`w-8 h-8 flex items-center justify-center font-medium text-lg mx-1 rounded-full ${
              page === 1
                ? "bg-secondary-500 text-white"
                : "border border-secondary-500 text-secondary-500"
            }`}
          >
            {page}
          </span>
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-full py-4 mt-6 flex justify-around">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-8 h-8 rounded-full bg-secondary-500"
          ></div>
        ))}
      </footer>
    </main>
  );
}
