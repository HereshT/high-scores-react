import React from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";

import "./App.css";

function App() {
  // Level 2
  // sort the country scores alphabetically by country name
  allCountryScores.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="App">
      {allCountryScores.map((countryData, index) => (
        <HighScoreTable key={index} countryData={countryData} />
      ))}
    </div>
  );
}

export default App;
