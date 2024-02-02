import "./MoviesCard.css";

function MoviesCard({ movie, savedMovies, onSaveMovie }) {
    const isLiked = savedMovies.some((i) => i.movieId === movie.id);

    function handleSaveClick() {
        onSaveMovie(movie);
    }

    const movieSaveButtonClassName = `movies-card__save-button ${isLiked ? "movies-card__save-button_saved" : "movies-card__save-button_not-saved"}`;

    return (
        <li className="movies-card">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <button type="button" className={movieSaveButtonClassName} onClick={handleSaveClick}></button>
            <p className="movies-card__time">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
        </li>
    );
}

export default MoviesCard;
