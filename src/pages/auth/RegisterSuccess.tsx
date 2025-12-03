// src/pages/auth/RegisterSuccess.tsx
import { Mountain, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8">
          <Mail className="w-12 h-12 text-green-400" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Check Your Email!</h1>
        <p className="text-xl text-emerald-200 mb-8">
          We've sent a verification link to your email address.
          Please click the link to activate your Trekker account.
        </p>
        <Link
          to="/auth/login"
          className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-bold text-lg shadow-xl"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}