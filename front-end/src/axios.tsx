import axios from "axios";

const baseURL = "https://dobby-assignment.herokuapp.com/api";

export const customAxios = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
