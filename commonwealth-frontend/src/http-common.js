import axios from "axios";

export default axios.create({
  baseURL: "https://the-drumian-commonwealth.herokuapp.com/api",
  //baseURL: "https://the-drumian-commonwealth.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});