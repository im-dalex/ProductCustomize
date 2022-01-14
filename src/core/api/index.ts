import axios from "axios";
import { API } from "@/config";

export const api = axios.create({
  baseURL: API.BASE_URL,
  timeout: API.TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
