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

export const allUnverifiedTherapists = async (data) => {
  let url = `${BASE_URL}/api/user/getunverified-therapists`;
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

export const singleTherapy = async (data) => {
  let url = `${BASE_URL}/api/user/gettherapy/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const singleCustomer = async (data) => {
  let url = `${BASE_URL}/api/user/getcustomer/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};
export const deleteUser = async (data) => {
  let url = `${BASE_URL}/api/user/delete-user/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.delete(url, {
    headers: headers,
  });
  return res;
};
export const updateuser = async (data) => {
  let url = `${BASE_URL}/api/user/delete-user/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.put(url, data.body, {
    headers: headers,
  });
  return res;
};
