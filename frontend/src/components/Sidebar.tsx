import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, SettingsIcon, LogOut, X, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    logout();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-xl md:shadow-sm transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center">
            <LayoutDashboard className="text-blue-600 mr-3" size={24} />
            <span className="text-xl font-bold text-gray-800 tracking-tight">InternApp</span>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)} 
            className="md:hidden text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link 
            to="/dashboard" 
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${
              location.pathname === '/dashboard' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </Link>
          
          <Link 
            to="/settings" 
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${
              location.pathname === '/settings' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <SettingsIcon size={20} className="mr-3" />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <button 
            onClick={() => setShowLogoutConfirm(true)} 
            className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 rounded-lg transition-colors"
          >
            <LogOut size={18} className="mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full text-red-600">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Sign Out</h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to sign out? You will need to log in again to access your dashboard.
            </p>
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowLogoutConfirm(false)} 
                className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              
              <button 
                onClick={handleConfirmLogout} 
                className="px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <LogOut size={16} />
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;