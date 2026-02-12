import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Save, User, Mail } from 'lucide-react';
import api from '../api/axios';
import toast from 'react-hot-toast'; 

const Settings = () => {
  const { user, login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({ firstName: user.firstName, lastName: user.lastName, email: user.email });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.put('/users/profile', formData);
      const updatedUser = response.data.user;

      const currentToken = localStorage.getItem('token') || '';
      login(currentToken, updatedUser);

      toast.success('Profile updated successfully!'); 
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update profile.'); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50 border-b border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
          <p className="text-gray-500 text-sm mt-1">Update your personal information</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-gray-400" /></div>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg flex items-center gap-2 transition-colors disabled:bg-blue-400">
              {isLoading ? 'Saving...' : 'Save Changes'}
              {!isLoading && <Save size={18} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;