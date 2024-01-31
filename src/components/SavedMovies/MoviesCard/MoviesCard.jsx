import "./MoviesCard.css";

function MoviesCard({ movie, name, duration, thumbnail, onDelMovie }) {
    function handleSaveDeleteClick() {
        onDelMovie(movie);
    }

    return (
        <li className="movies-card">
            <img className="movies-card__image" src={thumbnail} alt={name} />
            <h2 className="movies-card__title">{name}</h2>
            <button type="button" className="movies-card__button-to-save movies-card__button-to-save_dell" onClick={handleSaveDeleteClick}></button>
            <p className="movies-card__time">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
        </li>
    );
}

export default MoviesCard;
