import React, { useState } from 'react';

const HousePrice = ({ onHousePriceChange }) => {
    const [housePrice, setHousePrice] = useState('');

    const handleHousePriceChange = (e) => {
        setHousePrice(e.target.value);
    }

    const handleButtonClick = () => {
        onHousePriceChange(housePrice);
    }

    return (
        <div>
            Let's find out some info about your dream home.
            <p> How much will it cost?</p>
            <div className="input-container">
                <input type="number" value={housePrice} onChange={handleHousePriceChange} />
            </div>
            <div className="button-container">
                <button onClick={handleButtonClick}>Confirm</button>
            </div>
        </div>
    );
}

export default HousePrice;
