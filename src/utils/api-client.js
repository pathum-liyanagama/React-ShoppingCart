import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
