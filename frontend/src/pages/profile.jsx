import Header from "../components/header";
import React from "react";
export default function UserProfile() {
    return (
      <>
      <Header/>
      <div className="p-6">
        <h2 className="text-3xl font-bold">User Profile</h2>
        <p className="mt-4">Username: User123</p>
        <p>Email: user@example.com</p>
      </div>
      </>
    );
  }