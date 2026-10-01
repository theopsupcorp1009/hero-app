import React from 'react';

const AllAppsLoading = () => {
  return (
    <div className="bg-[#f8f9fc] py-16 px-4 min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section Skeleton */}
        <div className="text-center mb-10 flex flex-col items-center">
          {/* Main Title Skeleton */}
          <div className="h-9 w-64 md:w-80 bg-gray-300 rounded-lg mb-3"></div>
          {/* Subtitle Skeleton */}
          <div className="h-4 w-full max-w-md bg-gray-200 rounded"></div>
        </div>

        {/* Filter Bar Skeleton: App Count & Search Input */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Apps Count Skeleton */}
          <div className="h-7 w-36 bg-gray-300 rounded"></div>

          {/* Search Input Skeleton */}
          <div className="w-full sm:w-72 h-10 bg-gray-200 rounded-lg border border-gray-200"></div>
        </div>

        {/* Applications Skeleton Grid (4 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-12">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              {/* App Image Skeleton */}
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-3"></div>

              {/* App Title Skeleton */}
              <div className="h-5 w-3/4 bg-gray-300 rounded mb-4"></div>

              {/* Badges Footer Skeleton */}
              <div className="flex items-center justify-between pt-1">
                {/* Download Badge Placeholder */}
                <div className="h-6 w-16 bg-gray-200 rounded"></div>

                {/* Rating Badge Placeholder */}
                <div className="h-6 w-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllAppsLoading;