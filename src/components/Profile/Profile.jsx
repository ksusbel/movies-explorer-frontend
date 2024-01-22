import "./Profile.css";

function Profile() {
    return (
        <main className="profile">
            <h1 className="profile__wellcome">Привет, Виталий!</h1>
            <ul className="profile__items">
                <li className="profile__item">
                    <span className="profile__name">Имя</span>
                    <span className="profile__value">Виталий</span>
                </li>
                <li className="profile__item">
                    <span className="profile__name">E-mail</span>
                    <span className="profile__value">pochta@yandex.ru</span>
                </li>
            </ul>
            <button className="profile__redact-button">Редактировать</button>
            <button className="profile__out-button">Выйти из аккаунта</button>
        </main>
    );
}

export default Profile;
