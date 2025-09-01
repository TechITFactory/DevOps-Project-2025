import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <div>
            <Link to="/" className="mr-4">Products</Link>
            <Link to="/orders" className="mr-4">Orders</Link>
            <Link to="/cart" className="mr-4">Cart</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>⚠️ Page Not Found</p>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}
