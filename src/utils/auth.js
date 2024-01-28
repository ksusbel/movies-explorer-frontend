import { getResponse } from "./utils";
import { BASE_URL } from "./constants";

//export const BASE_URL = "https://api.ksusbel.nomoredomainsmonster.ru";

export const register = ({ password, email, name }) => {
    return fetch(`${BASE_URL}/signup`, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",          
        },
        body: JSON.stringify({ password, email, name }),
    }).then((res) => getResponse(res));
};

export const authorize = ({ password, email, name }) => {
    return fetch(`${BASE_URL}/signin`, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email, name }),
    }).then((res) => getResponse(res));
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    }).then((res) => getResponse(res));
};
