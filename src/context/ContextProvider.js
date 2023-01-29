import React, { useState } from 'react';
import axios from "axios"

const SpaceContext = React.createContext();

const SpaceProvider = ({children}) => {
  const [filters, setFilters] = useState({status: '', date: '', type: ''})
  const [capsules, setCapsules] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const limit = 10;
  const BASE_URL = "https://api.spacexdata.com/v3/capsules";

  const fetchData = (limit=10, offset=0) => {
    axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}&status=${filters.status}&original_launch=${filters.date}&type=${filters.type}`)
      .then(response => {
        setCapsules(response.data);
        setTotalItem(response.headers["spacex-api-count"])
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  const handleSubmit = () => {
    fetchData()
  }

  return (
    <SpaceContext.Provider value={{filters, setFilters, capsules, handleSubmit, offset, totalItem, limit}}>
      {children}
    </SpaceContext.Provider>
  );
}

export { SpaceContext, SpaceProvider };