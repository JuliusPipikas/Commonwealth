import axios from 'axios';
import authHeader from './auth-header';
import http from "../http-common";

const API_URL = 'https://the-drumian-commonwealth.herokuapp.com/api/test/';
//const API_URL = "/api/test/";

class UserDataService {
  getPublicContent() {
    return axios.get(API_URL + 'all', { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  //==============================//

  getAll() {
    return http.get("/users", { headers: authHeader() });
  }

  get(user_id) {
    return http.get(`/users/${user_id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/users", data, { headers: authHeader() });
  }

  update(user_id, data) {
    return http.put(`/users/${user_id}`, data, { headers: authHeader() });
  }

  delete(user_id) {
    return http.delete(`/users/${user_id}`, { headers: authHeader() });
  }
}

export default new UserDataService();