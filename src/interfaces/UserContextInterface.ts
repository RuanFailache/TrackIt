import { Dispatch, SetStateAction } from 'react'

export interface UserInterface {
  name: string
  image: string
  token: string
}

export interface UserContextInterface {
  user: UserInterface | null
  setUser: Dispatch<SetStateAction<UserInterface | null>>
}
