import { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ isProfileMess, onUpdateUser, onSignOut }) {
    const [profileName, setProfileName] = useState("");
    const [profileEmail, setProfileEmail] = useState("");
    const [redactFields, setRedactFields] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    const currentUser = useContext(CurrentUserContext);
    const { name, email } = useCallback(currentUser);

    const handleButtonRedact = (e) => {
        e.preventDefault();
        setRedactFields((position) => !position);
    };

    function handleChangeName(evt) {
        setRedactFields(true);
        const input = evt.target;
        setProfileName(input.value);
        setIsValidName(input.validity.valid);
    }

    function handleChangeEmail(evt) {
        setRedactFields(true);
        const input = evt.target;
        setProfileEmail(input.value);
        setIsValidEmail(input.validity.valid);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name: profileName,
            email: profileEmail,
        });
    }
    useEffect(() => {
        setProfileName(name);
        setProfileEmail(email);
    }, [currentUser]);

    return (
        <main className="profile">
            <h1 className="profile__wellcome">Привет, {profileName}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <ul className="profile__items">
                    <li className="profile__item">
                        <span className="profile__name-name">Имя</span>
                        <div>
                            <input
                                value={profileName || ""}
                                onChange={handleChangeName}
                                className="profile__input-name"
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                placeholder="Имя"
                                required
                                minLength="4"
                                maxLength="40"
                                //  readOnly={!redactFields}
                            />
                            {/*   <span className={errClassName}></span> */}
                        </div>
                    </li>
                    <li className="profile__item">
                        <span className="profile__name-email">E-mail</span>
                        <div>
                            <input value={profileEmail} onChange={handleChangeEmail} className="profile__input-email" id="email" name="email" type="email" autoComplete="off" placeholder="Email" required minLength="6" maxLength="40" />
                            {/*  <span className={errClassName}></span> */}
                        </div>
                    </li>
                </ul>
                <div className="profile__edit-results">
                    {isProfileMess && <span /* className={buttonSaveClassName} */>Изменения сохранены!</span>}
                    {redactFields && (
                        <button type="submit" className="profile__submit-button" disabled={!isValidName || !isValidEmail}>
                            Сохранить
                        </button>
                    )}
                </div>
            </form>
            {!redactFields && (
                <>
                    <button type="button" className="profile__redact-button" onClick={handleButtonRedact}>
                        Редактировать
                    </button>
                    <Link to="/" className="profile__out-button" onClick={onSignOut}>
                        Выйти из аккаунта
                    </Link>
                </>
            )}
        </main>
    );
}

export default Profile;
