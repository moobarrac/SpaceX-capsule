import React, { useState } from 'react';
import Space from "../assests/images/spacex.jpg";

const Banner = () => {
  const [scale, setScale] = useState(1);
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-80" 
      style={{ backgroundImage: `url(${Space})` }}
      onMouseEnter={() => setScale(1.20)}
      onMouseLeave={() => setScale(1)}
    >
      <div className="px-3 py-2 bg-black bg-opacity-80 text-white text-center rounded-lg animation-fade-in-up">
        <h1 className="text-white text-4xl font-medium" style={{ transform: `scale(${scale})`}}>SpaceX capsules</h1>
        <p className="text-sm">Explore the latest space missions!</p>
      </div>
    </div>
  )
}

export default Banner