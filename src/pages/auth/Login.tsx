import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Loader2, LogIn } from 'lucide-react';
import { useLoginMutation } from '../../services/authApi';
import { Link, useNavigate } from 'react-router-dom';

// 👉 IMPORT LOGO
import LogoTrekker from '../../assets/logo/LogoTrekker.png';

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
    <div className="fixed inset-0 overflow-hidden bg-[#1C1C1E]">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#2E8B57_0%,#4A90E2_40%,#F4C95D_75%,#F7A8A0_100%)] opacity-40"></div>

      {/* Blurred circles */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-[#2E8B57] rounded-full blur-[130px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#4A90E2] rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-[22rem] h-[22rem] bg-[#F4C95D] rounded-full blur-[160px] opacity-20"></div>

      {/* --- LOGO TOP-LEFT --- */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl shadow-xl ring-4 ring-[#2E8B57]/40 bg-white/10 backdrop-blur-md overflow-hidden flex items-center justify-center">
          <img
            src={LogoTrekker}
            alt="Trekker Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-white text-xl font-semibold tracking-wide">Trekker</p>
      </div>

      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center px-4 pt-12 pb-8">
        <div className="w-full max-w-md -mt-10">

          <h2 className="text-center text-4xl font-extrabold text-white tracking-wide drop-shadow-md mb-10">
            Welcome Back
          </h2>

          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* IDENTIFIER */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email or Username
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-[#4A90E2]" />
                  <input
                    {...register('identifier')}
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/30 transition-all"
                    placeholder="Enter your email or username"
                  />
                </div>
                {errors.identifier && (
                  <p className="mt-2 text-red-300 text-sm">{errors.identifier.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-[#4A90E2]" />
                  <input
                    {...register('password')}
                    type="password"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/30 transition-all"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-red-300 text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* ERROR */}
              {errorMessage && (
                <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-200 text-center text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-[#2E8B57] to-[#4A90E2] hover:from-[#2E8B57]/90 hover:to-[#4A90E2]/90 text-white font-bold text-lg rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-6 h-6" /> Sign In
                  </>
                )}
              </button>
            </form>

            {/* LINKS */}
            <div className="mt-8 text-center space-y-4 text-sm">
              <p className="text-white/70">
                Don't have an account?{' '}
                <Link to="/auth/register" className="text-[#F4C95D] font-bold hover:underline">
                  Create one now
                </Link>
              </p>

              <Link
                to="/auth/forgot-password"
                className="text-white/60 hover:text-white transition"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <p className="text-center text-white/50 text-xs mt-8">
            © 2025 Trekker — Built with passion by Tuan Dat
          </p>
        </div>
      </div>
    </div>
  );
}
