import { NavLink } from "react-router-dom";
import "./BurgerNavigation.css";

function BurgerNavigation() {

    function hideBurger(){
        document.querySelector(".navigation__burger-menu-hidden").style.display = "none";
        
        }

    return (
        <div className="burger-nav">
      <button
        className="burger-nav__close-button"
        type="button"
        onClick={hideBurger}
      ></button>
      <div className="burger-nav__block">
        <NavLink
          exact
          to="/"
          className="navigation__nav-link burger-nav__link"   
        >
          Главная
        </NavLink>
        <NavLink
          exact
          to="/movies"
          className="navigation__nav-link burger-nav__link"
        >
          Фильмы
        </NavLink>
        <NavLink          
          exact
          to="/saved-movies"
          className="burger-nav__link"        
        >
          Сохранённые фильмы
        </NavLink>
        <div className="burger-nav__account">
          <NavLink            
            exact
            to="/profile"
            className="navigation__account-link"        
          >
            Аккаунт
          </NavLink>          
        </div>
      </div>
    </div>
    );
}

export default BurgerNavigation;
