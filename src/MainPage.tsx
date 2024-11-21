import React from "react";

export default function MainPage() {
  return (
    <main className="bg-tertiary-light min-h-screen flex flex-col items-center w-screen">
      {/*makna:
        - min-h-screen: tinggi elemen adalah selayar.
        - flex: container flexbox.
        - flex-col: disusun vertical.
        - item-center: child-el. disusun ketengah.
        - w-screen: lebar selayar.*/}
      {/* Header */}
      <header className="bg-tertiary w-full flex justify-between items-center p-4 h-14">
        {/*makna:
        - justify-between: kasih distance in between child-elemen.*/}
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

      {/* Search Bar */}
      <div className="w-full flex justify-center mt-10 px-8">
        {/*makna:
        - mt-10: margin top
        - px-8: padding -x*/}
        <input
          type="text"
          placeholder="Search"
          className="bg-tertiary text-text-secondary rounded-full h-12 flex items-center justify-center w-full max-w-lg shadow px-6 placeholder-text-secondary focus:outline-none"
        />
      </div>

      {/* Product List */}
      <div className="w-full max-w-lg mt-6 px-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center "
          >
            {/* Product Info */}
            <div className="ml-6 mt-4 mb-3">
              <h2 className="text-text-primary font-semibold text-[1.5rem]">
                Product Title
              </h2>
              <div className="flex items-center text-text-secondary">
                <span className="text-[1.5rem]">3.2★</span>
              </div>
            </div>
            {/* Product Image */}
            <div className="w-24 h-14 my-4 mr-6 rounded-2xl overflow-hidden bg-secondary-300">
              <img
                src="https://via.placeholder.com/64"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {[1, 2, 3, 4].map((dot) => (
          <div key={dot} className="w-3 h-3 bg-secondary-500"></div>
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
