import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NameInputBox = ({ onNameChange }) => {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleButtonClick = () => {
    onNameChange(playerName);
    navigate('/AgeInput');
  };

  return (
    <div className="container">
      <h2>What's your name?</h2>
      <div className="input-container">
        <input type="text" value={playerName} onChange={handlePlayerNameChange} placeholder="Your Name" />
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={handleButtonClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default NameInputBox;
