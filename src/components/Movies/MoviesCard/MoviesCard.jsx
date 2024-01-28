// import { useContext } from "react";
// import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./MoviesCard.css";
// import image from "../../../images/pic_1.jpg";

function MoviesCard({ movie }) {
 //   const currentUser = useContext(CurrentUserContext);
    return (
        <li className="movies-card">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <button type="button" className="movies-card__save-button movies-card__save-button_not-saved"></button>
            <p className="movies-card__time">{`${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`}</p>
        </li>
    );
}

export default MoviesCard;
