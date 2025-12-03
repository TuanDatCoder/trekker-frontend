import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mountain, Mail, Lock, Loader2, LogIn } from 'lucide-react';
import { useLoginMutation } from '../../services/authApi';
import { Link, useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage('');
    try {
      const result = await login(data).unwrap();
      localStorage.setItem('accessToken', result.data.accessToken);
      localStorage.setItem('refreshToken', result.data.refreshToken);
      navigate('/dashboard');
    } catch (err: any) {
      const message = err?.data?.message || 'Login failed. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">

      {/* Background hiệu ứng đẹp */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-700 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse delay-1000"></div>
      </div>

      {/* Logo nhỏ ở góc trái trên */}
      <div className="absolute top-6 left-6 z-20">
        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-emerald-600/30">
          <Mountain className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Form được kéo lên cao – căn giữa theo chiều dọc nhưng lệch lên trên 1 chút cho đẹp */}
      <div className="flex min-h-screen items-center justify-center px-4 pt-16 pb-10 md:pt-20">
        <div className="w-full max-w-md -mt-10 md:-mt-16"> {/* Đây là key: -mt để kéo lên */}

          {/* Tiêu đề "Welcome Back" */}
          <h2 className="text-center text-4xl font-bold text-white mb-10">Welcome Back</h2>

          {/* Card Login */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Email / Username */}
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">
                  Email or Username
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-emerald-400" />
                  <input
                    {...register('identifier')}
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/30 transition-all"
                    placeholder="Enter email or username"
                  />
                </div>
                {errors.identifier && (
                  <p className="mt-2 text-red-300 text-sm">{errors.identifier.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-emerald-400" />
                  <input
                    {...register('password')}
                    type="password"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/30 transition-all"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-red-300 text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* Error */}
              {errorMessage && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-center text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-lg rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 disabled:opacity-70"
              >
                {isLoading ? (
                  <> <Loader2 className="w-6 h-6 animate-spin" /> Signing in... </>
                ) : (
                  <> <LogIn className="w-6 h-6" /> Sign In </>
                )}
              </button>
            </form>

            {/* Links */}
            <div className="mt-8 text-center space-y-4 text-sm">
              <p className="text-emerald-200">
                Don't have an account?{' '}
                <Link to="/auth/register" className="text-emerald-400 font-bold hover:underline">
                  Create one now
                </Link>
              </p>
              <Link to="/auth/forgot-password" className="text-emerald-300 hover:text-white block">
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Footer nhỏ nhẹ */}
          <p className="text-center text-emerald-300 text-xs mt-8 opacity-70">
            © 2025 Trekker – Built with passion by Tuan Dat
          </p>
        </div>
      </div>
    </div>
  );
}