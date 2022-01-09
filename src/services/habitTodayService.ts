import axios, { AxiosError, AxiosResponse } from 'axios'
import TodayHabitsInterface from '../interfaces/Today/TodayHabitsInterface'

import getConfig from './getConfig'

const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

type ReturnTodayHabits =
  | AxiosResponse<TodayHabitsInterface | AxiosError>
  | unknown

type NoReturn = AxiosResponse<AxiosError> | unknown

export async function getTodayHabits(
  token: string
): Promise<ReturnTodayHabits> {
  return axios.get(`${url}/today`, getConfig(token))
}

export async function checkHabit(id: number, token: string): Promise<NoReturn> {
  return axios.post(`${url}/${id}/check`, {}, getConfig(token))
}

export async function uncheckHabit(
  id: number,
  token: string
): Promise<NoReturn> {
  return axios.post(`${url}/${id}/uncheck`, {}, getConfig(token))
}
