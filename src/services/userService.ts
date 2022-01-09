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
  return axios.post(`${url}/sign-up`, body)
}

export async function signInAndGetToken(
  body: LoginInterface
): Promise<LoginReturn> {
  return axios.post(`${url}/login`, body)
}
