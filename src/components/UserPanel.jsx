import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserPanel = () => {
  const { users, currentUser } = useAuth();

  return (
    <div className="  bg-pink-100 rounded-2xl text-gray-800">
      <header className="bg-pink-500 rounded-2xl text-white py-10 px-15">
        <h1 className="text-3xl font-bold text-center">Welcome, {currentUser?.name}</h1>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4 mx-20 text-center">All Users</h2>
        <ul className="space-y-2 px-8">
          {users.map((user, idx) => (
            <li key={idx} className="bg-white py-4 px-10 w-150 rounded shadow">
              {user.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default UserPanel;
