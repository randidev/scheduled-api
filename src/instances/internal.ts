import axios, { AxiosInstance } from "axios";

const internalApi: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3003",
});

export default internalApi;
