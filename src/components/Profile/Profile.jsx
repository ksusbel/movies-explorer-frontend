import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
    return (
        <main className="profile">
            <h1 className="profile__wellcome">Привет, Виталий!</h1>
            <form className="profile__form">
                <ul className="profile__items">
                    <li className="profile__item">
                        <span className="profile__name-name">Имя</span>
                        <input className="profile__input-name" id="name" name="name" type="text" autoComplete="off" placeholder="Имя" required minLength="2" maxLength="40" />
                    </li>
                    <li className="profile__item">
                        <span className="profile__name-email">E-mail</span>
                        <input className="profile__input-email" id="email" name="email" type="email" autoComplete="off" placeholder="Email" />
                    </li>
                </ul>
                <button type="button" className="profile__redact-button">
                    Редактировать
                </button>
            </form>
            <Link to="/" className="profile__out-button">
                Выйти из аккаунта
            </Link>
        </main>
    );
}

export default Profile;
