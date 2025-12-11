// File: src/pages/ProfilePage.tsx
import { Camera } from 'lucide-react';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    // THÊM: 'bg-red-500' để debug. Nếu thấy đỏ full màn hình là thành công!
    <div className="w-full animate-fade-in  p-2"> 
      
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-white rounded-lg">
             <Camera className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-emerald-700">
          Profile
        </h2>
      </div>

      <p className="text-gray-200 mb-8 lg:text-left font-medium">
        Hello, Trekker (Debug Mode)
      </p>

      {/* Card Info - w-full để tràn viền */}
      <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden w-full">
        
        {/* Avatar Section */}
        <div className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-28 h-28 lg:w-36 lg:h-36 bg-emerald-100 rounded-full flex items-center justify-center text-5xl lg:text-6xl font-bold text-emerald-600 shadow-lg shrink-0">
              T
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Tuan Dat</h3>
              <p className="text-lg text-emerald-600 font-semibold mt-1">Explorer Level 1</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mx-6 lg:mx-8"></div>

        {/* Details Section */}
        <div className="p-6 lg:p-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Email
            </label>
            <div className="p-3 bg-gray-50 rounded-xl text-gray-800 font-medium text-base border border-gray-200">
              tuandat@example.com
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Bio
            </label>
            <div className="p-4 bg-emerald-50 rounded-xl text-gray-700 leading-relaxed border border-emerald-200 italic">
              "Lover of mountains and coffee."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;