import { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import FilterMovies from "../../utils/FilterMovies";
import "./Movies.css";

function Movies({ savedMovies, onSaveMovie, onDelMovie }) {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchError, setSearchError] = useState("");

    useEffect(() => {
        const savedMovies = localStorage.getItem("savedMovies");
        if (!savedMovies) {
            setIsLoading(true);
            mainApi
                .getInitialCards()
                .then((res) => {
                    if (res.length > 0) {
                        localStorage.setItem("savedMovies", JSON.stringify(res));
                    }
                    setIsLoading(false);
                })
                .catch(() => {
                    setSearchError("Ошибка загрузки");
                });
        }
    }, []);

    // поиск
    const filter = (request, shortMovies) => {
        const baseMovies = JSON.parse(localStorage.getItem("movies"));
        const filtered = FilterMovies(baseMovies, request, shortMovies);

        if (filtered.length === 0) {
            setSearchError("Ничего не найдено");
        }
        setMovies(filtered);
        setIsLoading(false);
    };

    // кнопки поиска
    const handleButtonSearch = (request, shortMovies) => {
        setIsLoading(true);
        const baseMovies = JSON.parse(localStorage.getItem("movies"));
        if (!baseMovies) {
            moviesApi
                .getInitialMovies()
                .then((movies) => {
                    localStorage.setItem("movies", JSON.stringify(movies));
                    filter(request, shortMovies);
                })
                .catch(() => {
                    setSearchError("Ошибка загрузки");
                });
        } else {
            filter(request, shortMovies);
        }
    };

    return (
        <main className="movies">
            <SearchForm onSearchMovies={handleButtonSearch}></SearchForm>
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} savedMovies={savedMovies} onSaveMovie={onSaveMovie} onDelMovie={onDelMovie} searchError={searchError} />}
        </main>
    );
}

export default Movies;
