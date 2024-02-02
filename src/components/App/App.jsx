import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer";
import * as userAuth from "../../utils/auth";
import { withRouter } from "../withRouter/withRouter";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import filterMovies from "../../utils/FilterMovies";
import Preloader from "../Movies/Preloader/Preloader";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [savedMovies, setSavedMovies] = useState([]);
    const [isProfileMess, setIsProfileMess] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSaveMovie(movie) {
        mainApi
            .saveMovie(movie)
            .then((res) => {
                setSavedMovies([res.data, ...savedMovies]);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    function handleDeleteMovie(savedMovie) {
        mainApi
            .delSaveMovie(savedMovie._id)
            .then(() => {
                setSavedMovies((savedMovies) => savedMovies.filter((c) => c._id !== savedMovie._id));
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    // поиск
    const filter = (request, shortMovies) => {
        const baseMovies = JSON.parse(localStorage.getItem("movies"));
        const filtered = filterMovies(baseMovies, request, shortMovies);
        if (filtered.length === 0) {
            console.log("Ничего не найдено");
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
                .then((films) => {
                    localStorage.setItem("movies", JSON.stringify(films));
                    filter(request, shortMovies);
                })
                .catch(() => {
                    console.log("Ошибка");
                });
        } else {
            filter(request, shortMovies);
        }
    };

    // поиск save
    const filterSave = (shortFilms, request) => {
        const movies = JSON.parse(localStorage.getItem("saved-movies"));
        const filtered = filterMovies(movies, shortFilms, request);
        if (filtered.length === 0) {
            console.log("Ошибка");
        }
        setSavedMovies(filtered);
        setIsLoading(false);
    };

    // кнопки поиска save
    const handleButtonSearchSavedMovies = (shortFilms, request) => {
        setIsLoading(true);
        const baseMovies = JSON.parse(localStorage.getItem("saved-movies"));
        if (!baseMovies) {
            mainApi
                .getInitialCards()
                .then((films) => {
                    localStorage.setItem("saved-movies", JSON.stringify(films));
                    filterSave(shortFilms, request);
                })
                .catch(() => {
                    console.log("Ничего не найдено");
                });
        } else {
            filterSave(shortFilms, request);
        }
    };

    const handleTokenCheck = useCallback(() => {
        const jwt = localStorage.getItem("token");

        if (!jwt) {
            return;
        }
        userAuth
            .getContent(jwt)
            .then((res) => {
                if (res) {
                    setUserEmail(res.email);
                    setLoggedIn(true);
                    setCurrentUser(res);
                } else {
                    setLoggedIn(false);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    });

    function handleUpdateUser(newUserInfo) {
        mainApi
            .editUserInfo(newUserInfo)
            .then((data) => {
                setCurrentUser(data);
                setIsProfileMess(true);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                setTimeout(() => setIsProfileMess(false), 500);
            });
    }

    const onRegister = ({ password, email, name }) => {
        return userAuth
            .register({ password, email, name })
            .then((data) => {
                if (data) {
                    onLogin({ email, password });
                    console.log("Успех");
                } else {
                    navigate("/");
                }
            })
            .catch((res) => {
                console.log("Пользователь с таким email уже зарегистрирован");
                return res;
            });
    };

    const onLogin = (data) => {
        return userAuth
            .authorize(data)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    userAuth.getContent(res.token).then((res) => {
                        if (res) {
                            setTimeout(() => navigate("/movies"), 1000);
                            setLoggedIn(true);
                        }
                    });
                }
            })
            .catch(() => {
                console.log("Неправильные имя пользователя или пароль");
                navigate("/signin");
            });
    };

    useEffect(() => {
        if (loggedIn) {
            userAuth
                .getUserInfo()
                .then((user) => {
                    setCurrentUser(user);
                })
                .catch((err) => {
                    console.error(`Пользователь не найден: ${err}`);
                });
            moviesApi
                .getInitialMovies()
                .then((initialMovies) => {
                    setMovies(initialMovies);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
            mainApi
                .getInitialCards()
                .then((initialCards) => {
                    setSavedMovies(initialCards);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }
    }, [loggedIn]);

    const onSignOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        setSavedMovies([]);
        setCurrentUser({ name: "", email: "", _id: "" });
        navigate("/");
    };

    useEffect(() => {
        handleTokenCheck();
    }, []);

    useEffect(() => {
        if (loggedIn) {
            const homePath = location.pathname;
            navigate(homePath);
        }
    }, [loggedIn]);

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header loggedIn={loggedIn} />
                <Routes>
                    {isLoading ? (
                        <Preloader />
                    ) : (
                        <>
                            <Route path="/" element={<Main />} />
                            <Route path="/movies" element={<Movies loggedIn={loggedIn} savedMovies={savedMovies} onSearchMovies={handleButtonSearch} movies={movies} onSaveMovie={handleSaveMovie} isLoading={isLoading} />} />
                            <Route
                                path="/saved-movies"
                                element={<SavedMovies loggedIn={loggedIn} onSearchMovies={handleButtonSearchSavedMovies} onSaveMovie={handleSaveMovie} onDelMovie={handleDeleteMovie} savedMovies={savedMovies} isLoading={isLoading} />}
                            />
                            <Route path="/profile" element={<Profile loggedIn={loggedIn} onUpdateUser={handleUpdateUser} profileEmail={userEmail} onSignOut={onSignOut} isProfileMess={isProfileMess} />} />
                        </>
                    )}
                    <Route path="/signup" element={<Register onRegister={onRegister} isProfileMess={isProfileMess} />} />
                    <Route path="/signin" element={<Login onLogin={onLogin} />} />

                    {location.pathname !== "/" && <Route path="*" element={<NotFoundPage></NotFoundPage>} />}
                </Routes>
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default withRouter(App);
