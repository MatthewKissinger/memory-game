import '../styles/card.css'

export default function Card(props) {

    // create another component named Card.jsx that has all of the cardData info

    const { id, text } = props;

    return (
        <div className="card-container"
            id={id}  
        >
            {text}
        </div>
    )
}