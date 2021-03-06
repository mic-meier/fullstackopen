import axios from "axios";

const baseUrl = "/api/persons";

const getContacts = () => {
  const res = axios.get(baseUrl);
  return res.then(res => res.data);
};

const createContact = newContact => {
  const res = axios.post(baseUrl, newContact);
  return res.then(res => res.data);
};

const deleteContact = id => {
  const res = axios.delete(`${baseUrl}/${id}`);
  return res.then(res => res.data);
};

const updateContact = (id, updateContact) => {
  const res = axios.put(`${baseUrl}/${id}`, updateContact);
  return res.then(res => res.data);
};

export default { getContacts, createContact, deleteContact, updateContact };
