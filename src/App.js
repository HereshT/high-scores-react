import React, { useState } from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
import "./App.css";

function App() {
  const [isAscending, setIsAscending] = useState(false);
  let allScores = [];

  allCountryScores.forEach((country) =>
    country.scores.forEach((player) =>
      allScores.push({ n: player.n, s: player.s, country: country.name })
    )
  );

  // Sort all scores
  allScores.sort((a, b) => (isAscending ? a.s - b.s : b.s - a.s));

  return (
    <div className="App">
      <button
        className="toggle-btn"
        onClick={() => setIsAscending(!isAscending)}
      >
        Toggle sort order
      </button>
      <div className="table-container">
        <div className="worldwide-container">
          <h1>Worldwide High Scores</h1>
          <HighScoreTable
            key="worldwide"
            countryData={{ name: "Worldwide", scores: allScores }}
            isAscending={isAscending}
          />
        </div>
        <div className="country-container">
          {allCountryScores.map((country, index) => (
            <HighScoreTable
              key={index}
              countryData={country}
              isAscending={isAscending}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
