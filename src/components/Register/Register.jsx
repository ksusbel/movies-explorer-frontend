import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register({ isProfileMess, onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [inputErrorName, setInputErrorName] = useState("");
    const [inputErrorEmail, setInputErrorEmail] = useState("");
    const [inputErrorPassword, setInputErrorPassword] = useState("");
    const [isEnableButton, setIsEnableButton] = useState(false);

    useEffect(() => {
        if (name !== "" && isValidName && email !== "" && isValidEmail && password !== "" && isValidPassword) {
            setIsEnableButton(true);
        } else {
            setIsEnableButton(false);
        }
    }, [name, email, password]);

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setInputErrorName("");
        setInputErrorEmail("");
        setInputErrorPassword("");
    };

    function handleChangeName(e) {
        const input = e.target;
        setName(input.value);
        setIsValidName(input.validity.valid);
        if (!isValidName) {
            setInputErrorName(input.validationMessage);
        } else {
            setInputErrorName("");
        }
    }

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
        onRegister({ password, email, name }).then(resetForm);
    };

    return (
        <main className="register">
            <Logo></Logo>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <span className="register__fild-name">Имя</span>
                <input className="register__input" id="name" name="name" type="text" autoComplete="off" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
                <span className="register__input-error">{inputErrorName}</span>

                <span className="register__fild-name">Email</span>
                <input
                    className="register__input"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    minLength="6"
                    maxLength="40"
                    pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <span className="register__input-error">{inputErrorEmail}</span>

                <span className="register__fild-name">Пароль</span>
                <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="6" maxLength="40" value={password} onChange={handleChangePassword} />
                <span className="register__input-error">{inputErrorPassword}</span>
                <span className="register__message-succses">{isProfileMess && "Вы успешно зарегистрировались!"}</span>
                <button type="submit" className="register__button" disabled={!isEnableButton}>
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__signin">
                <p className="register__signin-text">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__link">
                    Войти
                </Link>
            </div>
        </main>
    );
}

export default Register;
