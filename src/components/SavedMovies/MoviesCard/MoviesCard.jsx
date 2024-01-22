import "./MoviesCard.css";
import image from "../../../images/pic_2.png";

function MoviesCard() {
    return (
        <li className="movies-card">
            <img className="movies-card__image" src={image} alt="Превью" />
            <h3 className="movies-card__title">Дженис: Маленькая девочка грустит</h3>
            <button className="movies-card__button-to-save movies-card__button-to-save_dell"></button>
            <p className="movies-card__time">1ч 17м</p>
        </li>
    );
}

export default MoviesCard;
