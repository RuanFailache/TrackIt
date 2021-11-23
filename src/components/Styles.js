import styled from 'styled-components';

import themes from '../styles/themes';

export const ContainerStyle = styled.div`
  display: block;
  width: 325px;
  margin: 0 auto;
  padding: 90px 0 30px;
  position: relative;
  box-sizing: border-box;
`;

export const TextInputStyle = styled.input`
  display: block;
  width: 100%;
  padding: 7.5px;
  border: solid 1px ${themes.lightGray};
  border-radius: 5px;
  box-sizing: border-box;

  font-size: 20px;
  line-height: 24px;
  color: ${themes.darkGray};

  &::placeholder {
    color: ${themes.lightGray};
  }
`;

export const FilledButtonStyle = styled.button`
  display: block;
  padding: 7.5px;
  border: none;
  border-radius: 5px;
  background-color: ${themes.lightBlue};

  &, & > a {
    font-size: 20px;
    line-height: 24px;
    color: ${themes.white};
  }

  &:disabled {
    opacity: .7;
  }
`;

export const SignFormStyle = styled.form`
  display: flex;
  flex-flow: nowrap column;
  gap: 7.5px;
  margin: 30px 0;
`;

export const SignLinkStyle = styled.button`
  display: block;
  border: none;
  background: transparent;
  margin: 0 auto;

  & > a {
    font-size: 14px;
    line-height: 17px;
    color: ${themes.lightBlue};
  }
`;
