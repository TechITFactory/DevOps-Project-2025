import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="relative">
      <button className="bg-yellow-500 px-3 py-1 rounded">
        🛒 Cart ({cart.length})
      </button>
      {cart.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded p-2 z-50">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-1">
              <span>{item.name}</span>
              <button
                className="text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
