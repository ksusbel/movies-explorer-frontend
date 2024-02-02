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
    const [inputErrorName, setInputErrorName] = useState("");
    const [inputErrorEmail, setInputErrorEmail] = useState("");
    const [isEnableButton, setIsEnableButton] = useState(false);

    const currentUser = useContext(CurrentUserContext);
    const { name, email } = useCallback(currentUser);

    useEffect(() => {
        if ((currentUser.name !== profileName && isValidName) || (currentUser.email !== profileEmail && isValidEmail)) {
            setIsEnableButton(true);
        } else {
            setIsEnableButton(false);
        }
    }, [currentUser, profileName, profileEmail]);

    const handleButtonRedact = (e) => {
        e.preventDefault();
        setRedactFields((position) => !position);
    };

    function handleChangeName(e) {
        setRedactFields(true);
        const input = e.target;
        setProfileName(input.value);
        setIsValidName(input.validity.valid);
        if (!isValidName) {
            setInputErrorName(input.validationMessage);
        } else {
            setInputErrorName("");
        }
    }

    function handleChangeEmail(e) {
        setRedactFields(true);
        const input = e.target;
        setProfileEmail(input.value);
        setIsValidEmail(input.validity.valid);
        if (!isValidEmail) {
            setInputErrorEmail(input.validationMessage);
        } else {
            setInputErrorEmail("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (profileName !== currentUser.name || profileEmail !== currentUser.email) {
            setIsEnableButton(false);
            onUpdateUser({
                name: profileName,
                email: profileEmail,
            });
        } else {
            setIsEnableButton(false);
        }
    }
    useEffect(() => {
        setProfileName(name);
        setProfileEmail(email);
    }, [currentUser]);

    return (
        <main className="profile">
            <h1 className="profile__wellcome">Привет, {currentUser.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
                <ul className="profile__items">
                    <li className="profile__item">
                        <div className="profile__item-name">
                            <span className="profile__name-name">Имя</span>
                            <input value={profileName || ""} onChange={handleChangeName} className="profile__input-name" id="name" name="name" type="text" autoComplete="off" placeholder="Имя" required minLength="2" maxLength="40" />
                        </div>
                        <span className="profile__input-error">{inputErrorName}</span>
                    </li>
                    <li className="profile__item">
                        <div className="profile__item-email">
                            <span className="profile__name-email">E-mail</span>
                            <input
                                value={profileEmail}
                                onChange={handleChangeEmail}
                                className="profile__input-email"
                                pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                placeholder="Email"
                                required
                                minLength="6"
                                maxLength="40"
                            />
                        </div>
                        <span className="profile__input-error">{inputErrorEmail}</span>
                    </li>
                </ul>
                <div className="profile__edit-results">
                    <span className="profile__message-succses">{isProfileMess && "Изменения сохранены!"}</span>
                    {redactFields && (
                        <button type="submit" className="profile__submit-button" disabled={!isEnableButton}>
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
