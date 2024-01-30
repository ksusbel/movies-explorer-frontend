//import { useState } from "react";
// import { useContext } from "react";
//import { useLocation } from "react-router-dom";
// import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./MoviesCard.css";
//import mainApi from "../../../utils/MainApi";

function MoviesCard({ movie, 
  //name,
  //duration,
 // thumbnail,
 // trailerLink,
  savedMovies,
  onSaveMovie,
  onDelMovies,  
 // allSavedMovies
 }) {
   // const location = useLocation();
   /*  let hours = Math.floor(duration / 60);
    let minutes = Math.floor(duration - hours * 60); */
    const isSaved = savedMovies.some((i) => i.movieId === movie.id);
   
  
  /*   let buttonClassName =
      isSaved || isAllSaved
        ? 'movies-card__button movies-card__button_save'
        : 'movies-card__button'; */
  
    const handleMovieSubmit = () => {
      if (isSaved) {
        onDelMovies(savedMovies.filter((i) => i.movieId === movie.id)[0]);
      } else {
        onSaveMovie(movie);
      }
    };
  
  //  const handleDeleteMovie = () => onDelete(movie);

//const isSaved = savedMovies.find((m) => m.idMovie === movie.id);

      // Создаём переменную, которую после зададим в `className` для кнопки лайка
    //  const isAllSaved = savedMovies.some((i) => i.movieId === movie.id);
    
   /*   isSaved || isAllSaved
        ? 'movies-card__save-button_saved'
        : 'movies-card__save-button_not-saved'; */

        const movieSaveButtonClassName = `movies-card__save-button ${isSaved ? "movies-card__save-button_saved" : "movies-card__save-button_not-saved"}`;

  return (
        <li className="movies-card">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.image.name} />
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <button type="button" className={movieSaveButtonClassName} onClick={handleMovieSubmit}></button>
            <p className="movies-card__time">{`${Math.floor(movie.duration/60)}ч ${movie.duration%60}м`}</p>
        </li>
    );
}

export default MoviesCard;
