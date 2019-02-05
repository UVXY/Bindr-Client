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
    return axios.put(`${baseUrl}/api/user/saved/${bookId}`);
  },
  unsaveBook: (bookId) => {
    return axios.delete(`${baseUrl}/api/user/saved/${bookId}`);
  },
  getUserBooks: () => {
    return axios.get(`${baseUrl}/api/user/`);
  },
  getRecommendations: () => {
    return axios.get(`${baseUrl}/api/book/recommendations`);
  },
  getBookByTag: (tag) => {
    return axios.get(`${baseUrl}/api/tag/${tag}`);
  },
  makeComment: (comment) => {
    return axios.post(`${baseUrl}/api/comment/`, comment);
  },
  makeAudioComment: (comment) => {
    console.log(comment)
    const formData = new FormData();
    const filenameParts = comment.audioName.split('.');
    const fileType = filenameParts[filenameParts.length - 1];
    formData.append('audio', comment.audio);
    formData.append('content', comment.content);
    formData.append('id', comment.id)
    formData.append('audio-comment', {
      uri: comment.audioURI,
      name: `${filenameParts[0]}.${fileType}`,
      type: `audio/${fileType}`
    });
    return axios.post(
      `${baseUrl}/api/comment/audio`, 
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
  }
};
