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
    const formData = new FormData();
    formData.append('username', userObj.username);
    formData.append('password', userObj.password);
    formData.append('firstName', userObj.firstName);
    formData.append('lastName', userObj.lastName);
    formData.append('photo', userObj.photoUri);
    console.log(formData);
    return axios.post(
      `${baseUrl}/auth/signup`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
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
