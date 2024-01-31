import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
import "../Register/Register.css";
import "./Login.css";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onLogin({ password, email })
            .then(resetForm)
            .catch((err) => setError(err.error || "Что-то пошло не так"));
    };

    return (
        <main className="register">
            <Logo></Logo>
            <h2 className="register__title">Рады видеть!</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <span className="register__fild-name">Email</span>
                <input className="register__input" id="email" name="email" type="email" autoComplete="off" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className="register__error">{error.email}</span>
                <span className="register__fild-name">Пароль</span>
                <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="2" maxLength="40" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className="register__error">{error.email}</span>
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
