import '../styles/card.css'

export default function Card(props) {

    const { id, text, handleClick } = props;

    return (
        <div className="card-container"
            onClick={handleClick}
            id={id}  
        >
            {text}
        </div>
    )
}