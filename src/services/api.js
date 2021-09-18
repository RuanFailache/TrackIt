import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const getConfig = (token) => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});

const postLogin = (email, password) => {
  const body = { email, password };
  return axios.post(`${BASE_URL}/auth/login`, body);
};

export { postLogin };
