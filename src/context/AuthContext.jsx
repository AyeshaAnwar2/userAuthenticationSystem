import React, { createContext, useContext, useState } from "react";

// Initial dummy users
const initialUsers = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    settings: {
      theme: "light",
      fontFamily: "sans-serif",
    },
  },
  {
    name: "UserOne",
    email: "user1@example.com",
    password: "user123",
    role: "user",
    settings: {
      theme: "dark",
      fontFamily: "monospace",
    },
  },
    {
    name: "UserTwo",
    email: "user2@example.com",
    password: "user2123",
    role: "user",
    settings: {
      theme: "dark",
      fontFamily: "monospace",
    },
  },
  
];

// Create context
const AuthContext = createContext();

// Export useAuth hook
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  // Login
  const login = (name, email, password) => {
    const user = users.find(
      (u) => u.name === name && u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return user;
    }
    return null;
  };

  // Add user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Sort users by name
  const sortUsers = () => {
    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  // Delete user by index
  const deleteUser = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        login,
        addUser,
        sortUsers,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
