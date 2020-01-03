import axios from "axios";

const baseUrl = "/api/notes";

const getAll = () => {
  const res = axios.get(baseUrl);
  return res.then(res => res.data);
};

const create = newObject => {
  const res = axios.post(baseUrl, newObject);
  return res.then(res => res.data);
};

const update = (id, newObject) => {
  const res = axios.put(`${baseUrl}/${id}`, newObject);
  return res.then(res => res.data);
};

export default {
  getAll,
  create,
  update
};
