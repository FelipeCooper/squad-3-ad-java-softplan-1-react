import axios from "axios";
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

api.interceptors.request.use(async config => {
    config.headers.Authorization = getToken();
  return config;
});

export default api;
export const delay = (time)=> new Promise(resolve => setTimeout(resolve, time));
