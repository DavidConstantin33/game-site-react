import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo" id="title">
                <Link to="/">KidsGames</Link>
            </div>
            <nav className="nav-links">
                <Link to="/search">Search</Link>
                <Link to="/categories/popular">Popular</Link>
                <Link to="/categories/adventure">Adventure</Link>
                <Link to="/categories/action">Action</Link>
                <Link to="/categories/puzzle">Puzzle</Link>
                <Link to="/categories/educational">Educative</Link>
                <Link to="/categories/cars">Cars</Link>
            </nav>
        </header>
    );
}