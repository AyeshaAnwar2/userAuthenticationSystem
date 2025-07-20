import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { users, addUser, sortUsers, deleteUser } = useAuth();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.password) {
      addUser(newUser);
      setNewUser({ name: '', email: '', password: '', role: 'user' });
    }
  };

  return (
    <div className="  bg-purple-100 text-gray-800">
      <header className="bg-purple-600 max-w-full text-white py-10 px-12">
        <h1 className="text-3xl font-bold text-center">Welcome , Admin</h1>
      </header>
      <main className="p-8 max-w-full ">
        <form
          onSubmit={handleAdd}
          className="bg-white rounded-md shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4"
        >
          <input
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Password"
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className="border p-2 rounded w-full"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option value="user">User</option>
            <option value="visitor">Visitor</option>
          </select>
          <button className="bg-purple-800 w-100 text-white px-4 py-2 rounded">
            Add User
          </button>
        </form>

        <button
          onClick={sortUsers}
          className="bg-indigo-500 text-white px-4 py-2 rounded mb-4"
        >
          Sort Users by Name
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow items-center text-center">
            <thead className="bg-purple-200">
              <tr class="text-center">
                <th className="p-2 text-center">Name</th>
                <th className="p-2 text-center">Email</th>
                <th className="p-2 text-center">Role</th>
                <th className="p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.role}</td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteUser(idx)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
