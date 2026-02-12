import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, ShieldCheck, Mail, BadgeCheck } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 border border-gray-100">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 mb-6 md:mb-8 border-b border-gray-100 pb-6">
          <div className="bg-blue-50 p-3 sm:p-4 rounded-full text-blue-600 border border-blue-100 flex-shrink-0">
            <User size={32} className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-gray-500 mt-1.5 flex items-center justify-center sm:justify-start gap-1.5 text-sm sm:text-base">
              <ShieldCheck size={16} className="text-green-500 flex-shrink-0" /> 
              <span>Securely logged in via JWT</span>
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center sm:text-left">
          Your Profile Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50/50 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
            <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm text-gray-500 flex-shrink-0">
              <BadgeCheck size={20} className="text-blue-500" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-0.5">Full Name</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50/50 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
            <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm text-gray-500 flex-shrink-0">
              <Mail size={20} className="text-blue-500" />
            </div>
           
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-0.5">Email Address</p>
              <p 
                className="text-base sm:text-lg font-semibold text-gray-900 truncate" 
                title={user?.email} 
              >
                {user?.email}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;