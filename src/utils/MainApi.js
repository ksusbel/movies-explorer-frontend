import { BASE_URL } from "./constants";

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._handleResponse);
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    }

    removeCard(idCard) {
        return fetch(`${this._baseUrl}/cards/${idCard}`, {
            method: "DELETE",
            headers: this._headers,
            body: JSON.stringify({
                _id: `${idCard}`,
            }),
        }).then(this._handleResponse);
    }

    changeLikeCardStatus(idCard, isLiked) {
        return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
            method: isLiked ? "DELETE" : "PUT",
            headers: this._headers,
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
    editUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,          
        }).then((res) => {
            return this._handleResponse(res);
        });
    }

    // Редактирование аватара
    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
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
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,   
        "Content-Type": "application/json",
    },
});

export default mainApi;
