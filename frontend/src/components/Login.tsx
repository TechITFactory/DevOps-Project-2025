import React, { useState } from "react";
import axios from "axios";
import API from "../api";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(API.user + "/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username);
      setMessage(`✅ Logged in as ${username}`);
    } catch (err: any) {
      if (err.response?.data?.error) {
        setMessage("❌ " + err.response.data.error);
      } else {
        setMessage("❌ Login failed.");
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-3">Login</h2>
      <input
        value={username}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
        className="border px-3 py-2 w-full mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        className="border px-3 py-2 w-full mb-2"
      />
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white w-full"
      >
        Login
      </button>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
