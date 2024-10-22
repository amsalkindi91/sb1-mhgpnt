import React, { useState } from 'react';
import { Wifi, DollarSign, Clock, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-full md:w-3/4 md:pl-8">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'billing' && <BillingTab />}
          {activeTab === 'usage' && <UsageTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
};

const SidebarMenu: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <Wifi size={20} /> },
    { id: 'billing', label: 'Billing', icon: <DollarSign size={20} /> },
    { id: 'usage', label: 'Usage', icon: <Clock size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`flex items-center w-full p-3 mb-2 rounded-lg transition duration-300 ${
            activeTab === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.icon}
          <span className="ml-3">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

const OverviewTab: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard title="Current Plan" value="Wireless Connection" />
        <InfoCard title="IP Address" value="192.168.1.100" />
        <InfoCard title="Next Billing Date" value="May 1, 2024" />
        <InfoCard title="Data Usage" value="75 GB / 100 GB" />
      </div>
    </div>
  );
};

const BillingTab: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Plan</h3>
        <p>Wireless Connection - 40 SAR/month</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <p>Visa ending in 1234</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Billing History</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Apr 1, 2024</td>
              <td className="p-2">40 SAR</td>
              <td className="p-2 text-green-600">Paid</td>
            </tr>
            <tr>
              <td className="p-2">Mar 1, 2024</td>
              <td className="p-2">40 SAR</td>
              <td className="p-2 text-green-600">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UsageTab: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Month Usage</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="mt-2">75 GB / 100 GB</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Usage History</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Month</th>
              <th className="p-2 text-left">Data Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">April 2024</td>
              <td className="p-2">75 GB</td>
            </tr>
            <tr>
              <td className="p-2">March 2024</td>
              <td className="p-2">92 GB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SettingsTab: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input type="text" id="address" name="address" className="w-full p-2 border rounded-md" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Save Changes
        </button>
      </form>
    </div>
  );
};

const InfoCard: React.FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;