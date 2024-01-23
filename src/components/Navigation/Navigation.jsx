import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import BurgerNavigation from "../BurgerNavigation/BurgerNavigation";
import "../BurgerNavigation/BurgerNavigation.css"

function Navigation() {
    const classNameLink = ({ isActive }) => `navigation__nav-link ${isActive ? "navigation__nav-link_basic" : ""} basic-el`;
    function showBurger(){
        document.querySelector(".navigation__burger-menu-hidden").style.display = "block";
        
        };
        
       
    return (
      
        <div className="navigation">
            
            <div className="navigation__nav">
          
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
           
            <div className="navigation__burger-menu-button" onClick={showBurger}></div>
            <div className="navigation__burger-menu-hidden">
                <BurgerNavigation></BurgerNavigation>
            </div>
            
        </div>
    );
}

export default Navigation;