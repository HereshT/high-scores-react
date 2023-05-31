import React from "react";
import "./PlayerScore.css";

const PlayerScore = ({ name, score }) => {
  return (
    <tr className="player-score">
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default PlayerScore;
