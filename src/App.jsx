import { useState, useEffect } from 'react'
import Header from "./components/Header"
import CardGrid from "./components/CardGrid"
import data from "./testData"

function App() {
// state 
  const [scores, setScores] = useState({
    currentScore: 0,
    bestScore: 0
  });

  const [clickedCards, setClickedCards] = useState([]);

// useEffect

// hardcoded card data
const { cardData } = data;

  return (
    <div className="App">
      <Header 
        scores={scores}
      />
      <CardGrid 
        cardData={cardData}
      />
    </div>
  )
}

export default App
