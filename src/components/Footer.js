import { Link } from "react-router-dom";
import './Footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 KidsGames. All rights reserved.</p>
            <nav className="footer-links">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/terms">Terms</Link>
            </nav>
        </footer>
    );
}