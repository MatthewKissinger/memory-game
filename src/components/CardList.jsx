import { useState, useEffect } from 'react'
import uniqid from 'uniqid';
import Card from './Card'

export default function CardList(props) {
    // destructuring props
    const { dataArray, getCardId, clickedCards } = props;

    // State for shuffledArray
    const [shuffledCards, setShuffledCards] = useState(dataArray.sort((a, b) => 0.5 - Math.random()));

    useEffect(() => {
        
        setShuffledCards(
            dataArray.sort((a, b) => 0.5 - Math.random())
        );

    }, [clickedCards])

// map over data and display list items
    const cardList = shuffledCards.map(item => {
        return (
        <Card 
            key={item.id}
            id={item.id}
            name={item.name}
            sprite={item.sprites.front_default}
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