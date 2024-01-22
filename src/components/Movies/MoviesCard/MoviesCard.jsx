import "./MoviesCard.css";
import image from "../../../images/pic_1.jpg";

function MoviesCard() {
    return (
        <li className="movies-card">
            <img className="movies-card__image" src={image} alt="Превью" />
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <button className="movies-card__save_button movies-card__save_button_not-saved"></button>
            <p className="movies-card__time">1ч 17м</p>
        </li>
    );
}

export default MoviesCard;
