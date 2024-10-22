import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Shield, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Wi-Fi Subscription Management</h1>
        <p className="text-xl text-gray-600">Manage your Wi-Fi subscriptions with ease</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Wifi className="text-blue-500" size={48} />}
          title="Fast Connectivity"
          description="Enjoy high-speed internet with our reliable Wi-Fi services"
        />
        <FeatureCard
          icon={<Shield className="text-green-500" size={48} />}
          title="Secure Network"
          description="Your connection is protected with the latest security measures"
        />
        <FeatureCard
          icon={<Clock className="text-purple-500" size={48} />}
          title="24/7 Support"
          description="Our team is always ready to assist you with any issues"
        />
      </div>
      <div className="text-center">
        <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          View Our Services
        </Link>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;