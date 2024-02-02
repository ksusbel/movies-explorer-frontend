import { BASE_URL } from "./constants";

class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
        //  this._headers = options.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getInitialCards() {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                //Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Cross-Origin-Resource-Policy": "cross-origin",
            },
        }).then(this._handleResponse);
    }

    // Сохранение фильма
    saveMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                //     Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Cross-Origin-Resource-Policy": "cross-origin",
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id.toString(),
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    // удаление фильма из сохраненных
    delSaveMovie(idMovie) {
        return fetch(`${this._baseUrl}/movies/${idMovie}`, {
            method: "DELETE",
            headers: {
                //Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Cross-Origin-Resource-Policy": "cross-origin",
            },
            body: JSON.stringify({
                _id: `${idMovie}`,
            }),
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            metod: "GET",
            headers: this._headers,
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    // Редактирование информации о пользователе
    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                //  Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Cross-Origin-Resource-Policy": "cross-origin",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    getAllInfo() {
        return Promise.all([this.getUser(), this.getInitialCards()]);
    }
}

const mainApi = new MainApi({
    baseUrl: BASE_URL,
    /*   headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json;charset=utf-8",
        "Cross-Origin-Resource-Policy": "cross-origin",
    }, */
});

export default mainApi;
