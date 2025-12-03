import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/sidebar/UserSidebar';
import UserHeader from '../components/header/UserHeader';
import { useState } from 'react';

export default function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <UserSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <UserHeader />

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}