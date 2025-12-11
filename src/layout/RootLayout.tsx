import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/sidebar/UserSidebar';
import UserHeader from '../components/header/UserHeader';
import { useState } from 'react';

export default function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden">
      
      <UserSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <UserHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* --- KHU VỰC MAIN --- */}
        <main 
          className="
            flex-1 
            overflow-y-auto 
            p-4 md:p-6 lg:p-8 
            scroll-smooth
            
          "
        >
          {/* Container nội dung */}
          <div className="w-full min-h-full">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}