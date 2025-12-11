import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Thêm icon Menu từ lucide-react (nếu chưa có, install lucide-react)

interface UserHeaderProps {
  onToggleSidebar: () => void; // Thêm prop để toggle sidebar từ header (cho UX tốt hơn trên mobile)
}

const menuItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/routes', label: 'Trekking Routes' },
  { path: '/community', label: 'Community' },
  { path: '/profile', label: 'Profile' },
];

export default function UserHeader({ onToggleSidebar }: UserHeaderProps) {
  const location = useLocation();
  const currentPage = menuItems.find(item => item.path === location.pathname)?.label || 'Trekker';

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user?.name || user?.username || 'Trekker';

  return (
    <header className="h-16 bg-white shadow-md border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10"> {/* Cải thiện shadow, padding responsive, sticky top */}
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="lg:hidden text-gray-600 hover:text-emerald-600 transition-colors"> {/* Toggle sidebar cho mobile */}
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold text-emerald-700">{currentPage}</h1> {/* Tăng font size responsive, đổi màu cho nổi bật */}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500 hidden md:block">Hello,</span> {/* Ẩn "Hello" trên mobile để tiết kiệm không gian */}
        <span className="font-semibold text-emerald-600">{userName}</span>
      </div>
    </header>
  );
}