import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff5e6]">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-[#12c2ab] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            top: '20%',
            left: '10%',
            animation: 'blob 7s infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-[#057960] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          style={{
            top: '40%',
            right: '10%',
            animation: 'blob 7s infinite 2s'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-[#d5b48f] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
          style={{
            bottom: '20%',
            left: '30%',
            animation: 'blob 7s infinite 4s'
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#12c2ab] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Parallax cursor effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-[#057960] opacity-10 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-[#12c2ab] opacity-10 rounded-lg rotate-45" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          {/* 404 Number with animation */}
          <div className="relative mb-6">
            <h1 
              className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#057960] via-[#12c2ab] to-[#d5b48f] leading-none"
              style={{
                WebkitTextStroke: '2px rgba(5, 121, 96, 0.3)',
                textShadow: '0 10px 40px rgba(18, 194, 171, 0.3)'
              }}
            >
              404
            </h1>
            
            {/* Decorative elements around 404 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="w-20 h-20 border-4 border-[#12c2ab] rounded-full animate-ping opacity-20" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
              <div className="w-12 h-12 bg-[#d5b48f] rounded-lg rotate-45 animate-bounce opacity-30" />
            </div>
          </div>

          {/* Message */}
          <div className="mb-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#057960] animate-fade-in">
              Oops! Trang không tồn tại
            </h2>
            <p className="text-lg md:text-xl text-[#057960] opacity-70 max-w-xl mx-auto">
              Có vẻ như trang bạn đang tìm kiếm đã bị lạc hoặc không còn tồn tại nữa
            </p>
          </div>

          {/* Illustration */}
          

          {/* Button */}
          <button
            onClick={handleGoHome}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#057960] to-[#12c2ab] rounded-2xl text-[#fff5e6] text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              boxShadow: isHovering ? '0 20px 60px rgba(18, 194, 171, 0.4)' : '0 10px 30px rgba(18, 194, 171, 0.2)'
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#12c2ab] to-[#057960] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <ArrowLeft 
                size={20}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Quay về trang chủ
            </span>
          </button>

          {/* Additional info */}
          <p className="mt-6 text-[#057960] opacity-50 text-sm">
            Hoặc bạn có thể liên hệ với chúng tôi nếu cần hỗ trợ
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;