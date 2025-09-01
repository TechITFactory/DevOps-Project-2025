import React, { useEffect, useState } from "react";
import api from "../api";

export default function Orders() {
  const [orders, setOrders] = useState<any>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/orders");
        console.log("✅ Orders API response:", res.data);
        setOrders(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch orders", err);
        setOrders({ error: "Failed to load orders" });
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Orders Debug</h1>
      <pre className="bg-gray-100 p-4 mt-4 rounded">
        {JSON.stringify(orders, null, 2)}
      </pre>
    </div>
  );
}
