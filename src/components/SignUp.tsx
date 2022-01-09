import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'

import Input from './Form/Input'
import Button from './Form/Button'

import { MessageStyle, SignFormStyle } from '../styles/FormStyle'
import { ContainerStyle } from '../styles/GlobalStyle'

import logo from '../assets/Logo.svg'

import { createNewUser } from '../services/userService'

export default function SignUp() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const elements = useMemo(
    () => ({ email, password, name, image }),
    [email, password, name, image]
  )

  const handleSubmitSuccess = useCallback(() => {
    setMessage('Usuário cadastrado com sucesso!')
    setIsLoading(false)
  }, [])

  const handleSubmitError = useCallback((error) => {
    const messages: { [key: number]: string } = {
      400: 'Dados inseridos invalidos',
      409: 'Usuário já cadastrado',
    }

    const defaultErrorMessage =
      'Erro desconhecido! Atualize a página ou entre em contato'

    setMessage(messages[error.status] || defaultErrorMessage)
    setIsLoading(false)
  }, [])

  const handleSubmit = useCallback((event, body) => {
    event.preventDefault()
    setIsLoading(true)
    createNewUser(body).then(handleSubmitSuccess).catch(handleSubmitError)
  }, [])

  return (
    <ContainerStyle>
      <SignFormStyle onSubmit={(event) => handleSubmit(event, elements)}>
        <img src={logo} alt="Logo TrackIt" />

        {message ? <MessageStyle>{message}</MessageStyle> : null}

        <Input
          value={email}
          setValue={setEmail}
          type="email"
          isLoading={isLoading}
        />

        <Input
          value={password}
          setValue={setPassword}
          type="password"
          isLoading={isLoading}
        />

        <Input
          value={name}
          setValue={setName}
          type="name"
          isLoading={isLoading}
        />

        <Input
          value={image}
          setValue={setImage}
          type="image"
          isLoading={isLoading}
        />

        <Button isLoading={isLoading}>Cadastrar</Button>

        <Link to="/">Já tem uma conta? Faça login!</Link>
      </SignFormStyle>
    </ContainerStyle>
  )
}
