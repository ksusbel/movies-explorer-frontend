import { useState, useEffect } from "react";
import "../Movies/Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import mainApi from "../../utils/MainApi";
import searchFilterMovies from "../../utils/FilterMovies";

function SavedMovies({ savedMovies, onDelMovie }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        mainApi
            .getInitialCards()
            .then((initialMovies) => {
                setMovies(initialMovies);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }, []);

    // поиск
    const filter = (shortFilms, request) => {
        const baseMovies = JSON.parse(localStorage.getItem("saved-movies"));
        const filtered = searchFilterMovies(baseMovies, shortFilms, request);
        if (filtered.length === 0) {
            console.log("Неправильные");
        }
        setMovies(filtered);
        setIsLoading(false);
    };

    // кнопки
    const handleButtonSearch = (shortFilms, request) => {
        setIsLoading(true);
        const savedMovies = JSON.parse(localStorage.getItem("saved-movies"));
        if (!savedMovies) {
            mainApi
                .getInitialCards()
                .then((films) => {
                    localStorage.setItem("saved-movies", JSON.stringify(films));
                    filter(shortFilms, request);
                })
                .catch(() => {
                    console.log("Неправильные");
                });
        } else {
            filter(shortFilms, request);
        }
    };

    return (
        <main className="movies">
            <SearchForm onSearchMovies={handleButtonSearch}></SearchForm>
            {isLoading ? <Preloader></Preloader> : <MoviesCardList movies={movies} savedMovies={savedMovies} onDelMovie={onDelMovie}></MoviesCardList>}
        </main>
    );
}

export default SavedMovies;