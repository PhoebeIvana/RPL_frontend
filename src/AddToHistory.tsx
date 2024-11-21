import React from "react";

export default function AddToHistory() {
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

      {/* Add to History Popup */}
      <div className="flex flex-col items-center justify-center mt-10 px-4 w-full">
        <div className="bg-tertiary w-[90%] max-w-sm rounded-lg shadow-md p-6">
          <h2 className="text-text-primary text-lg font-bold text-center mb-4">
            Add to History
          </h2>
          <div className="flex flex-col items-center">
            {/* Product Image */}
            <div className="w-36 h-36 mb-4 bg-secondary-300 flex items-center justify-center rounded-lg">
              <span className="text-text-secondary text-sm">150 x 150</span>
            </div>
            {/* Product Info */}
            <div className="text-center">
              <p className="text-text-secondary text-sm mb-1">Product Subtitle</p>
              <h3 className="text-text-primary font-semibold text-lg">
                Product Title
              </h3>
              <p className="text-text-primary text-sm mt-1 flex justify-center items-center">
                4.3 <span className="text-yellow-500 ml-1">★</span>
              </p>
            </div>
            {/* Quantity Selector */}
            <div className="flex items-center justify-center mt-4 space-x-4">
              <button className="bg-secondary-300 text-text-secondary font-bold rounded-full w-8 h-8 flex items-center justify-center">
                -
              </button>
              <p className="text-text-primary font-semibold text-lg">1</p>
              <button className="bg-secondary-300 text-text-secondary font-bold rounded-full w-8 h-8 flex items-center justify-center">
                +
              </button>
            </div>
            {/* Add Button */}
            <button className="bg-secondary-500 text-text-white font-bold w-full py-3 mt-6 rounded-full text-lg">
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-full py-4 mt-auto flex justify-around">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${
              index === 0 ? "bg-secondary-500" : "bg-secondary-300"
            }`}
          ></div>
        ))}
      </footer>
    </main>
  );
}
