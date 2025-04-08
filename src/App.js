import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<GamePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
