import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function contactsApi () {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(credentials) {
  const { data } = await axios.post(`/contacts`, credentials);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
