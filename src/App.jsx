import { useState } from 'react'
import Header from "./components/Header"
import CardList from './components/CardList';

// add instructions for the game above the card grid

// hook up the pokemon API to generate the unique cards

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
      setClickedCards([]);
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

  return (
    <div className="App">
      <Header 
        scores={scores}
      />
      <div className='instructions'></div>
      <CardList 
        getCardId={getCardId}
        clickedCards={clickedCards}
      />
    </div>
  )
}

export default App
