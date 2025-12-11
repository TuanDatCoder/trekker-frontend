import { LogOut, Menu, Home, MapPin, Users, User, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoTrekker from '../../assets/logo/LogoTrekkerNoBackground.png';

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
        isOpen ? 'w-56' : 'w-20' /* SỬA: Tăng lên w-20 (80px) để icon không bị chèn ép, w-16 hơi bé */
      } bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white transition-[width] duration-500 ease-in-out flex flex-col shadow-2xl relative overflow-hidden`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Logo Section - Đã chỉnh sửa khoảng cách */}
<div className={`h-20 flex items-center justify-center border-b border-white/10 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'px-4' : 'px-0'}`}>
  {/* SỬA 1: Đổi 'gap-3' thành 'gap-1.5' để các phần tử gần nhau hơn */}
  <div className={`flex items-center transition-all duration-500 ${isOpen ? 'gap-1.5' : 'gap-0 justify-center w-full'}`}>
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <img
        src={LogoTrekker}
        alt="Trekker Logo"
        className="w-8 h-8 object-contain relative z-10 drop-shadow-2xl"
      />
    </div>
    <span
      className={`text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent whitespace-nowrap transition-all duration-500 overflow-hidden ${
        /* SỬA 2: Đã XÓA 'ml-2' ở đây */
        isOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 ml-0 hidden'
      }`}
    >
      Trekker
    </span>
  </div>
</div>

        {/* Menu Navigation */}
        <nav className="flex-1 p-3 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-transparent">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full flex items-center rounded-xl transition-all duration-300 group border-0 relative overflow-hidden ${
                  isOpen ? 'justify-start px-3 py-3 gap-3' : 'justify-center px-0 py-3 gap-0'
                } ${
                  isActive
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md'
                    : 'bg-transparent text-emerald-100/80 hover:bg-white/10 hover:text-white hover:backdrop-blur-md'
                }`}
                title={!isOpen ? item.label : ''} // Tooltip khi đóng menu
              >
                {/* Active Indicator - Chỉ hiện khi mở hoặc làm nhỏ gọn lại khi đóng */}
                {isActive && (
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-r-full shadow-glow-emerald transition-all duration-300 ${isOpen ? 'w-1 h-8' : 'w-1 h-6 left-0.5'}`}></div>
                )}
                
                {/* Icon Wrapper - Quan trọng: Luôn căn giữa */}
                <div className={`relative flex-shrink-0 flex items-center justify-center w-6 h-6 ${isActive ? 'animate-bounce-subtle' : ''}`}>
                  {isActive && (
                    <div className="absolute inset-0 bg-emerald-400 rounded-lg blur-md opacity-50"></div>
                  )}
                  <Icon
                    className={`transition-all duration-300 relative z-10 ${
                      isActive ? 'text-white scale-110' : 'text-emerald-200 group-hover:text-white group-hover:scale-110'
                    } ${isOpen ? 'w-5 h-5' : 'w-6 h-6'}`}
                  />
                </div>

                {/* Label */}
                <span
                  className={`font-medium transition-all duration-300 whitespace-nowrap overflow-hidden ${
                    isOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 absolute'
                  } ${isActive ? 'text-white' : 'text-emerald-100/90 group-hover:text-white'}`}
                >
                  {item.label}
                </span>

                {/* Arrow on Active - Chỉ hiện khi mở */}
                {isActive && isOpen && (
                  <ChevronRight
                    className="w-5 h-5 text-emerald-300 animate-pulse ml-auto"
                  />
                )}
                
                {/* Shine Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className={`border-t border-white/10 space-y-2 backdrop-blur-sm ${isOpen ? 'p-3' : 'p-2'}`}>
          
          {/* Logout */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center rounded-xl bg-transparent hover:bg-red-500/20 text-red-200 hover:text-red-100 transition-all duration-300 group border-0 relative overflow-hidden ${
              isOpen ? 'justify-start px-3 py-3 gap-3' : 'justify-center px-0 py-3'
            }`}
             title={!isOpen ? 'Logout' : ''}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <LogOut className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10 flex-shrink-0" />
            <span
              className={`font-medium relative z-10 whitespace-nowrap transition-all duration-500 overflow-hidden ${
                isOpen ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 absolute'
              }`}
            >
              Logout
            </span>
          </button>
          
          {/* Toggle */}
          <button
            onClick={onToggle}
            className="w-full flex justify-center items-center py-3 bg-white/10 hover:bg-white/20 text-emerald-200 hover:text-white rounded-xl transition-all duration-300 border-0 backdrop-blur-sm group"
          >
            <Menu
              className={`w-6 h-6 transition-transform duration-500
                ${isOpen ? 'rotate-0' : 'rotate-180 scale-110'}
                text-white drop-shadow-lg
              `}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}