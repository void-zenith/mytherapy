import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const allRoles = async (data) => {
  let url = `${BASE_URL}/api/role/getallrole`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const addRole = async (data) => {
  let url = `${BASE_URL}/api/role/addrole`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.post(
    url,
    { role: data.rolename },
    {
      headers: headers,
    }
  );
  return res;
};

export const deleterole = async (data) => {
  let url = `${BASE_URL}/api/role/deleterole/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const updaterole = async (data) => {
  let url = `${BASE_URL}/api/role/updaterole/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, data.body, {
    headers: headers,
  });
  return res;
};

export const sinlgeRole = async (data) => {
  let url = `${BASE_URL}/api/role/singlerole/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};
