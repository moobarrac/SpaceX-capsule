import React, { useContext } from 'react';
import { SpaceContext } from '../context/ContextProvider';

const Pagination = () => {
  const { offset, totalItem, limit, loadMore } = useContext(SpaceContext);

  return (
    <div className="bg-black container mx-auto py-8 text-white">
      <div className="flex justify-center gap-2">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${(offset === 0) && "cursor-not-allowed opacity-50"}`}
          onClick={() => loadMore('prev')}
        >
          Previous
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${(offset + limit > totalItem) && "cursor-not-allowed opacity-50"}`}
          onClick={() => loadMore('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
