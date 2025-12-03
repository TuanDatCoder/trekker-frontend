// src/pages/HomePage.tsx
import { Mountain, MapPin, Users, Calendar, ArrowRight, Smartphone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-gray-800 overflow-x-hidden">
      {/* ===== Navbar ===== */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Mountain className="w-10 h-10 text-emerald-600" />
          <span className="text-3xl font-bold text-emerald-800">Trekker</span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/auth/login"
            className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-emerald-900 leading-tight">
              Conquer Every Trail
              <span className="block text-emerald-600">With Confidence</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
              Plan your next adventure, connect with fellow trekkers, and explore the world's most breathtaking routes — all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                to="/auth/register"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white text-lg font-bold rounded-full hover:bg-emerald-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/routes"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-emerald-600 text-emerald-600 text-lg font-bold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <MapPin className="w-6 h-6" />
                Explore Routes
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-inner text-center">
                <Mountain className="w-32 h-32 mx-auto text-emerald-600" />
                <p className="text-2xl font-bold text-emerald-800 mt-6">
                  Ready for the Adventure?
                </p>
                <p className="text-emerald-600 mt-2">Your journey starts here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 bg-white/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Why Choose Trekker?</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need for the perfect trek</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Discover Routes</h3>
              <p className="text-gray-600">Thousands of verified trekking trails from easy walks to extreme expeditions.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-teal-100">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Community</h3>
              <p className="text-gray-600">Connect with passionate trekkers, share stories, and find hiking buddies.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Plan Perfectly</h3>
              <p className="text-gray-600">Weather forecast, gear checklist, offline maps — everything in one app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mobile App Section – ĐÃ FIX, KHÔNG CẦN ẢNH QR NỮA ===== */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Take Trekker With You
                <span className="block text-emerald-200">Anywhere, Anytime</span>
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-lg">
                Our mobile app is coming soon! Track routes offline, get real-time weather, and stay safe on every adventure.
              </p>

              {/* Nút giả lập tải app – đẹp hơn cả QR code! */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group flex items-center gap-4 bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  <Smartphone className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Download for</p>
                    <p className="font-bold text-xl">Android</p>
                  </div>
                  <Download className="w-6 h-6 ml-auto group-hover:translate-y-1 transition" />
                </button>

                <button className="group flex items-center gap-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300">
                  <Smartphone className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Coming soon</p>
                    <p className="font-bold text-xl">iOS</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Phone mockup đẹp */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="bg-black rounded-3xl p-4 shadow-2xl">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 w-80 h-96 flex flex-col items-center justify-center text-center">
                    <Mountain className="w-24 h-24 text-white mb-6" />
                    <p className="text-3xl font-bold text-white">Trekker</p>
                    <p className="text-emerald-200 mt-2">Mobile App</p>
                    <div className="mt-8 flex gap-3">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mountain className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">Trekker</span>
          </div>
          <p className="mb-6">© {new Date().getFullYear()} Trekker. Built with passion by Tuan Dat</p>
          <div className="flex justify-center gap-8 text-sm">
            <Link to="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-400 transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}