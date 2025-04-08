import { Link } from "react-router-dom";
import "./GameCard.css";

export default function GameCard({ game }) {
    return (
        <div className="game-card">
            <Link to={`/game/${game.id}`}>
                <img src={game.thumb} alt={game.title} />
                <h3>{game.title}</h3>
            </Link>
        </div>
    );
}