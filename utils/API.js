import axios from "axios";
import * as config from "../config.json";

const baseUrl = config.API_URL;

export default {
  login: (userObj) => {
    return axios.post(`${baseUrl}/auth/login`, userObj);
  },
  logout: () => {
    return axios.post(`${baseUrl}/auth/logout`);
  },
  getUser: () => {
    return axios.get(`${baseUrl}/api/user`);
  },
  registerUser: (userObj) => {
    return axios.post(`${baseUrl}/auth/signup`, userObj);
  },
  saveBook: (bookId) => {
    return axios.post(`${baseUrl}/api/user/saved/` + bookId);
  },
  unsaveBook: (bookId) => {
    return axios.delete(`${baseUrl}/api/user/saved/` + bookId);
  },
  getUserBooks: () => {
    return axios.get(`${baseUrl}/api/user/`);
  },
  getRecommendations: () => {
    return axios.get(`${baseUrl}/api/book/recommendations`);
  }
};
