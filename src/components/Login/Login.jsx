import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Register/Register.css";
import "./Login.css";

function Login() {
    return (
        <main className="register">
            <Logo></Logo>
            <h2 className="register__title">Рады видеть!</h2>
            <form className="register__form">
                <span className="register__fild-name">Email</span>
                <input className="register__input" id="email" name="email" type="email" autoComplete="off" placeholder="Email" required />
                <span className="register__error"></span>
                <span className="register__fild-name">Пароль</span>
                <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="2" maxLength="40" />
                <span className="register__error"></span>
                <button type="submit" className="register__button login-button">
                    Войти
                </button>
            </form>
            <div className="register__signin login-signin">
                <p className="register__signin-text">Еще не зарегистрированы?</p>
                <Link to="/signup" className="register__link ">
                    Регистрация
                </Link>
            </div>
        </main>
    );
}

export default Login;
