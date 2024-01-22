import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onClickBurger }) {
    const classNameLink = ({ isActive }) => `navigation__nav-link ${isActive ? "navigation__nav-link_basic" : ""} basic-el`;

    return (
        <div className="navigation">
            <Link to="/" className="navigation__logo" aria-label="На главную"></Link>
            <div className="navigation__nav">
                <nav className="navigation__nav-links navigation__signout">
                    <Link to="/signin" className="navigation__nav-link">
                        Регистрация
                    </Link>
                    <Link to="/signup" className="navigation__nav-link navigation__nav-link_signin">
                        Войти
                    </Link>
                </nav>

                <nav className="navigation__nav-links navigation__signin">
                    <ul className="navigation__nav-links_list">
                        <li>
                            <NavLink to="/movies" className={classNameLink}>
                                Фильмы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved-movies" className={classNameLink}>
                                Сохранённые фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Link to="/profile" className="navigation__nav-link navigation__signin navigation__link_account">
                    Аккаунт
                </Link>
            </div>
            <div className="navigation__burger-menu-button" onClick={onClickBurger}></div>
        </div>
    );
}

export default Navigation;
