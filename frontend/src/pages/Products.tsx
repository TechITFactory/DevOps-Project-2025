import React from "react";
import dummyProducts from "../dummyProducts";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🛍️ Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
