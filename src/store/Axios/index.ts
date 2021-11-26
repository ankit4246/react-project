import Axios from "axios";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const baseURL = "http://localhost:8000/api/v1";
const instance = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
