// Header.jsx
import { Link } from "react-router-dom";
import React from "react";
export default function Header() {
  return (
    <header className="bg-purple-700 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Epic Food Fails</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/signup" className="hover:text-yellow-300">Sign Up</Link>
        <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
      </nav>
    </header>
  );
}