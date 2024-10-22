import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Wifi size={24} />
          <span className="font-bold text-xl">Wi-Fi Manager</span>
        </Link>
        <div className="space-x-4">
          <Link to="/services" className="hover:text-blue-200">Services</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
          <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;