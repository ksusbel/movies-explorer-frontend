import { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";
import moviesApi from "../../utils/MoviesApi";
import filterMovies from "../../utils/FilterMovies";

function Movies({ savedMovies, onSaveMovie, onDelMovie }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        moviesApi
            .getInitialMovies()
            .then((initialMovies) => {
                setMovies(initialMovies);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }, []);

    // поиск
    const filter = (shortFilms, request) => {
        const baseMovies = JSON.parse(localStorage.getItem("movies"));
        const filtered = filterMovies(baseMovies, shortFilms, request);
        if (filtered.length === 0) {
            console.log("Неправильные");
        }
        setMovies(filtered);
        setIsLoading(false);
    };

    // кнопки
    const handleButtonSearch = (shortFilms, request) => {
        setIsLoading(true);
        const savedMovies = JSON.parse(localStorage.getItem("movies"));
        if (!savedMovies) {
            moviesApi
                .getInitialMovies()
                .then((films) => {
                    localStorage.setItem("movies", JSON.stringify(films));
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
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} savedMovies={savedMovies} onSaveMovie={onSaveMovie} onDelMovie={onDelMovie} />}
        </main>
    );
}

export default Movies;
