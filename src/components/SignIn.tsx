import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useContext, useMemo, useState } from 'react'

import Input from './Form/Input'
import Button from './Form/Button'

import { MessageStyle, SignFormStyle } from '../styles/FormStyle'
import { ContainerStyle } from '../styles/GlobalStyle'

import logo from '../assets/Logo.svg'

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

  const adjustResponseData = useCallback((data) => {
    const result = data

    delete result.id
    delete result.email
    delete result.password

    return result
  }, [])

  const handleSubmitSuccess = useCallback((response) => {
    const user = adjustResponseData(response.data)
    context?.setUser(user)
    setIsLoading(false)
    navigateTo('/habitos')
  }, [])

  const handleSubmitError = useCallback((error) => {
    const { status } = error.response

    if (status === 401) {
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

        <Button isLoading={isLoading}>Entrar</Button>

        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </SignFormStyle>
    </ContainerStyle>
  )
}
