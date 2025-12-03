// src/pages/auth/Register.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mountain, Mail, Lock, User, Calendar, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../services/authApi';

// Dùng type từ enum của bạn luôn cho chuẩn
import type { AccountGenderEnum } from '../../types/enums/AccountGenderEnum';

const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Full name is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),

  // Cách đúng 100% cho mọi phiên bản Zod
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'] as const).refine((val) => val !== undefined, {
    message: 'Please select your gender',
  }),

  dateOfBirth: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setErrorMessage('');
    try {
      await register({
        username: data.username,
        email: data.email,
        name: data.name,
        password: data.password,
        gender: data.gender as AccountGenderEnum, // ép kiểu cho chắc
        dateOfBirth: data.dateOfBirth || undefined,
      }).unwrap();

      navigate('/auth/register-success');
    } catch (err: any) {
      setErrorMessage(err?.data?.message || 'Registration failed. Please try again.');
    }
  };

  // ... phần return giữ nguyên đẹp như cũ
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Mountain size={20} /> Create account
            </h2>

            {errorMessage ? (
                <div className="mb-4 text-sm text-red-600">{errorMessage}</div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <input
                            {...formRegister('username')}
                            className="flex-1 p-2 border rounded"
                            placeholder="username"
                            aria-invalid={!!errors.username}
                        />
                    </div>
                    {errors.username && <p className="text-xs text-red-600 mt-1">{errors.username.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <input
                            {...formRegister('email')}
                            className="flex-1 p-2 border rounded"
                            placeholder="you@example.com"
                            type="email"
                            aria-invalid={!!errors.email}
                        />
                    </div>
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Full name</label>
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <input
                            {...formRegister('name')}
                            className="flex-1 p-2 border rounded"
                            placeholder="Full name"
                            aria-invalid={!!errors.name}
                        />
                    </div>
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="flex items-center gap-2">
                        <Lock size={16} />
                        <input
                            {...formRegister('password')}
                            className="flex-1 p-2 border rounded"
                            type="password"
                            placeholder="••••••••"
                            aria-invalid={!!errors.password}
                        />
                    </div>
                    {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Confirm password</label>
                    <div className="flex items-center gap-2">
                        <Lock size={16} />
                        <input
                            {...formRegister('confirmPassword')}
                            className="flex-1 p-2 border rounded"
                            type="password"
                            placeholder="Confirm password"
                            aria-invalid={!!errors.confirmPassword}
                        />
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Gender</label>
                    <select
                        {...formRegister('gender')}
                        className="w-full p-2 border rounded"
                        aria-invalid={!!errors.gender}
                    >
                        <option value="">Select gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                    </select>
                    {errors.gender && <p className="text-xs text-red-600 mt-1">{errors.gender.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Date of birth</label>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <input
                            {...formRegister('dateOfBirth')}
                            type="date"
                            className="flex-1 p-2 border rounded"
                            aria-invalid={!!errors.dateOfBirth}
                        />
                    </div>
                    {errors.dateOfBirth && (
                        <p className="text-xs text-red-600 mt-1">{errors.dateOfBirth.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 p-2 bg-blue-600 text-white rounded disabled:opacity-60"
                >
                    {isLoading ? <Loader2 className="animate-spin" size={16} /> : null}
                    <span>{isLoading ? 'Registering...' : 'Create account'}</span>
                </button>
            </form>

            <p className="text-sm text-center mt-4">
                Already have an account? <Link to="/auth/login" className="text-blue-600">Sign in</Link>
            </p>
        </div>
    </div>
);
}