import React from "react";

const GlobalLoading = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc] p-6 space-y-8 animate-pulse max-w-7xl mx-auto">
      
      {/* Header Skeleton */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-200">
        <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
        <div className="hidden sm:flex space-x-6">
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="h-9 w-28 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Hero / Banner Skeleton */}
      <div className="flex flex-col items-center text-center space-y-4 py-8 max-w-3xl mx-auto">
        <div className="h-10 w-3/4 bg-gray-300 rounded-lg"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        <div className="flex space-x-4 pt-4">
          <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
          <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
        </div>
      </div>

      {/* App Grid Skeleton Header */}
      <div className="flex justify-between items-center pt-6">
        <div className="h-6 w-36 bg-gray-300 rounded"></div>
        <div className="h-9 w-64 bg-gray-200 rounded-lg"></div>
      </div>

      {/* App Cards Skeleton Grid (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-xl border border-gray-100 space-y-3 shadow-sm"
          >
            {/* App Image Skeleton */}
            <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
            
            {/* App Title Skeleton */}
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            
            {/* Badges Skeleton */}
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 w-14 bg-gray-200 rounded"></div>
              <div className="h-6 w-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GlobalLoading;
