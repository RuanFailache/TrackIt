import styled from 'styled-components'

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
    color: #52b6ff;
  }
`

export const InputStyle = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: #dbdbdb;
  }
`

interface ButtonStyleInterface {
  width?: string
}

export const ButtonStyle = styled.button<ButtonStyleInterface>`
  display: block;
  width: ${(props) => props.width || '100%'};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  background-color: #52b6ff;
  color: #ffffff;
  cursor: pointer;
`

export const ErrorMessageStyle = styled.p`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 17px;
`
