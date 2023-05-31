import React from "react";
import PlayerScore from "./PlayerScore";
import "./HighScoreTable.css";

const HighScoreTable = ({ countryData }) => {
  // Level 3
  // sort the scores in descending order
  const sortedScores = [...countryData.scores].sort((a, b) => b.s - a.s);

  return (
    <div className="high-score-table">
      <h2>{countryData.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((player, index) => (
            <PlayerScore key={index} name={player.n} score={player.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
