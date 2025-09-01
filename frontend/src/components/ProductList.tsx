import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";
import { dummyProducts } from "../dummyProducts";

export default function ProductList() {
  const [products, setProducts] = useState(dummyProducts);

  useEffect(() => {
    axios.get(API.product + "/products")
      .then((res) => {
        if (res.data.length > 0) setProducts(res.data);
      })
      .catch(() => setProducts(dummyProducts));
  }, []);

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updated = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updated));
    alert(`${product.name} added to cart`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg shadow p-4 bg-white">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-gray-800 font-bold mt-2">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-3 px-4 py-2 bg-black text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
