import { useState, useEffect } from 'react'
import Header from "./components/Header"
import CardList from './components/CardList';

// hook up the pokemon API to generate the unique cards

// add instructions for the game above the card grid


function App() {
// variables
const pokemonNumber = 12;

// state 
  const [scores, setScores] = useState({
    currentScore: 0,
    bestScore: 0
  });

  const [clickedCards, setClickedCards] = useState([]);

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= pokemonNumber; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => setDataArray(current => [...current, data]))
    }
  }, []);

  console.log(dataArray[0]);

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
        dataArray={dataArray}
      />
    </div>
  )
}

export default App
