import styled from 'styled-components'
import themes from './themes'

export const SignFormStyle = styled.form`
  display: flex;
  flex-flow: nowrap column;
  gap: 5px;
  margin-top: 60px;

  & > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  & > a {
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 14px;
    line-height: 17px;
    color: ${themes.lightBlue};
  }
`

export const InputStyle = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: solid 1px ${themes.gray};
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  color: ${themes.darkGray};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${themes.gray};
  }
`

export const ButtonStyle = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  background-color: ${themes.lightBlue};
  color: ${themes.white};
  cursor: pointer;
`

export const MessageStyle = styled.p`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 19px;
  color: ${themes.darkGray};
`
