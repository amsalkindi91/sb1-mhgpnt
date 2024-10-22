import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wifi } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <div className="container mx-auto">
            <Wifi className="inline-block mr-2" />
            <span>© 2024 Wi-Fi Subscription Management. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;