import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./testData"

// add in some game instructions above the card-grid container

// after clicking a card, randomize the cardData array and re-render the cards on the page

function App() {
// state 
  const [scores, setScores] = useState({
    currentScore: 0,
    bestScore: 0
  });

  const [clickedCards, setClickedCards] = useState([]);

  console.log(clickedCards);

// Methods
  function getCardId(e) {
    const id = e.target.id;

    checkClickedArray(id);
  } 

  function checkClickedArray(id) {
    const checkedValue = clickedCards.find(item => parseInt(item) === parseInt(id));

    if (checkedValue !== undefined) {
      console.log('you already clicked this card')
      setScores({
        ...scores,
        currentScore: 0
      })
    } else {
      setClickedCards([...clickedCards, id]);
      setScores({
        currentScore: scores.currentScore + 1,
        bestScore: scores.currentScore + 1 > scores.bestScore ? scores.currentScore + 1 : scores.bestScore
      })
    }
  }

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
        handleClick={getCardId}
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
