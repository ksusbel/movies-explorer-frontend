import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchMovies }) {
    const [shortMovies, setShortMovies] = useState(false);
    const [inputVal, setInputVal] = useState("");
    const { location } = useLocation();
    const handeleField = (evt) => {
        setInputVal(evt.target.value);
    };

    // короткометражки
    const handelCheckbox = () => {
        setShortMovies(!shortMovies);
        onSearchMovies(inputVal, !shortMovies);
        if (location === "/movies") {
            localStorage.setItem("short-movies", !shortMovies);
        }
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        if (!inputVal) {
            console.log("Ошибка");
            return;
        }

        console.log("Ошибки нет");
        if (location === "/movies") {
            localStorage.setItem("request", inputVal);
        }
        onSearchMovies(inputVal, shortMovies);
    };

    useEffect(() => {
        if (location === "/movies") {
            const getInputVal = localStorage.getItem("request");
            const getShortMovies = JSON.parse(localStorage.getItem("short-movies"));
            if (getInputVal) {
                setInputVal(getInputVal);
            }
            if (getShortMovies) {
                setShortMovies(getShortMovies);
            }
            if (getInputVal || getShortMovies === true) {
                onSearchMovies(getInputVal, getShortMovies);
            }
        }
    }, []);

    return (
        <section className="search-form">
            <form className="search-form__form" autoComplete="off" noValidate onSubmit={handleSubmitSearch}>
                <div className="search-form__form-block">
                    <input type="text" className="search-form__input" placeholder="Фильм" required name="search_input" id="search_input" value={inputVal} onChange={handeleField} />
                    <button type="submit" className="search-form__button"></button>
                </div>
                <FilterCheckbox value={shortMovies} onChange={handelCheckbox}></FilterCheckbox>
            </form>
        </section>
    );
}

export default SearchForm;
