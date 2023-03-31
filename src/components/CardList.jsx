import { useState, useEffect } from 'react'
import Card from './Card'
import data from "../testData"

export default function CardList(props) {
    const { cardData } = data;

    // State for shuffledArray
    const [shuffledCards, setShuffledCards] = useState(cardData.sort((a, b) => 0.5 - Math.random()));

    // destructuring props
    const { getCardId, clickedCards } = props;

    useEffect(() => {
        
        setShuffledCards(
            cardData.sort((a, b) => 0.5 - Math.random())
        );

    }, [clickedCards])

// map over data and display list items
    const cardList = shuffledCards.map(item => {
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
        <div className='card-grid'>
            {cardList}
        </div>
    )
}