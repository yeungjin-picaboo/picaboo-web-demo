import axios from "axios";

export const mainRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: { "Content-Type": "application/json" },
});
