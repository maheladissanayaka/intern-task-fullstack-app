import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, User } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { user } = useAuth(); 

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shadow-sm z-10 relative">
      
      <div className="flex items-center md:hidden">
        <button 
          onClick={toggleSidebar} 
          className="p-2 -ml-2 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Menu size={24} />
        </button>
        <span className="ml-2 text-lg font-bold text-gray-800">Overview</span>
      </div>
      
      <div className="hidden md:flex flex-1">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Overview</h1>
      </div> 
      
      <div className="flex items-center gap-4 md:gap-6 ml-auto">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
          <User size={16} className="text-gray-500" />
          <span className="hidden sm:inline">{user?.firstName} {user?.lastName}</span>
          <span className="sm:hidden">{user?.firstName}</span>
        </div>
      </div>
      
    </header>
  );
};

export default Header;