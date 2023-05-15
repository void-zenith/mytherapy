import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export const allOccupations = async (data) => {
  let url = `${BASE_URL}/api/occupation/getalloccupation`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const addOccupation = async (data) => {
  let url = `${BASE_URL}/api/occupation/addoccupation`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.post(
    url,
    { occupation: data.occupationName },
    {
      headers: headers,
    }
  );
  return res;
};

export const deleteOccupation = async (data) => {
  let url = `${BASE_URL}/api/occupation/deleteoccupation/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, {
    headers: headers,
  });
  return res;
};

export const updateOccupation = async (data) => {
  let url = `${BASE_URL}/api/occupation/updateoccupation/${data.id}`;
  let headers = {
    authorization: `Bearer ${data.token}`,
  };
  const res = await axios.get(url, data.body, {
    headers: headers,
  });
  return res;
};
