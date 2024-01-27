import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
    return (
        <header className="logo">
            <Link to="/" className="logo__link" aria-label="На главную"></Link>
        </header>
    );
}

export default Logo;
