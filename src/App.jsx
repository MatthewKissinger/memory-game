import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./testData"

// create a grid in CardGrid and display the info

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

// map over data and display list items
const cardList = cardData.map(item => {
  return (
    <Card 
      key={item.id}
      id={item.id}
      text={item.text}
    />
  )
})

  return (
    <div className="App">
      <Header 
        scores={scores}
      />
      <div className='instructions'></div>
      <div className='card-grid'>
        {cardList}
      </div>
    </div>
  )
}

export default App
