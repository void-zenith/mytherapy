import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const allTherapists = async (data) => {
  let url = `${BASE_URL}/api/user/getalltherapists`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const allCustomers = async (data) => {
  let url = `${BASE_URL}/api/user/getallusers`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};
