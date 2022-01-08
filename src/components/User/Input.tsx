import { Dispatch, SetStateAction, useMemo } from 'react'

import { InputStyle } from '../../styles/FormStyle'

interface InputInterface {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isLoading: boolean
  type: 'email' | 'password' | 'name' | 'image'
}

interface User {
  email: string
  password: string
  name: string
  image: string
}

export default function Input(props: InputInterface) {
  const { value, setValue, type, isLoading } = props

  const placeholder = useMemo(() => {
    const options: User = {
      email: 'E-mail',
      password: 'Senha',
      name: 'Nome',
      image: 'Foto',
    }

    return options[type]
  }, [])

  return (
    <InputStyle
      value={value}
      onChange={(event) => setValue(event.target.value)}
      type={type !== 'password' ? 'text' : 'password'}
      placeholder={placeholder}
      disabled={isLoading}
      required
    />
  )
}
