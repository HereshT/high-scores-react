import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ countryData }) => {
  return (
    <div>
      <h1>{countryData.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {countryData.scores.map((player, index) => (
            <PlayerScore key={index} name={player.n} score={player.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
