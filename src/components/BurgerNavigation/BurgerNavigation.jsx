import { NavLink } from "react-router-dom";
import "./BurgerNavigation.css";

function BurgerMenu() {
    return (
        <div className="burger-menu">
            <button className="burger-menu__close-button" type="button"></button>
            <div className="burger-menu__block">
                <NavLink to="/" className="navigation__nav-link burger-menu__link">
                    Главная
                </NavLink>
                <NavLink to="/movies" className="navigation__nav-link burger-menu__link">
                    Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className="navigation__nav-link burger-menu__link">
                    Сохранённые фильмы
                </NavLink>
                <div className="navigation__signin navigation__link_account burger__account">
                    <NavLink activeClassName="burger-menu__basic-link" to="/profile" className="navigation__link_account">
                        Аккаунт
                    </NavLink>
                    <p className="navigation__picture-account"></p>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
