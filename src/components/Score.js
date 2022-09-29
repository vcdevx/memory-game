import React, { useState } from "react";

export default function Scoreboard(props) {
  const { score, topScore } = props;

  return (
    <div className="scoreBoard">
      <h3>Score: {score}</h3>
      <h3>Top Score: {topScore}</h3>
    </div>
  );
}
