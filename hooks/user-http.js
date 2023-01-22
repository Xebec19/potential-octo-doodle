import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_APP_BASE_URL,
  timeout: 1000,
});

const useHttp = () => {
  return instance;
};

export default useHttp;
