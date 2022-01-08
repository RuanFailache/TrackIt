import { useMemo } from 'react'

import { InputStyle } from '../../styles/FormStyle'

import InputInterface from '../../interfaces/InputInterface'
import NewUserInterface from '../../interfaces/User/NewUserInterface'

export default function Input(props: InputInterface) {
  const { value, setValue, type, isLoading } = props

  const placeholder = useMemo<string>(() => {
    const options: NewUserInterface = {
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
