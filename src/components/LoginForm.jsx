import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(form.name, form.email, form.password);
    if (user) {
      navigate(user.role === 'admin' ? '/admin' : '/user');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    
    <div className="min-h-screen max-w-lg flex items-center justify-center  p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Login
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-md focus:outline-indigo-400"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md focus:outline-indigo-400"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md focus:outline-indigo-400"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;


