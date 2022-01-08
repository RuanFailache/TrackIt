import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import UserContext from './contexts/UserContext'

import {
  UserInterface,
  UserContextInterface,
} from './interfaces/User/UserContextInterface'

export default function App() {
  const [user, setUser] = useState<UserInterface | null>(null)

  const userState = useMemo<UserContextInterface>(
    () => ({ user, setUser }),
    [user]
  )

  return (
    <BrowserRouter>
      <GlobalStyle />

      <UserContext.Provider value={userState}>
        <Routes>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
