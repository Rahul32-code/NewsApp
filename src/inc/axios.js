import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org",
    // url: "https://newsapi.org",
    // withCredentials: true,
})

export default axiosInstance;