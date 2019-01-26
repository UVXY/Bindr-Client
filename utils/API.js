import axios from "axios";
import * as config from "../config.json";

const baseUrl = config.API_URL;

export default {
    login: (userObj) => {
        // return axios.post("http://localhost:3001/auth/login", userObj)
        return axios.post(`${baseUrl}/auth/login`, userObj)
    },
    logout: () => {
        // return axios.post("http://localhost:3001/auth/logout")
        return axios.post(`${baseUrl}/auth/logout`)
    },
    getUser: () => {
        // return axios.get("http://localhost:3001/auth/user")
        return axios.get(`${baseUrl}/auth/user`)
    },
    registerUser: (userObj) => {
        // return axios.post("http://localhost:3001/auth/signup", userObj)
        return axios.post(`${baseUrl}/auth/signup`, userObj)
    },
    saveBook: (bookObj, userId) => {
        // return axios.post("http://localhost:3001/api/book/" + userId, bookObj)
        return axios.post(`${baseUrl}/api/book/` + userId, bookObj)
    },
    getUserBooks: (userId) => {
        // return axios.get("http://localhost:3001/api/book/" + userId)
        // return axios.get(`${baseUrl}/api/book/` + userId)
        return axios.get(`${baseUrl}/api/book/saved/` + userId)
    }
} 