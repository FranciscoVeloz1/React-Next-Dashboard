const API = process.env.API_DEV;

const endPoints = {
  auth: {
    signin: `${API}/auth/signin`,
    signup: `${API}/auth/signup`,
  },
  tasks: {
    list: `${API}/tasks`,
  },
};

export default endPoints;
