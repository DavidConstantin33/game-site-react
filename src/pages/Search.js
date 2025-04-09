import { useState } from "react";
import { games } from "../data/games";
import GameCard from "../components/GameCard";
import "./Search.css";

export default function Search() {
    const [query, setQuery] = useState("");

    const filteredGames = games.filter((game) => {
        const lowerQuery = query.toLowerCase();
        const matchTitle = game.title.toLowerCase().includes(lowerQuery);
        const matchTags = game.tags?.some((tag) =>
            tag.toLowerCase().includes(lowerQuery)
        );
        return matchTitle || matchTags;
    });

    return (
        <div className="search-page">
            <h1>Search game 🎮</h1>
            <input
                type="text"
                placeholder="Search by title or by tags..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />

            <div className="search-results">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))
                ) : (
                    <p className="no-results">No game found 😔</p>
                )}
            </div>
        </div>
    );
}