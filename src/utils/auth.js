import { getResponse } from "./utils";
import { BASE_URL } from "./constants";

export const register = ({ password, email, name }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cross-Origin-Resource-Policy": "cross-origin",
        },
        body: JSON.stringify({ password, email, name }),
    }).then((res) => getResponse(res));
};

export const authorize = ({ password, email, name }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cross-Origin-Resource-Policy": "cross-origin",
        },
        body: JSON.stringify({ password, email, name }),
    }).then((res) => getResponse(res));
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Cross-Origin-Resource-Policy": "cross-origin",
        },
    }).then((res) => getResponse(res));
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Cross-Origin-Resource-Policy": "cross-origin",
        },
    }).then((res) => getResponse(res));
};
