import axios from "axios";
import http from "../http-common";
import authHeader from './auth-header';

const API_URL = "https://the-drumian-commonwealth.herokuapp.com/api/auth/";
//const API_URL = "/api/auth/";
const USER_URL = "/api/users/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, discord_id) {
    return axios.post(API_URL + "signup", {
      username,
      password,
      discord_id,
      role: 1,
      rank: "Recruit",

    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();