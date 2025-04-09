import { useParams } from "react-router-dom";
import { games } from "../data/games";
import GameCard from "../components/GameCard";
import "./CategoryPage.css";

export default function CategoryPage() {
    const { category } = useParams();
    const filteredGames = games.filter(
        (game) => Array.isArray(game.category)
            ? game.category.map(c => c.toLowerCase()).includes(category.toLowerCase())
            : game.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="category-page">
            <h1>Game Category: <span className="highlight">{category}</span></h1>

            <div className="game-grid">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))
                ) : (
                    <p className="no-results">No game found from this category. 😔</p>
                )}
            </div>
        </div>
    );
}