import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white py-4 px-6">
          <h2 className="text-2xl font-bold">Login to Your Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="py-6 px-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <div className="flex items-center border rounded-full px-3 py-2">
              <User size={20} className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded-full px-3 py-2">
              <Lock size={20} className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;