import { useContext } from 'react'

import { HeaderStyle } from '../styles/FixedComponentsStyle'

import UserContext from '../contexts/UserContext'
import { ContainerStyle } from '../styles/GlobalStyle'

export default function Header() {
  const context = useContext(UserContext)
  const user = context?.user || null

  return user ? (
    <HeaderStyle>
      <ContainerStyle>
        <h1>TrackIt</h1>
        <img src={user.image} alt="Foto de perfil" />
      </ContainerStyle>
    </HeaderStyle>
  ) : null
}
