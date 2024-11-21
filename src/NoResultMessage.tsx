import React from "react";

export default function MainPage() {
  const hasResults = false; 

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

      {/* Search Bar */}
      <div className="w-full flex justify-center mt-8 px-6">
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-text-secondary rounded-full h-12 flex items-center justify-center w-full max-w-md shadow px-6 placeholder-text-secondary focus:outline-none"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mt-12 px-4 flex flex-col items-center">
        {hasResults ? (
          // Found?
          <div>Found</div>
        ) : (
          // Not Found?
          <div className="w-full h-[250px] flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
            {/* Icon */}
            <div className="w-16 h-16 bg-secondary-300 rounded-lg flex items-center justify-center">
              <span className="text-text-secondary text-sm">Icon</span>
            </div>
            {/* Text */}
            <p className="text-text-secondary mt-4 text-sm font-medium">
              Nothing Found :(
            </p>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <footer className="bg-tertiary w-full py-4 mt-auto flex justify-around">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full bg-secondary-500"
          ></div>
        ))}
      </footer>
    </main>
  );
}
