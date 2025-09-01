import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:4002/orders/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      if (!res.ok) throw new Error("Checkout failed");

      const data = await res.json();
      alert(`✅ Order placed successfully! Order ID: ${data.orderId}`);
    } catch (err) {
      console.error("❌ Checkout error:", err);
      alert("❌ Checkout failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between bg-white p-2 shadow rounded">
                <span>{item.name} - ₹{item.price}</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleCheckout}
          >
            ✅ Checkout
          </button>
        </div>
      )}
    </div>
  );
}
