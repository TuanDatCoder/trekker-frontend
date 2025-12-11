import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    // SỬA: Thêm 'w-full' để đảm bảo container chiếm hết chiều ngang
    <div className="w-full h-full flex flex-col">
      
      <div className="flex-1 w-full animate-fade-in py-6">
        <h1 className="text-5xl font-bold text-emerald-600 mb-4">
          Welcome to Trekker Dashboard!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Chinh phục mọi cung đường – Bắt đầu từ đây
        </p>

        {/* SỬA: Thêm 'w-full' cho Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-emerald-800">Total Distance</h3>
            <p className="text-4xl font-bold text-emerald-600 mt-3">0 km</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-emerald-800">Routes Completed</h3>
            <p className="text-4xl font-bold text-emerald-600 mt-3">0</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-emerald-800">Next Adventure</h3>
            <p className="text-lg text-gray-500 mt-3">Not planned yet</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;