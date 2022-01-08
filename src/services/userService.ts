import axios, { AxiosError, AxiosResponse } from 'axios'

const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

interface User {
  email: string
  password: string
  name: string
  image: string
}

interface NewUser {
  email: string
  password: string
}

interface SignInResponse {
  name: string
  image: string
  token: string
}

export async function createNewUser(
  body: User
): Promise<AxiosResponse<AxiosError> | unknown> {
  try {
    return axios.post(`${url}/sign-up`, body)
  } catch (err) {
    return axios.isAxiosError(err) ? err.response : err
  }
}

export async function signInAndGetToken(
  body: NewUser
): Promise<AxiosResponse<SignInResponse | AxiosError> | unknown> {
  try {
    return axios.post(`${url}/login`, body)
  } catch (err) {
    return axios.isAxiosError(err) ? err.response : err
  }
}
