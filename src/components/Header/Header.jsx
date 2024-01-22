import { useLocation } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
    const pagesHeader = ["/", "/movies", "/saved-movies", "/profile"];

    if (!pagesHeader.includes(location.pathname)) {
        return null;
    }

    return (
        <header className="header">
            <Navigation></Navigation>
        </header>
    );
}

export default Header;
