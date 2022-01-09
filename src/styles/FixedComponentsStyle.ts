import styled from 'styled-components'
import themes from './themes'

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background-color: ${themes.darkBlue};
  z-index: 1;

  div {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: 'Playball', cursive;
    font-size: 38px;
    line-height: 41px;
    color: ${themes.white};
  }

  img {
    display: block;
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 51px;
  }
`

export const FooterStyle = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: ${themes.white};

  ul {
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
  }

  a {
    font-size: 18px;
    line-height: 21px;
    color: ${themes.lightBlue};
    text-decoration: none;
  }
`

export const ProgressBarStyle = styled.div`
  position: fixed;
  width: 91px;
  bottom: 15px;
  left: calc(50% - 45px);
  cursor: pointer;

  strong {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
`
