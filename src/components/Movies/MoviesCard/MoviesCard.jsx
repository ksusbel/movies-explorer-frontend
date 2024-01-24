import "./MoviesCard.css";
import image from "../../../images/pic_1.jpg";

function MoviesCard({ imgTitle }) {
    return (
        <li className="movies-card">
            <img className="movies-card__image" src={image} alt={imgTitle} />
            <h2 className="movies-card__title">33 слова о дизайне</h2>
            <button type="button" className="movies-card__save-button movies-card__save-button_not-saved"></button>
            <p className="movies-card__time">1ч 17м</p>
        </li>
    );
}

export default MoviesCard;
