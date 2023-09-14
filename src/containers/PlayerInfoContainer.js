import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NameInputBox from '../components/NameInputBox';

const PlayerInfoContainer = ({ onNameChange }) => {
  const [showPlayerName, setShowPlayerName] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          {!showPlayerName && (
            <Route
              element={<NameInputBox onNameChange={onNameChange} />}
              path="/"
            />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default PlayerInfoContainer;
