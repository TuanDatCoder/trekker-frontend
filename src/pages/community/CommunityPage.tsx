import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* SỬA: Đã xóa 'max-w-4xl' và 'mx-auto', thay bằng 'w-full' */}
      <div className="flex-1 animate-fade-in w-full py-6"> 
        
        <h2 className="text-4xl font-bold text-emerald-700 mb-10 text-center">
          Trekker Community
        </h2>

        <div className="space-y-6 w-full">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl shrink-0">
                  U{item}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">User {item}</h4>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Just finished an amazing hike this weekend! The weather was perfect and the views were absolutely stunning. Highly recommend this trail to everyone. #trekking #nature
              </p>

              <div className="flex items-center gap-8 text-gray-600">
                <button className="flex items-center gap-2 hover:text-red-500 transition-colors font-medium">
                  <Heart className="w-5 h-5" /> <span>24 Likes</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors font-medium">
                  <MessageSquare className="w-5 h-5" /> <span>5 Comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;