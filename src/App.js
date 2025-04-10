import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<GamePage />} />
                <Route path="/categories/:category" element={<CategoryPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
