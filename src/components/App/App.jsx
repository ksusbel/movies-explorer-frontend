import { useState, useEffect, useCallback } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");  
    const [savedMovies, setSavedMovies] = useState([]);
    const [isProfileMess, setIsProfileMess] = useState(false);
   
    const navigate = useNavigate();    
     
    useEffect(() => {
        handleTokenCheck();
    }, []);

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
                    navigate("/movies");
                }
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    });

    const handleSaveMovie = (movie) => {
        mainApi
            .saveMovie(movie)
            .then((data) => {
                setSavedMovies([data, ...savedMovies]);
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
            
    };

    const handleDelMovie = (movie) => {
        const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
        mainApi
            .delSaveMovie(savedMovie._id)
            .then(() => {
                const newMoviesList = savedMovies.filter((c) => c._id !== savedMovie._id);
                setSavedMovies(newMoviesList);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });            
    };

    function handleMovieSaveDelete(savedMovie) {   
        mainApi
          .delSaveMovie(savedMovie._id)
          .then(() => {
            setSavedMovies((savedMovies) => savedMovies.filter((c) => c._is !== savedMovie._id))
          })
          .catch((err) => console.log(err));

        //  setTimeout(() =>
            mainApi
                .getInitialCards()
                .then((initialCards) => {
                     setSavedMovies(initialCards);                   
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                //, 5000);

        }

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
              //  setUserName(res.name);
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

    

    const onSignOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        setSavedMovies([]);
        setCurrentUser({ name: "", email: "", _id: "" });
        navigate("/");
    };

    
   

    useEffect(() => {
        if (loggedIn) {
            navigate("/movies");
        }
    }, [loggedIn]);

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header loggedIn={loggedIn} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/movies" element={<ProtectedRoute exact component={Movies} loggedIn={loggedIn} email={userEmail} savedMovies={savedMovies} onSaveMovie={handleSaveMovie} onDelMovie={handleDelMovie} />} />
                    <Route path="/saved-movies" element={<ProtectedRoute exact component={SavedMovies} loggedIn={loggedIn} email={userEmail} onSaveMovie={handleSaveMovie} onDelMovie={handleMovieSaveDelete} savedMovies={savedMovies} />} />
                    <Route path="/signup" element={<Register onRegister={onRegister} />} />
                    <Route path="/signin" element={<Login onLogin={onLogin} />} />
                    <Route
                        path="/profile"
                        element={<ProtectedRoute exact component={Profile} loggedIn={loggedIn} onUpdateUser={handleUpdateUser} profileEmail={userEmail} onSignOut={onSignOut} isProfileMess={isProfileMess} />}
                    />
                    <Route path="*" element={!loggedIn ? <Navigate to="/" /> : <NotFoundPage />} />
                </Routes>
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default withRouter(App);
