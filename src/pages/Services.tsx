import React from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      name: 'Wired Connection',
      icon: <Wifi className="text-blue-500" size={48} />,
      description: 'High-speed wired internet connection for stable performance',
      price: '50 SAR/month',
    },
    {
      name: 'Wireless Connection',
      icon: <WifiOff className="text-green-500" size={48} />,
      description: 'Flexible wireless internet for convenience and mobility',
      price: '40 SAR/month',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ name: string; icon: React.ReactNode; description: string; price: string }> = ({ name, icon, description, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">{price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Services;