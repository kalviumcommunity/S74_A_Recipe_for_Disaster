import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/user/login", { email, password });
      alert("Login Successful");
      navigate("/");
    } catch (err) {
      alert("Unable to Login");
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-purple-600 text-white p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
