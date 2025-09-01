import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <h1 style={{ color: "red" }}>✅ React is Working</h1>
      <p>If you see this, the blank page issue is inside App.tsx or Router.</p>
    </React.StrictMode>
  );
} else {
  console.error("❌ Root element not found");
}
