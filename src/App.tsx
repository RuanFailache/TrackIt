import { useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Habits from './components/Habits/Habits'

import UserContext from './contexts/UserContext'

import {
  UserInterface,
  UserContextInterface,
} from './interfaces/User/UserContextInterface'

import FontStyles from './styles/FontStyles'
import Today from './components/Today/Today'

export default function App() {
  const [user, setUser] = useState<UserInterface | null>(null)

  const userState = useMemo<UserContextInterface>(
    () => ({ user, setUser }),
    [user]
  )

  return (
    <>
      <FontStyles />
      <GlobalStyle />

      <UserContext.Provider value={userState}>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="cadastro" element={<SignUp />} />
          {user ? (
            <>
              <Route path="habitos" element={<Habits />} />
              <Route path="hoje" element={<Today />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
          <Route path="*" element={<Navigate to="/habitos" />} /> :
        </Routes>
      </UserContext.Provider>
    </>
  )
}
