import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../config.ts";
import { getProduct } from "../handler/products.handler.tsx";

export default function ProductDetails() {
  const [isAddToHistoryOpen, setAddToHistoryOpen] = useState(false);
  const [currentProduct, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { product } = location.state || {};
  const [purchaseMessage, setPurchaseMessage] = useState(null);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!product?.id) return;
        const response = await getProduct(product.id);
        if (!response) throw new Error("Failed to fetch product.");
        const fetchedProduct = response.good;
        setProduct({
          id: fetchedProduct.id,
          name: fetchedProduct.product_name,
          description: fetchedProduct.product_description,
          category: fetchedProduct.product_category,
          price: fetchedProduct.product_price,
          image: fetchedProduct.product_image,
          sustainabilityRating: fetchedProduct.product_sustainability_rating,
          producerId: fetchedProduct.product_producer_id,
          type: fetchedProduct.product_type,
          isOrganic: fetchedProduct.is_organic,
          foodSubcategory: fetchedProduct.food_subcategory,
          createdAt: fetchedProduct.created_at,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [product]);

  const handleBuyProduct = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("User is not authenticated.");
      console.log(purchaseMessage);
      const response = await axios.post(
        `${config.API_URL}/buyProduct`,
        { product_id: currentProduct.id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPurchaseMessage(response.data.message || "Purchase successful!");
      alert("Product successfully added to history!");
    } catch (error) {
      console.error(error);
      setPurchaseMessage("Failed to purchase the product.");
      alert("Failed to add product to history. Please try again.");
    }
  };

  return (
    <div className="bg-tertiary-light min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-tertiary flex justify-between items-center p-4">
        <div className="menu-icon">
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
          <span className="block w-4 h-0.5 bg-text-secondary"></span>
        </div>
        <div className="profile-icon w-10 h-10 bg-white rounded-full border"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-6">
        <section className="bg-white rounded-lg shadow-md p-4">
          <img
            src={currentProduct.image || "https://via.placeholder.com/64"}
            alt={currentProduct.name || "Product"}
            className="w-full rounded-lg mb-4"
          />
          <h1 className="text-xl font-bold">
            {currentProduct.name || "Product Name"}
          </h1>
          <p>{currentProduct.description || "No description available."}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold">${currentProduct.price}</span>
            <button
              onClick={() => setAddToHistoryOpen(true)}
              className="bg-secondary-700 text-white px-4 py-2 rounded-lg"
            >
              Add to History
            </button>
          </div>
        </section>

        {/* Add to History Modal */}
        {isAddToHistoryOpen && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-modal"
                onClick={() => setAddToHistoryOpen(false)}
              >
                &times;
              </button>
              <h2>Add to History</h2>
              <div>
                <img
                  src={currentProduct.image || "https://via.placeholder.com/64"}
                  alt={currentProduct.name}
                  className="w-32"
                />
                <p>{currentProduct.name}</p>
              </div>
              <div>
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button onClick={handleBuyProduct}>Confirm</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-tertiary flex justify-around py-4">
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
        <div className="footer-icon"></div>
      </footer>
    </div>
  );
}
