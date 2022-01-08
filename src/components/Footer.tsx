import { Link } from 'react-router-dom'

import ProgressBar from './ProgressBar'

import { FooterStyle } from '../styles/FixedComponentsStyle'
import { ContainerStyle } from '../styles/GlobalStyle'

export default function Footer() {
  return (
    <FooterStyle>
      <ContainerStyle>
        <nav>
          <ul>
            <li>
              <Link to="/habitos">Hábitos</Link>
            </li>

            <li>
              <Link to="/hoje">
                <ProgressBar />
              </Link>
            </li>

            <li>
              <Link to="/historico">Histórico</Link>
            </li>
          </ul>
        </nav>
      </ContainerStyle>
    </FooterStyle>
  )
}
