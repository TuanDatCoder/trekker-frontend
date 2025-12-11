// src/routes/index.tsx
import { createBrowserRouter, Navigate, Link } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import RegisterSuccess from '../pages/auth/RegisterSuccess';

// Pages (Newly Added)
import DashboardPage from '../pages/dashboard/UserDashboardPage';
import ProfilePage from '../pages/profile/ProfilePage';
import RoutesPage from '../pages/routes/RoutesPage';
import CommunityPage from '../pages/community/CommunityPage';
import NotFoundPage from '../pages/error/NotFoundPage';

// Layouts
import RootLayout from '../layout/RootLayout';

// ====================== PROTECTED & PUBLIC ROUTE ======================
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('accessToken');
  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('accessToken');
  return token ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

// ====================== ROUTER CONFIG ======================
export const router = createBrowserRouter([
  // 1. Trang chủ - Public (ai cũng vào được)
  {
    path: '/',
    element: <HomePage />,
  },

  // 2. Các trang Auth - Chỉ chưa đăng nhập mới thấy
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: (
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicOnlyRoute>
            <Register />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'register-success',
        element: <RegisterSuccess />,
      },
      {
        path: 'forgot-password',
        element: (
          <PublicOnlyRoute>
            <ForgotPassword />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <PublicOnlyRoute>
            <ResetPassword />
          </PublicOnlyRoute>
        ),
      },
    ],
  },

  // 3. Các trang sau khi đăng nhập → dùng RootLayout (có Sidebar + Header)
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'routes',
        element: <RoutesPage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
    ],
  },

  // 4. 404 - Page Not Found
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);