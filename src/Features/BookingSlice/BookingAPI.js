import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const createBooking = async (data) => {
  let url = `${BASE_URL}/api/booking/createbooking`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.post(url, data.body, {
    headers: headers,
  });
  return res;
};
export const cancelBooking = async (data) => {
  let url = `${BASE_URL}/api/booking/cancelbooking/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.delete(url, {
    headers: headers,
  });
  return res;
};
