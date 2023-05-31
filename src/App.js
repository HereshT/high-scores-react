import React from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      {allCountryScores.map((countryData, index) => (
        <HighScoreTable key={index} countryData={countryData} />
      ))}
    </div>
  );
}

export default App;
