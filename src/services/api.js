import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const doSignIn = (body) => axios.post(`${BASE_URL}/auth/login`, body);

export const doSignUp = (body) => axios.post(`${BASE_URL}/auth/sign-up`, body);

export const createNewHabit = (token, body) => axios.post(`${BASE_URL}/habits`, body, getConfig(token));

export const getHabits = (token) => (
  axios.get(`${BASE_URL}/habits`, getConfig(token))
);

export const deleteHabit = (token, habitId) => (
  axios.delete(`${BASE_URL}/habits/${habitId}`, getConfig(token))
);
