import React from 'react';

const Pagination = () => {
  return (
    <div className="bg-black container mx-auto py-8 text-white">
      <div className="flex justify-center gap-2">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
        >
          Previous
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
