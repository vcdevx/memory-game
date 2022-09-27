import React, { useState } from "react";

export default function Scoreboard () {

    const [score, setScore] = useState(0)
    const [topScore, setTopScore] = useState(0)

    return(
        <div className="scoreBoard">
            <h3>Score:</h3><p>{score}</p>
            <h3>Top Score:</h3><p>{topScore}</p>
        </div>
    )
}