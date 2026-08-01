import axios from "axios";

export const adminApi = axios.create({
    baseURL: "http://localhost:5001/api/admin",
});