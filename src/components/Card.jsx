import '../styles/card.css'

export default function Card(props) {

    const { id, name, sprite, handleClick } = props;

    return (
        <div className="card-container"
            onClick={handleClick}
            id={id}  
        >
            <img className="pokemon-image" src={sprite}></img>
            <p className='pokemon-name'>{name}</p>
        </div>
    )
}