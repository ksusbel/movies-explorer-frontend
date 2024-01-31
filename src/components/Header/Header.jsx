import { Link } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
    return (
        <header className="header">
            <Link to="/" className="header__logo" aria-label="На главную"></Link>
            {!loggedIn && (
                <nav className="header__nav-links">
                    <Link to="/signup" className="header__nav-link">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__nav-link header__nav-link_signin">
                        Войти
                    </Link>
                </nav>
            )}
            {loggedIn && <Navigation></Navigation>}
        </header>
    );
}

export default Header;
