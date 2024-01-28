import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register({ onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onRegister({ password, email, name }).then(resetForm);
    };

    return (       
            
            <main className="register">
                <Logo></Logo>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <span className="register__fild-name">Имя</span>
                    <input className="register__input" id="name" name="name" type="text" autoComplete="off" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={(e) => setName(e.target.value)} />
                    <span className="register__error">{error.name}</span>
                    <span className="register__fild-name">Email</span>
                    <input className="register__input" id="email" name="email" type="email" autoComplete="off" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className="register__error">{error.email}</span>
                    <span className="register__fild-name">Пароль</span>
                    <input className="register__input" id="password" name="password" type="password" autoComplete="off" placeholder="Пароль" required minLength="2" maxLength="40" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className="register__error">{error.password}</span>
                    <button type="submit" className="register__button">
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
