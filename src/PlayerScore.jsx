import React from "react";
import "./PlayerScore.css";

const PlayerScore = ({ name, score, country }) => {
  return (
    <tr className="player-score">
      <td>{name}</td>
      <td>{score}</td>
      {country && <td>{country}</td>}
    </tr>
  );
};

export default PlayerScore;
