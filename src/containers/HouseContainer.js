import React, { useState } from 'react';
import HousePrice from '../components/HousePrice';

const HouseContainer = ({ playerName, playerAge }) => {
  const [housePrice, setHousePrice] = useState(0);

  const handleHousePriceChange = (price) => {
    setHousePrice(price);
  };

  return (
    <div className="container">
      <h2>Okay, {playerName}</h2>
      <HousePrice onHousePriceChange={handleHousePriceChange} />
      <div className="input-container">
        {/* <p>Your Dream Home Price: £{housePrice}</p> */}
      </div>
    </div>
  );
};

export default HouseContainer;
