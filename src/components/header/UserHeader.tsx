import { useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/routes', label: 'Trekking Routes' },
  { path: '/community', label: 'Community' },
  { path: '/profile', label: 'Profile' },
];

export default function UserHeader() {
  const location = useLocation();
  const currentPage = menuItems.find(item => item.path === location.pathname)?.label || 'Trekker';

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user?.name || user?.username || 'Trekker';

  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-gray-800">{currentPage}</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Hello,</span>
        <span className="font-semibold text-emerald-600">{userName}</span>
      </div>
    </header>
  );
}