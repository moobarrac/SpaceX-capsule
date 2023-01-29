import React, { useContext } from "react";
import { SpaceContext } from "../context/ContextProvider";

const SearchFilters = () => {
  const {filters, setFilters} = useContext(SpaceContext)

  return (
    <div className="p-4 flex flex-wrap gap-2 mt-4 mb-8 justify-center" data-testid="search">
      <div className="mb-2">
        <select 
          className="bg-white border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-tight focus:outline-none focus:bg-white"
          name="status"
          placeholder="Select status"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="destroyed">Destroyed</option>
          <option value="unknown">Unknown</option>
          <option value="retired">Retired</option>
        </select>
      </div>
      <div className="mb-2">
        <input 
          className="bg-white border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-tight focus:outline-none focus:bg-white"
          type="date"
          name="date"
          data-testid="date-input"
        />
      </div>
      <div className="mb-2">
        <input 
          className="bg-white border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Input type"
          name="type"
          data-testid="type-input"
        />
      </div>
      <button
        className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
        data-testid="search-button"
      >
        Search
      </button>
    </div>
  );
}

export default SearchFilters;
