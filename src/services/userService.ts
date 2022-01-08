import axios, { AxiosError, AxiosResponse } from 'axios'

import {
  LoginInterface,
  LoginResponseInterface,
} from '../interfaces/User/LoginInterface'

import NewUserInterface from '../interfaces/User/NewUserInterface'

const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

type RegisterReturn = AxiosResponse<AxiosError> | unknown
type LoginReturn = AxiosResponse<LoginResponseInterface | AxiosError> | unknown

export async function createNewUser(
  body: NewUserInterface
): Promise<RegisterReturn> {
  try {
    return axios.post(`${url}/sign-up`, body)
  } catch (err) {
    return axios.isAxiosError(err) ? err.response : err
  }
}

export async function signInAndGetToken(
  body: LoginInterface
): Promise<LoginReturn> {
  try {
    return axios.post(`${url}/login`, body)
  } catch (err) {
    return axios.isAxiosError(err) ? err.response : err
  }
}
