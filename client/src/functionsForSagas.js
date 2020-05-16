import axios from "axios";

const apiUrl = "http://localhost:8080";
const setHeadersWithToken = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
};
export const submitRegistration = (d) => {
    return axios.post(
        `${apiUrl}/registration`,
        d.payload,
    )
};
export const submitLogin = (d) => {
    return axios.post(
        `${apiUrl}/login`,
        d.payload,
    )
};
export const checkToken = () => {
    return axios.post(
        `${apiUrl}/checkToken`,
        {},
        {headers: setHeadersWithToken()}
    )
};
export const submitWorker = (d) => {
    return axios.post(
        `${apiUrl}/addWorker`,
        d.payload,
        {headers: setHeadersWithToken()}
    )
};