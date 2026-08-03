import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const adminApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});