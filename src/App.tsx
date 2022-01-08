import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Habits from './components/Habits'

import UserContext from './contexts/UserContext'

import {
  UserInterface,
  UserContextInterface,
} from './interfaces/User/UserContextInterface'
import FontStyles from './styles/FontStyles'

export default function App() {
  const [user, setUser] = useState<UserInterface | null>(null)

  const userState = useMemo<UserContextInterface>(
    () => ({ user, setUser }),
    [user]
  )

  return (
    <BrowserRouter>
      <FontStyles />
      <GlobalStyle />

      <UserContext.Provider value={userState}>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="cadastro" element={<SignUp />} />
          <Route path="habitos" element={<Habits />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
