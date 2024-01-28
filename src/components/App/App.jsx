import { useEffect, useState, useCallback } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
//import moviesApi from "../../utils/MoviesApi";
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


function App() {
  //  const [movies, setMovies] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false); 
    const [userEmail, setUserEmail] = useState("");
    const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  

  const onRegister = ({ password, email, name }) => {
    return userAuth
        .register({ password, email, name })
        .then(() => {
         //   setRegistrationSuccess(true);
         //   handleShowInfoTooltip();
            navigate("/movies");
        })
        .catch((res) => {
        //    setRegistrationSuccess(false);
       //     handleShowInfoTooltip();
            console.log("Пользователь с таким email уже зарегистрирован");
            return res;
        });
};

const onLogin = (data) => {
  return userAuth
      .authorize(data)
      .then((res) => {
          localStorage.setItem("token", res.token);
      //    handleTokenCheck();
          setUserEmail(data.email);
      //    console.log(data.email);
          setLoggedIn(true);
          navigate("/movies");
      })
      .catch((err) => {
        //  setRegistrationSuccess(false);
        //  handleShowInfoTooltip();
          console.log("Неправильные имя пользователя или пароль");
          console.log(`Ошибка: ${err}`);
          navigate("/sign-in");
      });
};

useEffect(() => {
  if (loggedIn) {
      mainApi.getUserInfo()
          .then((data) => {
              setCurrentUser(data);
          })
          .catch((err) => {
              console.log(`Ошибка: ${err}`);
          });
      mainApi.getInitialCards()
          .then((initialCards) => {
              setMovies(initialCards);
          })
          .catch((err) => {
              console.log(`Ошибка: ${err}`);
          });
  }
}, [loggedIn]);

const onSignOut = () => {
  localStorage.removeItem("token");
  setLoggedIn(false);
  navigate("/signin");
};

const handleTokenCheck = useCallback(() => {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
      return;
  }
  userAuth
      .getContent(jwt)
      .then((data) => {
          setUserEmail(data.email);
          setLoggedIn(true);
          navigate("/");
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      });
});

useEffect(() => {
  handleTokenCheck();
}, []);

useEffect(() => {
  if (loggedIn) {
      navigate("/");
  }
}, [loggedIn]);

    return (
        <div className="page">
             <CurrentUserContext.Provider value={currentUser}>
            <Header loggedIn={loggedIn} email={userEmail} onSignOut={onSignOut} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route 
                    path="/movies" element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        component={Movies}
                        movies={movies}
                        email={userEmail}
                    />                 
                    }
                    />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/signup" element={<Register onRegister={onRegister} />} />
                <Route path="/signin" element={<Login onLogin={onLogin} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={loggedIn ? <Navigate to="/" /> : <NotFoundPage />} />
            </Routes>
            <Footer />
              </CurrentUserContext.Provider>  
        </div>
    );
}

export default App;
