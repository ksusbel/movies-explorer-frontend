import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "../../Movies/MoviesCardList/MoviesCardList.css";
import { CARDS_1280, CARDS_850, MAX_CARDS, CARDS_VAL_1280, CARDS_VAL_850, MAX_CARDS_VAL } from "../../../utils/constants";

function MoviesCardList({ savedMovies, onDelMovie }) {
    const [listMovies, setListMovies] = useState(0);
    const [row, setRow] = useState(0);
    const location = useLocation();

    //  кнопкa ЕЩЕ
    const buttonMoreMovies = () => {
        setListMovies(listMovies + row);
    };

    // расположение карточек
    const setMoviesStandarts = () => {
        const widthCard = window.innerWidth;
        if (location.pathname === "/saved-movies") {
            setListMovies(savedMovies.length);
        }
        if (widthCard <= 850) {
            setListMovies(MAX_CARDS);
            setRow(MAX_CARDS_VAL);
        } else if (widthCard <= 1285) {
            setListMovies(CARDS_850);
            setRow(CARDS_VAL_850);
        } else if (widthCard <= 2000) {
            setListMovies(CARDS_1280);
            setRow(CARDS_VAL_1280);
        }
    };

    useEffect(() => {
        setMoviesStandarts();
        window.addEventListener("resize", () => {
            setTimeout(() => {
                setMoviesStandarts();
            }, 300);
        });
    }, []);

    return (
        <section className="movies-cards-list">
            <ul className="movies-cards-list__list">
                {savedMovies.map((saveMovie, count) => {
                    if (count < listMovies) {
                        return <MoviesCard key={saveMovie.id} saveMovie={saveMovie} name={saveMovie.nameRU} duration={saveMovie.duration} trailerLink={saveMovie.trailerLink} thumbnail={saveMovie.thumbnail} savedMovies={savedMovies} onDelMovie={onDelMovie} />;
                    }
                    return null;
                })}
            </ul>
            {savedMovies.length > listMovies && location.pathname !== "/saved-movies" && (
                <button type="button" className="movies-cards-list__more-button" onClick={buttonMoreMovies}>
                    Еще
                </button>
            )}
        </section>
    );
}

export default MoviesCardList;
