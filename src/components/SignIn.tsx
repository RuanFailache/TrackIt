import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useContext, useMemo, useState } from 'react'

import Input from './User/Input'
import Button from './User/Button'

import { ErrorMessageStyle, SignFormStyle } from '../styles/FormStyle'
import { ContainerStyle } from '../styles/GlobalStyle'

import logo from '../assets/Logo.jpg'

import { signInAndGetToken } from '../services/userService'

import UserContext from '../contexts/UserContext'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const navigateTo = useNavigate()

  const context = useContext(UserContext)

  const elements = useMemo(() => ({ email, password }), [email, password])

  const handleSubmitSuccess = useCallback((response) => {
    if (response.status === 200) {
      const { data } = response

      delete data.id
      delete data.email
      delete data.password

      context?.setUser(data)

      setIsLoading(false)
      navigateTo('/sign-up')
    } else throw response
  }, [])

  const handleSubmitError = useCallback((error) => {
    const { status } = error.response

    if (status === 422) {
      setMessage('Dados inseridos inválidos!')
    }

    setIsLoading(false)
  }, [])

  const handleSubmit = useCallback((event, body) => {
    event.preventDefault()
    setIsLoading(true)
    signInAndGetToken(body).then(handleSubmitSuccess).catch(handleSubmitError)
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

        <Button isLoading={isLoading}>Entrar</Button>

        <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
      </SignFormStyle>
    </ContainerStyle>
  )
}
