import { useState } from "react";
// import { useContext } from "react";
// import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./MoviesCard.css";
import mainApi from "../../../utils/MainApi";

function MoviesCard({ movie, name, duration, thumbnail }) {
    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMoviesServer, setSavedMoviesServer] = useState([]);
   // const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
 //   const isOwn = card.owner === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
 //   const isLiked = card.likes.some(user => user === currentUser._id);
   
     
     function handleMovieSaveDelete(movie) {
          // Снова проверяем, есть ли уже лайк на этой карточке
     //   const isLiked = movie.likes.some(user => user === currentUser._id);
    
        // Отправляем запрос в API и получаем обновлённые данные карточки
        mainApi
          .delSaveMovie(movie._id)
          .then(() => {
            const updateSavedMovies = savedMovies.filter(
              (item) => item._id !== movie._id
            );
            setSavedMovies(updateSavedMovies);
            setSavedMoviesServer(
              savedMoviesServer.filter((item) => item._id !== movie._id)
            );
          })
          .catch((err) => console.log(err));
      }
 

    function handleSaveDeleteClick() {
        handleMovieSaveDelete(movie);
    }  

    return (
        <li className="movies-card">
            <img className="movies-card__image" src={thumbnail} alt={name} />
            <h2 className="movies-card__title">{name}</h2>
            <button type="button" className="movies-card__button-to-save movies-card__button-to-save_dell"  onClick={handleSaveDeleteClick} ></button>
            <p className="movies-card__time">{`${Math.floor(duration/60)}ч ${duration%60}м`}</p>
        </li>
    );
}

export default MoviesCard;
