import axios from "axios";

const instance = axios.create({
  baseURL: "https://sample.rupioo.com",
  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "https://nodejsbackend.astrologically.in",
  // baseURL: "http://43.205.241.133:4000"
});

export default instance;
