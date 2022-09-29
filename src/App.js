import './App.css';
import Cards from './components/Cards'
import Score from './components/Score'
import Header from './components/Header'
import React, { useState } from 'react'

function App(props) {

  const [score, setScore] = useState(0);
  const [topScore, setTopScore ] = useState(0);

  return (
    <div className="App">
      <Header />
      <Score score={score} setScore={setScore} topScore={topScore} setTopScore={setTopScore}/>
      <Cards score={score} setScore={setScore} topScore={topScore} setTopScore={setTopScore}/>
    </div>
  );
}

export default App;
