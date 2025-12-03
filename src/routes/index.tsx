// src/routes/index.tsx
import { createBrowserRouter, Navigate, Link } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import RegisterSuccess from '../pages/auth/RegisterSuccess';

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
        element: (
          <div className="p-10 text-center">
            <h1 className="text-5xl font-bold text-emerald-600 mb-4">
              Welcome to Trekker Dashboard!
            </h1>
            <p className="text-xl text-gray-600">Chinh phục mọi cung đường – Bắt đầu từ đây</p>
          </div>
        ),
      },
      {
        path: 'profile',
        element: <div className="p-10 text-3xl text-emerald-700">My Profile</div>,
      },
      {
        path: 'routes',
        element: <div className="p-10 text-3xl text-emerald-700">Trekking Routes Map</div>,
      },
      {
        path: 'community',
        element: <div className="p-10 text-3xl text-emerald-700">Trekker Community</div>,
      },
    ],
  },

  // 4. 404 - Page Not Found
  {
    path: '*',
    element: (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found</p>
          <Link
            to="/"
            className="px-8 py-4 bg-emerald-600 rounded-xl hover:bg-emerald-700 transition text-lg font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    ),
  },
]);