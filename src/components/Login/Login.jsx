import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Register/Register.css";

function Login() {
    return (
        <>
            <Logo></Logo>
            <div className="register">
                <h2 className="register__title">Рады видеть!</h2>
                <form className="register__form">
                    <span className="register__fild-name">Email</span>
                    <input className="register__input" id="email" name="email" type="email" autoComplete="off" required />
                    <span className="register__error"></span>
                    <span className="register__fild-name">Пароль</span>
                    <input className="register__input" id="password" name="password" type="password" autoComplete="off" required />
                    <span className="register__error"></span>
                    <button type="submit" className="register__button">
                        Войти
                    </button>
                </form>
                <div className="register__signin">
                    <p className="register__signin_text">Уже зарегистрированы?</p>
                    <Link to="login" className="register__link">
                        Войти
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;
