import Cookie from "js-cookie";
const API = "http://localhost:3000/api";

export const getToken = () => {
  const token = Cookie.get("token");
  return token;
};

export const auth = {
  signin: `${API}/auth/verify`,
  signup: `${API}/auth/signup`,
};

export const session = {
  current: `${API}/auth/current`,
};

export const tasks = {
  list: `${API}/tasks`,
  get: (id) => `${API}/tasks/${id}`,
  create: `${API}/tasks`,
  update: (id) => `${API}/tasks/${id}`,
  deleteData: (id) => `${API}/tasks/${id}`,
};
