import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'

import Input from './User/Input'
import Button from './User/Button'

import { ErrorMessageStyle, SignFormStyle } from '../styles/FormStyle'
import { ContainerStyle } from '../styles/GlobalStyle'

import logo from '../assets/Logo.jpg'

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

  const handleSubmitSuccess = useCallback((response) => {
    if (response.status === 201) {
      setMessage('Usuário cadastrado com sucesso!')
      setIsLoading(false)
      return response.data
    }
    throw response
  }, [])

  const handleSubmitError = useCallback((error) => {
    const { status } = error.response

    if (status === 422 || status === 409) {
      setMessage('Dados inseridos inválidos')
    }

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

        {message ? <ErrorMessageStyle>{message}</ErrorMessageStyle> : null}

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

        <Link to="/sign-in">Já tem uma conta? Faça login!</Link>
      </SignFormStyle>
    </ContainerStyle>
  )
}
