import React, { useState } from 'react';
import './App.css';
import PlayerInfoContainer from './containers/PlayerInfoContainer';
import HouseContainer from './containers/HouseContainer';
import AgeInputBox from './components/AgeInputBox'; // Import AgeInputBox


function App() {
  const [showPlayerName, setShowPlayerName] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState(0);

  const handlePlayerNameChange = (name) => {
    setPlayerName(name);
    setShowPlayerName(true);
  }

  const handlePlayerAgeChange = (age) => {
    setPlayerAge(age);
  }

  return (
    <div>
      {!showPlayerName && (
        <PlayerInfoContainer onNameChange={handlePlayerNameChange} />
      )}
      {showPlayerName && !playerAge && (
        <AgeInputBox playerName={playerName} onAgeChange={handlePlayerAgeChange} />
      )}
      {showPlayerName && playerAge > 0 && (
        <HouseContainer playerName={playerName} playerAge={playerAge} />
      )}
    </div>
  );
}

export default App;
