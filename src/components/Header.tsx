import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  userName?: string;
}

export function Header({ onMenuClick, userName = 'مستخدم' }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>

        <div className="flex-1" />

        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-gray-900">
            <Bell size={24} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">مدير</p>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
