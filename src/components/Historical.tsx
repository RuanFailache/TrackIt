import { MessageStyle } from '../styles/FormStyle'
import { ContainerStyle, MainStyle } from '../styles/GlobalStyle'
import { HistoricalTitleStyle } from '../styles/HistoricalStyle'
import Footer from './Footer'
import Header from './Header'

export default function Historical() {
  return (
    <>
      <Header />

      <MainStyle>
        <ContainerStyle>
          <HistoricalTitleStyle>
            <h2>Historico</h2>
          </HistoricalTitleStyle>

          <MessageStyle>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </MessageStyle>
        </ContainerStyle>
      </MainStyle>

      <Footer />
    </>
  )
}
