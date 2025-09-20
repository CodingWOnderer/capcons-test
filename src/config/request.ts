import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://v2.api.capcons.ai/stage",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,

});

 