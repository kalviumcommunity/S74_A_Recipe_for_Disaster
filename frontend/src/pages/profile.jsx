import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/profile", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleUpdateEmail = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/user/update-email/${user.email}`,
        { email: user.email, newEmail, password },
        { withCredentials: true }
      );
      alert(response.data.message);
      setIsModalOpen(false);
      setNewEmail("");
      setPassword("");
      setUser((prev) => ({ ...prev, email: newEmail }));
    } catch (error) {
      alert(error.response?.data?.message || "Error updating email");
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-center text-blue-400">User Profile</h2>

          {user ? (
            <div className="mt-6 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="text-xl">👤</span>
                <p className="text-lg font-medium">Username: <span className="text-gray-300">{user.username}</span></p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📧</span>
                <p className="text-lg font-medium">Email: <span className="text-gray-300">{user.email}</span></p>
              </div>
            </div>
          ) : (
            <p className="text-center mt-6 text-gray-400">Loading profile...</p>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-700 backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-center text-white">Edit Email</h2>
            
            <input
              type="email"
              placeholder="New Email"
              className="mt-4 w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="mt-3 w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={handleUpdateEmail}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105"
              >
                Update
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
