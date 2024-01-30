import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm( { handleSearchMovies }) {
    const [shortMovies, setShortMovies] = useState(false); // чекбокс  
  const [inputVal, setInputVal] = useState('');
 // const [error, setError] = useState(false); //  ошибки
  const { location } = useLocation();

  const handeleInput = (evt) => {
    setInputVal(evt.target.value);
  };

  // короткометражки
  const handelCheckbox = () => {
    setShortMovies(!shortMovies);
    handleSearchMovies(inputVal, !shortMovies);
    if (location === '/movies') {
      localStorage.setItem('short-movies', !shortMovies);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) {
    //  setError(true);
    console.log('Ошибка');    
      return;
    }
    //setError(false);
    console.log('Ошибки нет');   
    if (location === '/movies') {
      localStorage.setItem('request', inputVal);
    }
    handleSearchMovies(inputVal, shortMovies);
  };

  useEffect(() => {
    if (location === '/movies') {
      const getInputVal = localStorage.getItem('request');
      const getShortMovies = JSON.parse(localStorage.getItem('short-movies'));
      if (getInputVal) {
        setInputVal(getInputVal);
      }
      if (getShortMovies) {
        setShortMovies(getShortMovies);
      }
      if (getInputVal || getShortMovies === true) {
        handleSearchMovies(getInputVal, getShortMovies);
      }
    }
  }, []);
    return (
        <section className="search-form">
            <form className="search-form__form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="search-form__form-block">
                    <input type="text" className="search-form__input" placeholder="Фильм" required name="search_input" id="search_input" value={inputVal} onChange={handeleInput} />
                    <button type="submit" className="search-form__button"></button>
                </div>
                <FilterCheckbox value={shortMovies} onChange={handelCheckbox}></FilterCheckbox>
            </form>
        </section>
    );
}

export default SearchForm;
