import { useState, useEffect } from 'react';
import SearchForm from "./SearchForm/SearchForm";
//import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";
//import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import filterMovies from  '../../utils/FilterMovies';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // при открытии главной страницы с фильмами загрузили все сохраненки в хранилище key = savedMovies
   useEffect(() => {
    const savedMovies = localStorage.getItem('savedMovies');
    if (!savedMovies) {
      setIsLoading(true);
       mainApi
        .getUserInfo()
        .then((data) => {
          if (data.length > 0) {
            localStorage.setItem('savedMovies', JSON.stringify(data));
          }
          setIsLoading(false);
        })
        .catch(() => {
            console.log("Неправильные");
        }); 
    }
  }, []);
 
  useEffect(() => {        
    moviesApi.getInitialMovies()
        .then((initialMovies) => {
            setMovies(initialMovies);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        });
}, []);


      // поиск
  const filter = (request, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const filtered = filterMovies(storedMovies, request, shorts);
    if (filtered.length === 0) {
        console.log("Неправильные");
    }
    setMovies(filtered);
    setIsLoading(false);
  };

// кнопки НAQNB
const handleButtonSearch = (request, shorts) => {
    setIsLoading(true);  
    const savedMovies = JSON.parse(localStorage.getItem('movies'));
    if (!savedMovies) {
      moviesApi
        .getInitialMovies()
        .then((films) => {          
          localStorage.setItem('movies', JSON.stringify(films));
          filter(request, shorts);
        })
        .catch(() => {
            console.log("Неправильные");
        });
    } else {
      filter(request, shorts);
    }
  };

    return (
        <main className="movies">
            <SearchForm handleButtonSearch={handleButtonSearch} ></SearchForm>
        
 {/*            {isLoading ? (
        <Preloader />
      ) : ( */}
            <MoviesCardList movies={movies} />
            {/* )} */}
        </main>
    );
}

export default Movies;
