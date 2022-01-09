import axios, { AxiosError, AxiosResponse } from 'axios'

import HabitInterface from '../interfaces/Habit/HabitInterface'
import NewHabitInterface from '../interfaces/Habit/NewHabitInterface'
import getConfig from './getConfig'

const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'

type ReturnHabit = AxiosResponse<HabitInterface | AxiosError> | unknown
type HabitList = AxiosResponse<HabitInterface[] | AxiosError> | unknown
type NoReturn = AxiosResponse<AxiosError> | unknown

export async function createNewHabit(
  body: NewHabitInterface,
  token: string
): Promise<ReturnHabit> {
  return axios.post(`${url}/habits`, body, getConfig(token))
}

export async function getHabits(token: string): Promise<HabitList> {
  return axios.get(`${url}/habits`, getConfig(token))
}

export async function deleteHabit(
  id: number,
  token: string
): Promise<NoReturn> {
  return axios.delete(`${url}/habits/${id}`, getConfig(token))
}
