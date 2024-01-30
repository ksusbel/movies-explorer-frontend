import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/validation";

function Profile({ profileEmail, isProfileMess, onUpdateUser, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [redactFields, setRedactFields] = useState(true);
  const validationFields = useValidation();

  const handleButtonRedact = (e) => {
    e.preventDefault();
    setRedactFields((position) => !position);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const { name, email } = validationFields.values;
    if (!name) {
      onUpdateUser(currentUser.name, email);
    } else if (!email) {
      onUpdateUser(name, currentUser.email);
    } else {
      onUpdateUser(name, email);
    }
    setTimeout(() => setRedactFields((position) => !position), 500);
    validationFields.resetForm();
  };

  let disabledButtonSave =
  (currentUser.name === validationFields?.values?.name &&
    typeof validationFields?.values?.email === 'undefined') ||
  (currentUser.email === validationFields?.values?.email &&
    typeof validationFields?.values?.email === 'undefined');

    const { nameError, emailError } = validationFields.errors;

    let buttonSaveClassName = isProfileMess
    ? 'profile__edit-result'
    : 'profile__edit-result profile__edit-result_hidden';

    const errClassName = !validationFields.isValidation
    ? 'profile__err profile__err_visible'
    : 'profile__err';

    return (
        <main className="profile">
            <h1 className="profile__wellcome">Привет, {currentUser.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmitProfile} noValidate>
                <ul className="profile__items">
                    <li className="profile__item">
                        <span className="profile__name-name">Имя</span>
                        <div>
                        <input 
                        value={validationFields?.values?.name ?? currentUser.name} 
                        onChange={validationFields.handleOnchange}                         
                        className="profile__input-name" 
                        id="name" 
                        name="name" 
                        type="text" 
                        autoComplete="off" 
                        placeholder="Имя" 
                        required 
                        minLength="4" 
                        maxLength="40" 
                        {...(!redactFields ? {} : { disabled: true })}
                        />
                       <span className={errClassName}>{nameError}</span>
                       </div>
                    </li>
                    <li className="profile__item">
                        <span className="profile__name-email">E-mail</span>
                        <div>
                        <input 
                        value={validationFields?.values?.email ?? profileEmail} 
                        onChange={validationFields.handleOnchange} 
                        pattern="/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i"
                        className="profile__input-email" 
                        id="email" name="email" 
                        type="email" 
                        autoComplete="off" 
                        placeholder="Email"
                        required
                        minLength="4" 
                        maxLength="40" 
                         {...(!redactFields ? {} : { disabled: true })}
                         />
                        <span className={errClassName}>{emailError}</span>
                        </div>
                    </li>
                </ul>
                <div className="profile__edit-results">            
                   
                  
          {!redactFields && (
          <>  
            <span className={buttonSaveClassName}>
              Изменения сохранены!
            </span>
          
            <button type="button" className="profile__submit-button" disabled={disabledButtonSave || !validationFields.isValid}>
                Сохранить
            </button>
          </>
          )}
          </div>
       
        </form>
        {redactFields && (
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
