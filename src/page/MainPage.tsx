import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.ts";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginWindow = window.open(
      `${config.API_URL}/auth/google`,
      "Login",
      "width=500,height=600"
    );

    const receiveMessage = (event) => {
      if (event.origin !== config.API_URL) return;
      const { token } = event.data;
      if (token) {
        localStorage.setItem("token", token);
        console.log("Login successful, token:", token);
      } else {
        console.log("Login failed or cancelled");
      }
      window.removeEventListener("message", receiveMessage);
      if (loginWindow) {
        loginWindow.close();
      }
    };

    window.addEventListener("message", receiveMessage);
  };

  // Dummy
  // useEffect(() => {
  //   const dummyData = Array.from({ length: 25 }, (_, index) => ({
  //     id: index + 1,
  //     name: `Product ${index + 1}`,
  //     rating: (Math.random() * 5).toFixed(1), 
  //   }));
  //   setProducts(dummyData);
  // }, []);

  // Fetch User Profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // API
        // const token = localStorage.getItem("authToken");
        // if (!token) throw new Error("Token not found");
        // const response = await axios.get(`${config.API_URL}/user/profile`, {
        //   headers: { Authorization: `Bearer ${token}` },
        // });

        // setProfile(response.data.user);

        // Dummy
        const dummyProfile = {
          display_name: "John Doe",
          created_at: "2024-11-20",
          sustainability_rating: 4.3,
        };
        setProfile(dummyProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/goods`);
        setProducts(response.data.goods);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Filtered and Paginated Products
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const idxProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleProductClick = (product) => {
    navigate(`/ProductDetails/${product.id}`, { state: { product } });
  };

  const handleProfileClick = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");
      const response = await axios.get(`${config.API_URL}/user/profile`, {
        headers: { cookie: `token=${token}` },
      });
      setProfile(response.data.user);
      setProfileOpen(true);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
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
          onClick={handleProfileClick}
        >
          <div className="flex flex-col items-center">
            {/* Head */}
            <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
            {/* Body */}
            <div className="w-6 h-3 bg-text-secondary mt-1 rounded-t-md"></div>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-secondary-700 text-text-white py-2 px-4 rounded-xl font-bold"
        >
          Login
        </button>
      </header>

      {/* Blur Background */}
      {isProfileOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

      {/* Profile Box */}
      {isProfileOpen && profile && (
        <div className="absolute z-20 bg-tertiary-light w-full max-w-lg rounded-lg shadow-lg px-6 py-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Exit Icon */}
          <div
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setProfileOpen(false);
              console.log("Profile Closed:", false);
            }}
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
              <div className="absolute top-[15%] w-6 h-6 bg-text-secondary rounded-full"></div>
              <div className="absolute bottom-[15%] w-8 h-4 bg-text-secondary rounded-t-md"></div>
            </div>

            {/* Username */}
            <h2 className="text-lg font-bold text-text-primary mt-4">
              {profile.display_name || "Unknown User"}
            </h2>

            {/* Created Date */}
            <p className="text-sm text-text-tertiary mt-4 mb-8">
              {profile.created_at
                ? new Date(profile.created_at).toLocaleDateString()
                : "Unknown Date"}
            </p>

            {/* Average Score Box */}
            <div className="bg-text-white rounded-lg shadow mt-8 mx-24 mb-10 p-6 border border-secondary-700">
              <h3 className="text-sm font-medium text-text-secondary">
                Average Score
              </h3>
              <div className="flex flex-col items-center mt-3">
                <span className="text-lg font-bold text-text-tertiary mt-5">
                  {profile.sustainability_rating
                    ? `${profile.sustainability_rating.toFixed(1)}★`
                    : "No Score"}
                </span>
                <button className="px-4 py-1 mt-3 bg-tertiary-light border border-secondary-700 text-secondary rounded-md text-sm">
                  Details
                </button>
              </div>
            </div>

            {/* Change Profile Button */}
            <button className="bg-secondary-700 text-text-white py-2 px-20 rounded-xl font-bold mt-8">
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

        {/* Products List or No Result */}
        {idxProducts.length > 0 ? (
          <div className="w-full max-w-lg mt-6 bg-white rounded-lg border border-secondary-500 divide-y divide-black">
            {idxProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-4"
                onClick={() => handleProductClick(product)}
              >
                <div className="ml-6">
                  <h2 className="text-text-secondary font-semibold text-[1.5rem]">
                    {product.product_name}
                  </h2>
                  <div className="flex items-center text-text-secondary mt-1">
                    <span className="text-lg font-bold">{product.product_sustainability_rating}</span>
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

            <div className="flex justify-center items-center border-t border-black mt-2 pt-4 pb-4">
              {/* Pagination Buttons */}
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="w-10 h-10 bg-secondary-700 text-tertiary-light rounded-full flex justify-center items-center hover:bg-secondary-800"
              >
                ←
              </button>

              <div className="flex space-x-4 mx-6">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 text-secondary-500 border-b-2 ${
                      currentPage === page
                        ? "border-secondary-500"
                        : "border-transparent"
                    } hover:border-secondary-500`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-10 h-10 bg-secondary-700 text-tertiary-light rounded-full flex justify-center items-center hover:bg-secondary-800"
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

      {/* Footer */}
      <footer className="bg-tertiary w-screen py-4 flex justify-around mt-[28px] z-30">
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
        <div className="w-8 h-8 rounded-full border-4 border-secondary-500 flex justify-center items-center"></div>
      </footer>
    </div>
  );
}
