import React from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Cart({ cart, onClear }: { cart: Product[]; onClear: () => void }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  const checkout = async () => {
    try {
      const token = localStorage.getItem("token");  // ✅ Fetch JWT
      if (!token) {
        alert("❌ Please login first.");
        return;
      }

      await axios.post(
        "http://localhost:4002/orders",
        { items: cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Order placed successfully!");
      onClear();
    } catch (err) {
      console.error(err);
      alert("❌ Checkout failed.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl mb-4">Your Cart</h1>
      {cart.map((p) => (
        <div key={p.id} className="flex justify-between border-b py-2">
          <span>{p.name}</span>
          <span>₹{p.price.toLocaleString("en-IN")}</span>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ₹{total.toLocaleString("en-IN")}</p>
      <button
        onClick={checkout}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
}
