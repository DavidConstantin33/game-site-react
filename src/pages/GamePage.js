import GameCard from "../components/GameCard";
import "./GamePage.css";
import { useParams } from "react-router-dom";
import { games } from "../data/games";

export default function GamePage() {
    const { id } = useParams();
    const game = games.find((g) => g.id === id);

    let recommendedGames = games
        .filter((g) => g.id !== game.id)
        .filter((g) => g.tags?.some((tag) => game.tags?.includes(tag)))
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    if (recommendedGames.length === 0) {
        recommendedGames = games
            .filter((g) => g.id !== game.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }

    if (!game) {
        return <div style={{ padding: "2rem" }}>⚠️ Jocul nu a fost găsit.</div>;
    }

    return (
        <div className="game-page">
            <h1>{game.title}</h1>

            <iframe
                src={game.url}
                className="game-iframe"
                allowFullScreen
                title={game.title}
            />

            <div className="game-section">
                <h2>Description</h2>
                <p className="game-description">{game.description}</p>
            </div>

            {Array.isArray(game.tags) && game.tags.length > 0 && (
                <div className="game-section">
                    <h3>Tags</h3>
                    <div className="game-tags">
                        {game.tags.map((tag, i) => (
                            <span key={i} className="game-tag">#{tag}</span>
                        ))}
                    </div>
                </div>
            )}

            {game.controls && (
                <div className="game-section">
                    <h3>Controls</h3>
                    <div className="game-controls">
                        {game.controls}
                    </div>
                </div>
            )}

            {recommendedGames.length > 0 && (
                <div className="game-section">
                    <h3>Jocuri recomandate</h3>
                    <div className="game-recommendations">
                        {recommendedGames.map((recGame) => (
                            <GameCard key={recGame.id} game={recGame} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}