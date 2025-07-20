import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-sky-100 to-blue-200 text-gray-800 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">
          Welcome{currentUser ? `, ${currentUser.name}` : ""}!
        </h1>
        <p className="text-lg text-gray-600">
          You are logged in as <strong>{currentUser?.role}</strong>.
        </p>
        <p className="mt-2 text-gray-500">
          This is your user panel where you can view your details.
        </p>
      </div>
    </div>
  );
};

export default Home;
