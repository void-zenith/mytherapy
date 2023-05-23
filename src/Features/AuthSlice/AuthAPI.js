import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = async (data) => {
  let url = `${BASE_URL}/api/auth/login`;
  return await axios.post(url, data);
};

export const register = async (data) => {
  let url = `${BASE_URL}/api/auth/register`;
  return await axios.post(url, data.allregisterDetails);
};
