import React from 'react';
import { useAuthContext } from '../context/AuthContext';
export default function Sidebar() {
const {loader,user}=useAuthContext()

  const adminItems = [
    { name: 'adll userss', icon: '📊', path: '/about' },
    { name: 'check', icon: '📈', path: '/analytics' },
    { name: 'ass', icon: '👥', path: '/users' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

   const MenuItems = [
    { name: 'About', icon: '📊', path: '/about' },
    { name: 'Analytics', icon: '📈', path: '/analytics' },
    { name: 'Users', icon: '👥', path: '/users' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

 

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 h-screen flex flex-col fixed left-0 top-0 z-40 border-r border-slate-800">
      {/* Branding Area */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800 font-bold text-xl tracking-wider text-indigo-400">
       {user.role == 'admin' ? 'Admin Dashbaord': 'User Dashboard'}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {MenuItems.map((item) => (
          <a
            key={item.name}
            href={item.path} 
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors group"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium group-hover:text-white">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white">
          JD
        </div>
        <div>
          <p className="text-sm font-semibold text-white">John Doe</p>
          <p className="text-xs text-slate-400">Admin</p>
        </div>
      </div>
    </aside>
  );
}
