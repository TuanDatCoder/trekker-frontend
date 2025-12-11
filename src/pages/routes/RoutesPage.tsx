import React from 'react';
import { MapPin } from 'lucide-react';

const RoutesPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1  w-full py-6"> {/* Added flex-1 + py-6 */}
        <h2 className="text-4xl font-bold text-emerald-700 mb-10 text-center">
          Trekking Routes Map
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-emerald-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Amazing Route #{item}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  A wonderful journey through nature with breathtaking views and challenging trails.
                </p>
                <button className="w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;