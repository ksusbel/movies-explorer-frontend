import { BASE_URL_MOVIES } from "./constants";

class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

  getInitialMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
}

}

const moviesApi = new MoviesApi({
  url: BASE_URL_MOVIES,
  headers: {
    "Content-Type": "application/json",
    "Cross-Origin-Resource-Policy": "cross-origin",
},
});

export default moviesApi;