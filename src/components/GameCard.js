import { Link } from "react-router-dom";
import "./GameCard.css";

export default function GameCard({ game }) {
    const isPopular = Array.isArray(game.category)
        ? game.category.includes("popular")
        : game.category === "popular";

    return (
        <div className="game-card">
            <Link to={`/game/${game.id}`}>
                <img src={game.thumb} alt={game.title} className="game-card-image" />
                <h3 className="game-card-title">{game.title}</h3>

                {isPopular && <span className="popular-badge">🔥 Popular</span>}

                <em className="game-categories">
                    {Array.isArray(game.category)
                        ? game.category.filter(c => c !== "popular").join(" ")
                        : game.category}
                </em>
            </Link>
        </div>
    );
}