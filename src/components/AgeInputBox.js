import React, { useState } from 'react';

const AgeInputBox = ({ playerName, onAgeChange }) => {
  const [playerAge, setPlayerAge] = useState(0);
  const [showPlayerAge, setShowPlayerAge] = useState(false);

  const handlePlayerAgeChange = (e) => {
    setPlayerAge(e.target.value);
  };

  const handleButtonClick = () => {
    onAgeChange(playerAge);
    setShowPlayerAge(true);
  };

  return (
    <div className="container">
      {!showPlayerAge && (
        <div>
          <h2>Hello, {playerName}</h2>
          <h3>What's your age?</h3>
          <div className="input-container">
            <input
              type="number"
              value={playerAge}
              onChange={handlePlayerAgeChange}
              placeholder="Your Age"
            />
          </div>
          <div className="button-container">
            <button className="styled-button" onClick={handleButtonClick}>
              Continue
            </button>
          </div>
        </div>
      )}
      {/* {showPlayerAge && (
        <div>
          <h2>Your name is {playerName}</h2>
          <h2>Your age is {playerAge}</h2>
          <div className="button-container">
            <button className="styled-button">Continue</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AgeInputBox;
