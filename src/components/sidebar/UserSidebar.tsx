import { Mountain, LogOut, Menu, Home, MapPin, Users, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface UserSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { path: '/dashboard', icon: Home, label: 'Dashboard' },
  { path: '/routes', icon: MapPin, label: 'Trekking Routes' },
  { path: '/community', icon: Users, label: 'Community' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export default function UserSidebar({ isOpen, onToggle }: UserSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/auth/login');
  };

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-emerald-800 to-emerald-900 text-white transition-all duration-300 flex flex-col shadow-xl`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-emerald-700/50">
        <div className="flex items-center gap-3">
          <Mountain className="w-8 h-8 flex-shrink-0 text-emerald-100" />
          {isOpen && <span className="text-xl font-bold tracking-wide">Trekker</span>}
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              // Thêm 'bg-transparent' vào class mặc định để đè các style global
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group border-0 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400 font-semibold' 
                  : 'bg-transparent text-emerald-100 hover:bg-emerald-700/50 hover:text-white' 
              }`}
            >
              <Icon 
                className={`w-6 h-6 flex-shrink-0 transition-colors ${
                  isActive ? 'text-white' : 'text-emerald-200 group-hover:text-white'
                }`} 
              />
              {isOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout & Toggle */}
      <div className="p-4 border-t border-emerald-700/50 space-y-3">
        {/* Nút Logout: Thêm bg-transparent */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-transparent hover:bg-red-500/20 text-red-200 hover:text-red-100 transition-all group border-0"
        >
          <LogOut className="w-6 h-6 group-hover:text-red-100 transition-colors" />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>

        {/* Nút Toggle: Thêm bg-transparent */}
        <button
          onClick={onToggle}
          className="w-full flex justify-center py-2 bg-transparent text-emerald-200 hover:bg-emerald-700/50 hover:text-white rounded-lg transition-all border-0"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
}