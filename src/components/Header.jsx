import '../styles/header.css'

export default function Header(props) {

    const { currentScore, bestScore } = props.scores

    return (
        <header>       
            <div className="header-left">
                <h1>MEMORY GAME</h1>
            </div>
            <div className="header-right">
                <h4 className="currentScore">Score: {currentScore}</h4>
                <h4 className="bestScore"> Best score: {bestScore}</h4>
            </div>      
        </header>
    )
}