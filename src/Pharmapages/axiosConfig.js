import axios from "axios";

const instance = axios.create({
  baseURL: "https://sample.rupioo.com",
});

export default instance;
