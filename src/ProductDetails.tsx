import React from 'react';

export default function ProductDetails() {
  return (
    <div className="bg-tertiary-light p-4 min-h-screen">
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
          {/*makna:
          - border border-text-secondary: menambahkan border di sekitar lingkaran*/}
        </div>
      </header>

      {/* Product Image Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <img
          src="https://via.placeholder.com/64" 
          alt="Product"
          className="w-full rounded-lg mb-4"
        />
        <div className="text-text-secondary text-sm">Mi Instan</div>
        <div className="text-text-primary text-xl font-semibold">Indomie Goreng</div>
        <div className="flex items-center mt-2">
          <span className="text-text-primary text-lg font-bold">4.3</span>
          <span className="ml-1 text-yellow-500">★</span> 
        </div>
      </div>

      {/* Description and Rating Section */}
      <div className="flex gap-4 mb-6">
        {/* Product Description */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-text-primary text-base font-semibold">
            Nama Produk Lengkap Jika Kepanjangan
          </h2>
          <p className="text-text-secondary text-sm mt-2">
            Lorem ipsum consectetur adipiscing elit...
          </p>
        </div>

        {/* Ratings Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-text-primary text-base font-semibold">Rating</h2>
          <div className="flex items-center mt-4">
            <span className="text-text-primary text-2xl font-bold">5.3</span>
            <div className="ml-4 flex space-x-1 items-end">
              <div className="w-3 h-10 bg-secondary-300 rounded"></div>
              <div className="w-3 h-8 bg-secondary-300 rounded"></div>
              <div className="w-3 h-6 bg-secondary-300 rounded"></div>
              <div className="w-3 h-4 bg-secondary-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternatives Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-text-primary text-lg font-semibold">Alternatives</h2>
          <button className="text-sm text-text-secondary">View All</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <img
            src="https://via.placeholder.com/64" 
            alt="Alternative Product"
            className="w-20 h-20 rounded-lg mr-4"
          />
          <div>
            <div className="text-text-secondary text-sm">Product Subtitle</div>
            <div className="text-text-primary text-lg font-semibold">Product Title</div>
            <div className="flex items-center mt-2">
              <span className="text-text-primary text-lg font-bold">3.2</span>
              <span className="ml-1 text-yellow-500">★</span> {/* Rating star */}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {[1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot === 1 ? 'bg-secondary-500' : 'bg-secondary-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
