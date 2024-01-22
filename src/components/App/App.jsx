import { Route, Routes } from "react-router-dom";

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

function App() {
    return (
        <div className="page">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
