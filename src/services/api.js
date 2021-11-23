import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

// const getConfig = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

const doSignIn = (email, password) => {
  const body = { email, password };
  return axios.post(`${BASE_URL}/auth/login`, body);
};

const doSignUp = (email, password, name, image) => {
  const body = {
    email, password, name, image,
  };
  return axios.post(`${BASE_URL}/auth/sign-up`, body);
};

export { doSignIn, doSignUp };
