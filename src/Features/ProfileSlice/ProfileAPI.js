import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProfile = async (data) => {
  let url = `${BASE_URL}/api/user/getProfile`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};
