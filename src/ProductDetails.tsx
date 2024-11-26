import React, { useState } from "react";

export default function ProductDetails() {
  const [isAddToHistoryOpen, setAddToHistoryOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const ratings = [
    { label: "Kategori1", value: 4.38 },
    { label: "Kategori2", value: 4.0 },
    { label: "Kategori3", value: 3.5 },
    { label: "Kategori4", value: 3.8 },
    { label: "Kategori5", value: 4.1 },
  ];

  return (
    <div className="bg-tertiary-light min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="bg-tertiary w-full flex justify-between items-center p-4 h-14">
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
      <main className="flex-grow relative">
        {/* Product Image Section */}
        <div className="relative bg-white rounded-lg shadow-md p-4 mb-8 mx-4 mt-8">
          {/* Logo + */}
          <button
            className="mr-4 mt-4 absolute top-4 right-4 text-secondary-700 font-bold text-2xl"
            onClick={() => setAddToHistoryOpen(true)}
          >
            +
          </button>
          <img
            src="https://via.placeholder.com/64"
            alt="Product"
            className="w-full rounded-lg mb-4"
          />
          <div className="flex justify-between items-center">
            <div>
              <div className="text-text-primary text-sm">Mi Instan</div>
              <div className="text-text-primary text-xl font-semibold">
                Indomie Goreng
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-text-primary text-lg font-bold">4.3</span>
              <span className="ml-1 text-yellow-500">★</span>
            </div>
          </div>
        </div>

        {/* Add to History */}
        {isAddToHistoryOpen && (
          <>
            {/* Blur Background */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />

            {/* Add to History Box */}
            <div className="absolute z-20 bg-tertiary-light w-full max-w-md rounded-2xl shadow-lg px-8 py-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black">
              {/* Exit Icon */}
              <div
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
                onClick={() => setAddToHistoryOpen(false)}
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

              {/* Title */}
              <h2
                className="text-3xl font-normal text-text-primary mt-6 mb-3 mx-20 text-center"
                style={{ fontFamily: "Inter" }}
              >
                Add to History
              </h2>

              {/* Product Image */}
              <div className="bg-white rounded-lg shadow-md mt-3 mx-10 mb-4 p-4">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Product"
                  className="w-full rounded-lg mb-4"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-text-secondary text-sm">
                      Product Subtitle
                    </div>
                    <div className="text-text-primary text-lg font-semibold">
                      Product Title
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-text-primary text-lg font-bold">
                      4.3
                    </span>
                    <span className="ml-1 text-yellow-500">★</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center mt-5 mx-28">
                {/* Button - */}
                <button
                  className="w-8 h-8 text-secondary-700 bg-text-white rounded-full flex items-center justify-center mr-3"
                  onClick={decrementQuantity}
                >
                  -
                </button>

                {/* Quantity */}
                <span className="px-8 mx-3 w-8 h-8 flex items-center justify-center bg-text-white text-black font-semibold rounded-full">
                  {quantity}
                </span>

                {/* Button + */}
                <button
                  className="w-8 h-8 text-secondary-700 bg-text-white rounded-full flex items-center justify-center ml-3"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>

              {/* Add Button */}
              <button
                className="bg-secondary-700 text-text-white py-2 px-20 rounded-3xl mt-8 mx-24"
                style={{ fontFamily: "Inter" }}
                onClick={() => setAddToHistoryOpen(false)}
              >
                Add
              </button>
            </div>
          </>
        )}

        {/* Description and Rating Section */}
        <div className="flex gap-4 mb-12 mx-4">
          {/* Product Description */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <h2 className="text-text-secondary text-base font-semibold">
              Nama Produk Lengkap Jika Kepanjangan
            </h2>
            <p className="text-text-tertiary text-sm mt-5">
              Lorem ipsum consectetur adipiscing elit...
            </p>
          </div>

          {/* Rating Section */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1 relative flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-text-secondary text-base font-semibold">
                Rating
              </h2>
              <div className="flex items-center">
                <span className="text-text-primary text-xl font-bold">4.3</span>
                <span className="ml-1 text-yellow-500 text-xl">★</span>
              </div>
            </div>
            <div className="flex justify-center items-end mt-8">
              {ratings.map((rating, index) => (
                <div key={index} className="flex flex-col items-center mx-2">
                  <div
                    className="w-6 bg-secondary-500 rounded"
                    style={{
                      height: `${rating.value * 10}px`,
                    }}
                  ></div>
                  <span className="block mt-2 text-sm text-text-primary font-bold">
                    {rating.value.toFixed(2)}
                  </span>
                  <span className="block text-xs text-text-secondary">
                    {rating.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alternatives Section */}
        <div className="mx-4 mb-7 mt-12">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-text-primary text-lg font-semibold p-1">
              Alternatives
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary-500 bg-transparent border border-secondary-500 rounded-full hover:bg-secondary-100">
              View All
              <span className="w-3 h-3 bg-secondary-500 rounded-full"></span>
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center mt-3 mb-2 border border-secondary-500">
            <div className="flex-1">
              <div className="text-text-secondary text-lg font-semibold">
                Product Title
              </div>
              <div className="flex items-center mt-2">
                <span className="text-text-secondary text-lg font-bold">
                  3.2
                </span>
                <span className="ml-1 text-yellow-500">★</span>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/64"
              alt="Alternative Product"
              className="w-20 h-20 rounded-lg ml-6"
            />
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-full py-4 flex justify-around">
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
      </footer>
    </div>
  );
}
