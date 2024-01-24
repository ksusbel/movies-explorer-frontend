import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register() {
    return (       
            
            <main className="register">
                <Logo></Logo>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form">
                    <span className="register__fild-name">Имя</span>
                    <input className="register__input" id="name" name="name" type="text" autoComplete="off" placeholder="Имя" required minLength="2" maxLength="40" />
                    <span className="register__error"></span>
                    <span className="register__fild-name">Email</span>
                    <input className="register__input" id="email" name="email" type="email" autoComplete="off" placeholder="Email" required />
                    <span className="register__error"></span>
                    <span className="register__fild-name">Пароль</span>
                    <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="2" maxLength="40" />
                    <span className="register__error"></span>
                    <button type="submit" className="register__button">
                        Зарегистрироваться
                    </button>
                </form>
                <div className="register__signin">
                    <p className="register__signin-text">Уже зарегистрированы?</p>
                    <Link to="login" className="register__link">
                        Войти
                    </Link>
                </div>
            </main>
        
    );
}

export default Register;
