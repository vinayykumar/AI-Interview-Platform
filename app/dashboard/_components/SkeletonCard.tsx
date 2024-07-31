import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="animate-pulse p-4 border border-gray-200 rounded shadow">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className='flex gap-5 mt-4'>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
