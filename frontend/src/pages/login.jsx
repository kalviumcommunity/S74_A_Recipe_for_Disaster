import { useState } from "react";
import React from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

    <div className="max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 border mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 border mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full bg-purple-600 text-white p-2 rounded-md">Login</button>
    </div>
    </div>
  );
}