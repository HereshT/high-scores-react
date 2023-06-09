import React from "react";
import PlayerScore from "./PlayerScore";
import "./HighScoreTable.css";

const HighScoreTable = ({ countryData, isAscending }) => {
  // sort the scores based on isAscending
  const sortedScores = [...countryData.scores].sort((a, b) =>
    isAscending ? a.s - b.s : b.s - a.s
  );

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
