import { Dispatch, SetStateAction } from 'react'

export default interface InputInterface {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isLoading: boolean
  type: 'email' | 'password' | 'name' | 'image'
}
