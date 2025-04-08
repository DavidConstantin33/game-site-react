import { games } from "../data/games";
import GameCard from "../components/GameCard";
import "./Home.css";

export default function Home() {
    return (
        <main className="home">
            <h1>Top Games</h1>
            <div className="game-grid">
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </main>
    );
}