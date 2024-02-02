import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Register/Register.css";
import "./Login.css";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [inputErrorEmail, setInputErrorEmail] = useState("");
    const [inputErrorPassword, setInputErrorPassword] = useState("");
    const [isEnableButton, setIsEnableButton] = useState(false);

    useEffect(() => {
        if (email !== "" && isValidEmail && password !== "" && isValidPassword) {
            setIsEnableButton(true);
        } else {
            setIsEnableButton(false);
        }
    }, [email, password]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setInputErrorEmail("");
        setInputErrorPassword("");
    };

    function handleChangeEmail(e) {
        const input = e.target;
        setEmail(input.value);
        setIsValidEmail(input.validity.valid);
        if (!isValidEmail) {
            setInputErrorEmail(input.validationMessage);
        } else {
            setInputErrorEmail("");
        }
    }

    function handleChangePassword(e) {
        const input = e.target;
        setPassword(input.value);
        setIsValidPassword(input.validity.valid);
        if (!isValidPassword) {
            setInputErrorPassword(input.validationMessage);
        } else {
            setInputErrorPassword("");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsEnableButton(false);
        onLogin({ password, email })
            .then(resetForm)
            .catch((err) => inputErrorPassword(err.error || "Что-то пошло не так"));
    };

    return (
        <main className="register">
            <Logo></Logo>
            <h2 className="register__title">Рады видеть!</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <span className="register__fild-name">Email</span>
                <input
                    className="register__input"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
                    minLength="6"
                    maxLength="40"
                    required
                    value={email}
                    onChange={handleChangeEmail}
                />
                <span className="register__input-error">{inputErrorEmail}</span>

                <span className="register__fild-name">Пароль</span>
                <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="2" maxLength="40" value={password} onChange={handleChangePassword} />
                <span className="register__input-error">{inputErrorPassword}</span>

                <button type="submit" className="register__button login-button" disabled={!isEnableButton}>
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
